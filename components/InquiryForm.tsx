"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertTriangle } from "lucide-react";

const categories = [
  "Hard FM",
  "Soft FM",
  "MEP",
  "Cleaning & Housekeeping",
  "Security",
  "Manpower Supply",
  "Integrated FM (IFM)",
  "Other"
];

const servicesByCategory: Record<string, string[]> = {
  "Hard FM": ["HVAC", "Electrical", "Plumbing", "Civil Maintenance", "BMS", "Generator Maintenance"],
  "Soft FM": ["Housekeeping", "Pest Control", "Waste Management", "Landscaping", "Reception Services"],
  "MEP": ["Installation", "Maintenance", "Retrofit / Upgrade"],
  "Cleaning & Housekeeping": ["Daily Cleaning", "Periodic Deep Cleaning", "Post-construction Cleaning"],
  "Security": ["Manned Guarding", "Event Security", "Access Control"],
  "Manpower Supply": ["Technicians", "Helpers", "Supervisors", "Skilled Trades"],
  "Integrated FM (IFM)": ["Full IFM Contract", "Bundled Services"],
  "Other": ["Specify in details"]
};

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; ref: string }
  | { kind: "error"; message: string };

export default function InquiryForm() {
  const [category, setCategory] = useState<string>("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/inquiry", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setStatus({ kind: "success", ref: data.reference });
      form.reset();
      setCategory("");
    } catch (err: any) {
      setStatus({ kind: "error", message: err?.message || "Something went wrong" });
    }
  }

  if (status.kind === "success") {
    return (
      <section id="inquiry" className="bg-brand-ivory/60 py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-3xl border border-brand-teal/20 bg-white p-10 text-center shadow-card">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-teal/10 text-brand-teal">
              <CheckCircle2 size={28} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Inquiry received.</h2>
            <p className="mt-2 text-brand-navy/70">
              Thank you for contacting Darwish Interserve FM. Our team has
              received your request and will be in touch shortly.
            </p>
            <p className="mt-4 text-sm text-brand-navy/60">
              Your reference: <span className="font-mono font-semibold">{status.ref}</span>
            </p>
            <button
              onClick={() => setStatus({ kind: "idle" })}
              className="btn-ghost mt-8"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  const loading = status.kind === "loading";

  return (
    <section id="inquiry" className="bg-brand-ivory/60 py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="eyebrow">Request Service</span>
          <h2 className="section-title mt-3">Tell us what you need.</h2>
          <p className="mt-4 text-brand-navy/70">
            Share your requirement and our sales team will respond with a
            tailored proposal — typically within one business day.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-brand-navy/70">
            <li>• Detailed scoping by a qualified estimator</li>
            <li>• Transparent commercials and SLAs</li>
            <li>• Mobilization plan with clear milestones</li>
          </ul>
          <div className="mt-10 rounded-2xl border border-brand-navy/10 bg-white p-5">
            <p className="text-sm font-semibold">Prefer to talk?</p>
            <p className="mt-1 text-sm text-brand-navy/70">
              Call our sales line on{" "}
              <a className="font-semibold text-brand-teal" href="tel:+97444000000">
                +974 4400 0000
              </a>{" "}
              or email{" "}
              <a className="font-semibold text-brand-teal" href="mailto:sales@difm.qa">
                sales@difm.qa
              </a>
              .
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border border-brand-navy/10 bg-white p-6 sm:p-8 shadow-card"
          noValidate
        >
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="fullName">Full Name *</label>
              <input id="fullName" name="fullName" required className="field-input" placeholder="John Doe" />
            </div>
            <div>
              <label className="field-label" htmlFor="companyName">Company Name</label>
              <input id="companyName" name="companyName" className="field-input" placeholder="ABC Trading" />
            </div>
            <div>
              <label className="field-label" htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required className="field-input" placeholder="name@company.com" />
            </div>
            <div>
              <label className="field-label" htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" type="tel" required className="field-input" placeholder="+974 5xxx xxxx" />
            </div>
            <div>
              <label className="field-label" htmlFor="category">Service Category *</label>
              <select
                id="category"
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="field-input"
              >
                <option value="">Select category…</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="service">Specific Service</label>
              <select id="service" name="service" className="field-input" disabled={!category}>
                <option value="">{category ? "Select service…" : "Choose a category first"}</option>
                {(servicesByCategory[category] || []).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="location">Location</label>
              <input id="location" name="location" className="field-input" placeholder="Doha, Lusail…" />
            </div>
            <div>
              <label className="field-label" htmlFor="manpower">Manpower Required</label>
              <input id="manpower" name="manpower" type="number" min={0} className="field-input" placeholder="e.g. 10" />
            </div>
            <div>
              <label className="field-label" htmlFor="startDate">Preferred Start Date</label>
              <input id="startDate" name="startDate" type="date" className="field-input" />
            </div>
            <div>
              <label className="field-label" htmlFor="attachment">Attachment (PDF, DOCX, JPG, PNG · max 10MB)</label>
              <input
                id="attachment"
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="field-input file:mr-3 file:rounded-md file:border-0 file:bg-brand-navy file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="details">Requirement Details *</label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                className="field-input resize-y"
                placeholder="Briefly describe scope, duration, site, and any specific requirements."
              />
            </div>
            <div className="sm:col-span-2 flex items-start gap-3 text-xs text-brand-navy/70">
              <input id="consent" name="consent" type="checkbox" required className="mt-0.5" />
              <label htmlFor="consent">
                I agree to be contacted by Darwish Interserve FM regarding my inquiry and
                accept the privacy policy.
              </label>
            </div>
          </div>

          {status.kind === "error" && (
            <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertTriangle size={16} className="mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-brand-navy/60">
              We typically reply within one business day.
            </p>
            <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Submitting…" : "Submit Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
