import { ArrowRight, FileText, PhoneCall, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="container-x relative z-10 flex min-h-[92vh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            <ShieldCheck size={14} /> ISO Certified · Qatar
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
            Integrated Facility Management Solutions in Qatar.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            Reliable. Professional. 24/7 support. Darwish Interserve FM delivers
            Hard FM, Soft FM, MEP, cleaning, security and skilled manpower —
            engineered for uptime and built on accountability.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#inquiry" className="btn-primary">
              Request Service <ArrowRight size={16} />
            </a>
            <a href="#brochure" className="btn-secondary">
              <FileText size={16} /> View Brochure
            </a>
            <a href="#contact" className="btn-secondary">
              <PhoneCall size={16} /> Contact Us
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["15+", "Years in Qatar"],
              ["500+", "Skilled Workforce"],
              ["120+", "Active Contracts"],
              ["24/7", "Operations Desk"]
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="text-3xl font-bold text-brand-gold">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
