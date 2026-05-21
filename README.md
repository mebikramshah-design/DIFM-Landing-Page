# Darwish Interserve FM — Landing Page

A professional facility-management lead-generation landing page for
**Darwish Interserve FM (Qatar)**. Built with **Next.js 14 (App Router) +
TypeScript + Tailwind CSS**. Inquiry submissions are routed to the sales
team via **Resend** and (optionally) persisted to **Supabase**.

## Sections

1. Hero (with CTAs: Request Service / View Brochure / Contact)
2. About DIFM
3. Company Brochure (PDF viewer / download)
4. Services — Hard FM and Soft FM
5. Why Choose Us
6. Sector strip
7. Inquiry Form (full lead form + auto routing)
8. Contact + Google Map
9. Footer
10. Floating WhatsApp CTA

## Inquiry routing

`POST /api/inquiry` accepts a `multipart/form-data` submission and:

1. Validates required fields, email format, attachment size (≤10MB) and MIME type.
2. Generates a unique `DIFM-YYYYMMDD-XXXX` reference.
3. Persists the inquiry to a `inquiries` table in Supabase (if configured).
4. Sends a formatted email to `sales@difm.qa` / `operations@difm.qa` via Resend, with the user's attachment.
5. Sends an auto-reply to the client.

## Setup

```bash
npm install
cp .env.example .env.local
# fill RESEND_API_KEY, INQUIRY_FROM_EMAIL, INQUIRY_TO_EMAILS, Supabase keys
npm run dev
```

Open http://localhost:3000

### Supabase schema (suggested)

```sql
create table public.inquiries (
  id            bigserial primary key,
  reference     text unique not null,
  full_name     text not null,
  company_name  text,
  email         text not null,
  phone         text not null,
  category      text not null,
  service       text,
  location      text,
  manpower      int,
  start_date    date,
  contract_period   text,
  grace_period_end  date,
  contract_end      date,
  details       text not null,
  attachment    jsonb,
  submitted_at  timestamptz not null default now()
);
alter table public.inquiries enable row level security;
```

Inserts run with the **service role key** server-side, so RLS stays on.

## Deployment

- **Hosting:** Vercel (auto SSL, edge CDN)
- **Domain:** point e.g. `services.difm.qa` via Cloudflare DNS
- **Brochure PDF:** drop the file at `/public/brochure/difm-company-profile.pdf`
- **QR code:** generate one pointing at `https://services.difm.qa`

## Roadmap

- Phase 2: Admin dashboard + quotation workflow
- Phase 3: CRM sync (Zoho/HubSpot), client portal, ticketing
