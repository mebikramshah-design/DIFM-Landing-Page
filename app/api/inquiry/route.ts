import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png"
]);

function ref() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const stamp = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `DIFM-${stamp}-${rand}`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;background:#F4F1EB;font-weight:600;color:#0B2545;width:180px">${label}</td><td style="padding:6px 12px;color:#13315C">${escapeHtml(value)}</td></tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();

    if ((fd.get("company_website") as string | null)?.trim()) {
      return NextResponse.json({ ok: true, reference: ref() });
    }

    const fullName = String(fd.get("fullName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const category = String(fd.get("category") || "").trim();
    const details = String(fd.get("details") || "").trim();
    const consent = fd.get("consent");

    if (!fullName || !email || !phone || !category || !details || !consent) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const companyName = String(fd.get("companyName") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const location = String(fd.get("location") || "").trim();
    const manpower = String(fd.get("manpower") || "").trim();
    const startDate = String(fd.get("startDate") || "").trim();
    const contractPeriod = String(fd.get("contractPeriod") || "").trim();
    const gracePeriodEnd = String(fd.get("gracePeriodEnd") || "").trim();
    const contractEnd = String(fd.get("contractEnd") || "").trim();

    const attachment = fd.get("attachment") as File | null;
    let attachmentMeta: { name: string; size: number; type: string } | null = null;
    let attachmentBuffer: Buffer | null = null;

    if (attachment && attachment.size > 0) {
      if (attachment.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json({ error: "Attachment exceeds 10MB limit." }, { status: 400 });
      }
      if (!ALLOWED_TYPES.has(attachment.type)) {
        return NextResponse.json({ error: "Unsupported attachment type." }, { status: 400 });
      }
      attachmentBuffer = Buffer.from(await attachment.arrayBuffer());
      attachmentMeta = { name: attachment.name, size: attachment.size, type: attachment.type };
    }

    const reference = ref();
    const submittedAt = new Date().toISOString();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY,
          { auth: { persistSession: false } }
        );
        await supabase.from("inquiries").insert({
          reference,
          full_name: fullName,
          company_name: companyName || null,
          email,
          phone,
          category,
          service: service || null,
          location: location || null,
          manpower: manpower ? Number(manpower) : null,
          start_date: startDate || null,
          contract_period: contractPeriod || null,
          grace_period_end: gracePeriodEnd || null,
          contract_end: contractEnd || null,
          details,
          attachment: attachmentMeta,
          submitted_at: submittedAt
        });
      } catch (e) {
        console.error("Supabase insert failed:", e);
      }
    }

    let teamEmailId: string | null = null;
    let userEmailId: string | null = null;
    let emailError: string | null = null;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.INQUIRY_FROM_EMAIL || "DIFM Website <noreply@difm.qa>";
      const to = (process.env.INQUIRY_TO_EMAILS || "bikram.shah@darwishinterserve.com")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const html = `
        <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto">
          <div style="background:#0B2545;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
            <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#D4A24C">New inquiry</div>
            <div style="font-size:18px;font-weight:700;margin-top:4px">Darwish Interserve FM · Lead Form</div>
            <div style="font-size:12px;margin-top:6px;opacity:.75">Ref: ${reference}</div>
          </div>
          <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eee;border-top:0;border-radius:0 0 12px 12px;overflow:hidden">
            ${row("Full Name", fullName)}
            ${row("Company", companyName)}
            ${row("Email", email)}
            ${row("Phone", phone)}
            ${row("Service Category", category)}
            ${row("Specific Service", service)}
            ${row("Location", location)}
            ${row("Manpower", manpower)}
            ${row("Preferred Start Date", startDate)}
            ${row("Contract Period", contractPeriod)}
            ${row("Grace Period End Date", gracePeriodEnd)}
            ${row("Contract End Date", contractEnd)}
            ${row("Submitted At", submittedAt)}
            <tr><td colspan="2" style="padding:14px 12px;color:#0B2545;font-weight:600;background:#F4F1EB">Requirement Details</td></tr>
            <tr><td colspan="2" style="padding:12px;color:#13315C;white-space:pre-wrap">${escapeHtml(details)}</td></tr>
          </table>
          <p style="font-size:11px;color:#888;margin-top:12px">Sent from services.difm.qa · Inquiry routing</p>
        </div>
      `;

      const teamPayload: any = {
        from,
        to,
        replyTo: email,
        subject: `[DIFM] New ${category} inquiry — ${fullName}${companyName ? ` (${companyName})` : ""} · ${reference}`,
        html
      };
      if (attachmentBuffer && attachmentMeta) {
        teamPayload.attachments = [{ filename: attachmentMeta.name, content: attachmentBuffer }];
      }

      const teamResult = await resend.emails.send(teamPayload);
      if (teamResult.error) {
        emailError = `team: ${teamResult.error.name} — ${teamResult.error.message}`;
        console.error(`[DIFM inquiry ${reference}] team email failed:`, teamResult.error);
      } else {
        teamEmailId = teamResult.data?.id ?? null;
        console.log(`[DIFM inquiry ${reference}] team email sent (id=${teamEmailId}, to=${to.join(",")})`);
      }

      const userResult = await resend.emails.send({
        from,
        to: email,
        subject: `We've received your request — DIFM (${reference})`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;color:#0B2545">
            <p>Dear ${escapeHtml(fullName)},</p>
            <p>Thank you for contacting <strong>Darwish Interserve Facility Management</strong>. Our team has received your request and will contact you shortly.</p>
            <p>Your reference number is <strong>${reference}</strong>. Please retain it for any future correspondence.</p>
            <p style="margin-top:24px">Warm regards,<br/>The DIFM Team<br/><a href="mailto:bikram.shah@darwishinterserve.com">bikram.shah@darwishinterserve.com</a></p>
          </div>
        `
      });
      if (userResult.error) {
        emailError = (emailError ? emailError + " | " : "") + `user: ${userResult.error.name} — ${userResult.error.message}`;
        console.error(`[DIFM inquiry ${reference}] user confirmation email failed:`, userResult.error);
      } else {
        userEmailId = userResult.data?.id ?? null;
        console.log(`[DIFM inquiry ${reference}] user confirmation sent (id=${userEmailId}, to=${email})`);
      }
    } else {
      emailError = "RESEND_API_KEY not configured";
      console.warn(
        `[DIFM inquiry ${reference}] EMAIL DISABLED — RESEND_API_KEY missing. Submission saved but no notification sent.`,
        { fullName, email, phone, category }
      );
    }

    return NextResponse.json({
      ok: true,
      reference,
      emailed: !emailError,
      emailError: emailError || undefined,
      teamEmailId,
      userEmailId
    });
  } catch (err: any) {
    console.error("Inquiry route error:", err);
    return NextResponse.json(
      { error: "Could not submit your inquiry. Please try again or email bikram.shah@darwishinterserve.com." },
      { status: 500 }
    );
  }
}
