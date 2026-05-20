import { Download, FileText, Eye } from "lucide-react";

export default function Brochure() {
  return (
    <section id="brochure" className="bg-brand-ivory/60 py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <span className="eyebrow">Company Brochure</span>
          <h2 className="section-title mt-3">
            Everything about DIFM — in one document.
          </h2>
          <p className="mt-4 text-brand-navy/70">
            Download or preview our latest company profile covering services,
            certifications, case studies and our delivery methodology.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/brochure/difm-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Eye size={16} /> View Brochure
            </a>
            <a
              href="/brochure/difm-company-profile.pdf"
              download
              className="btn-ghost"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-brand-navy/70">
            <li>• Company Profile (2025 edition)</li>
            <li>• ISO 9001 / 14001 / 45001 certificates</li>
            <li>• Service catalogue & SLAs</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-card">
            <div className="flex h-full w-full flex-col">
              <div className="flex items-center gap-2 border-b border-brand-navy/10 px-4 py-3">
                <FileText size={16} className="text-brand-teal" />
                <span className="text-xs font-semibold text-brand-navy">
                  difm-company-profile.pdf
                </span>
              </div>
              <div className="relative grid flex-1 place-items-center bg-gradient-to-br from-brand-navy via-brand-deep to-brand-steel text-white">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative z-10 px-8 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-gold text-brand-navy text-xl font-black">
                    DI
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">
                    Darwish Interserve FM
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Company Profile · Qatar · 2025
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brand-gold">
                    Reliable · Professional · 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
