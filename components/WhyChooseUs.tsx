import { Clock, LineChart, ShieldCheck, Users, MapPin, Sparkles } from "lucide-react";

const items = [
  { icon: Clock,        title: "24/7 Operations Desk",   body: "Round-the-clock dispatch and emergency response." },
  { icon: Users,        title: "Skilled In-house Team",  body: "Certified engineers and operatives — no surprise sub-contracting." },
  { icon: ShieldCheck,  title: "HSE & Compliance",       body: "ISO-aligned, MoPH-compliant and audit-ready processes." },
  { icon: LineChart,    title: "KPI-driven Reporting",   body: "Monthly performance reviews with transparent SLAs." },
  { icon: MapPin,       title: "Pan-Qatar Coverage",     body: "Mobilized rapidly across Doha, Lusail, Al Wakrah & beyond." },
  { icon: Sparkles,     title: "Service-first Culture",  body: "A single-point-of-contact that owns outcomes, not just tasks." }
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-brand-navy py-20 sm:py-28 text-white">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Why DIFM
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            Engineered for uptime. Built on accountability.
          </h2>
          <p className="mt-4 text-white/70">
            Six reasons clients across Qatar choose Darwish Interserve FM as
            their long-term facilities partner.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-brand-gold/40 hover:bg-white/[0.07]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gold text-brand-navy">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
