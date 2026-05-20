import { Award, Building2, Users, Wrench } from "lucide-react";

const points = [
  {
    icon: Building2,
    title: "Integrated FM",
    body: "Single-window delivery of Hard FM, Soft FM, MEP and specialist services across commercial, industrial and residential portfolios."
  },
  {
    icon: Wrench,
    title: "Engineering led",
    body: "Asset-centric maintenance plans, CAFM-driven workflows and qualified engineers ensuring uptime and lifecycle value."
  },
  {
    icon: Users,
    title: "Skilled workforce",
    body: "In-house technicians, supervisors and operatives — trained, certified and deployable on short notice across Qatar."
  },
  {
    icon: Award,
    title: "Quality & compliance",
    body: "ISO-aligned processes, HSE governance and transparent KPIs reported to clients month on month."
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">About DIFM</span>
          <h2 className="section-title mt-3">
            A trusted facility management partner — built around your assets.
          </h2>
          <p className="mt-5 text-brand-navy/70">
            Darwish Interserve Facility Management is a Qatar-based integrated
            FM provider serving government, commercial, industrial and
            hospitality clients. We combine engineering depth, disciplined
            operations and a service-first culture to keep your facilities
            safe, compliant and performing at their best.
          </p>
          <p className="mt-4 text-brand-navy/70">
            From single-service mandates to fully outsourced FM contracts,
            our teams deliver measurable outcomes — backed by transparent
            reporting and a 24/7 operations desk.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-ghost">Explore Services</a>
            <a href="#inquiry" className="btn-primary">Request a Proposal</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-navy/10 bg-brand-ivory/40 p-6 transition hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-brand-navy/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
