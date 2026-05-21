import { Mail, MapPin, Phone, Clock } from "lucide-react";

const items = [
  { icon: MapPin, title: "Office", body: "Doha, Qatar" },
  { icon: Phone,  title: "Phone",  body: "+974 4416 7155" },
  { icon: Mail,   title: "Email",  body: "bikram.shah@darwishinterserve.com" },
  { icon: Clock,  title: "Hours",  body: "24/7 Operations" }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-3">Talk to our team.</h2>
          <p className="mt-4 text-brand-navy/70 max-w-md">
            Reach us directly or visit our office. We respond to inquiries
            within one business day.
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-ivory text-brand-navy">
                  <Icon size={18} />
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
                    {title}
                  </dt>
                  <dd className="text-sm font-medium text-brand-navy">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-navy/10 shadow-card">
          <iframe
            title="DIFM Office Map"
            src="https://www.google.com/maps?q=Doha,Qatar&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
