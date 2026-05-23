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
          <div className="h-[640px] w-full overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-card">
            <div className="flex h-full w-full flex-col">
              <div className="flex items-center gap-2 border-b border-brand-navy/10 px-4 py-3">
                <FileText size={16} className="text-brand-teal" />
                <span className="text-xs font-semibold text-brand-navy">
                  difm-company-profile.pdf
                </span>
              </div>
              <iframe
                src="/brochure/difm-company-profile.pdf#view=FitH"
                title="DIFM company profile brochure"
                className="h-full w-full flex-1 bg-brand-ivory"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
