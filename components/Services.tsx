import {
  Wrench, Zap, Droplets, Wind, Cpu, Hammer,
  Sparkles, Bug, Trash2, Trees, ShieldCheck, ConciergeBell
} from "lucide-react";

const hardFM = [
  { icon: Wrench,  title: "MEP Maintenance",     body: "Planned & reactive MEP services across all asset classes." },
  { icon: Wind,    title: "HVAC",                body: "Chillers, AHUs, FCUs, ducting, IAQ and BMS integration." },
  { icon: Zap,     title: "Electrical",          body: "LV systems, panels, DBs, lighting and power quality." },
  { icon: Droplets,title: "Plumbing",            body: "Domestic water, drainage, pumps and water treatment." },
  { icon: Hammer,  title: "Civil Maintenance",   body: "Building fabric, finishes, joinery and waterproofing." },
  { icon: Cpu,     title: "BMS & Generators",    body: "BMS upkeep, gensets, ATS, UPS and load management." }
];

const softFM = [
  { icon: Sparkles,      title: "Cleaning",         body: "Daily, periodic and specialized cleaning programs." },
  { icon: ConciergeBell, title: "Housekeeping",     body: "Hospitality-grade housekeeping & front-of-house." },
  { icon: Bug,           title: "Pest Control",     body: "MoPH-aligned IPM programs and one-off treatments." },
  { icon: Trash2,        title: "Waste Management", body: "Segregation, collection and reporting." },
  { icon: Trees,         title: "Landscaping",      body: "Soft & hard landscaping, irrigation and upkeep." },
  { icon: ShieldCheck,   title: "Security",         body: "Trained guards, supervisors and access control." }
];

function Card({ icon: Icon, title, body }: any) {
  return (
    <div className="group rounded-2xl border border-brand-navy/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-card">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-ivory text-brand-navy transition group-hover:bg-brand-teal group-hover:text-white">
        <Icon size={20} />
      </div>
      <h4 className="mt-4 text-base font-semibold">{title}</h4>
      <p className="mt-1.5 text-sm text-brand-navy/70">{body}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title mt-3">
            Hard FM and Soft FM — under one accountable partner.
          </h2>
          <p className="mt-4 text-brand-navy/70">
            Choose individual services or a bundled IFM contract. Every
            mandate is delivered against measurable KPIs and transparent
            reporting.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-brand-navy/10" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
              Hard FM
            </span>
            <span className="h-px flex-1 bg-brand-navy/10" />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hardFM.map((s) => <Card key={s.title} {...s} />)}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-brand-navy/10" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
              Soft FM
            </span>
            <span className="h-px flex-1 bg-brand-navy/10" />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {softFM.map((s) => <Card key={s.title} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
