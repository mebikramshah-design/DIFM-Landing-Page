import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="container-x py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#top" className="inline-flex items-center text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Darwish Interserve FM"
              className="h-12 w-auto bg-white rounded-md p-1.5 hidden"
              onLoad={(e) => {
                e.currentTarget.classList.remove("hidden");
                const svg = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (svg) svg.classList.add("hidden");
              }}
              onError={(e) => { e.currentTarget.remove(); }}
            />
            <svg
              className="h-12 w-auto"
              viewBox="0 0 260 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Darwish Interserve Facility Management"
            >
              <text x="0" y="26" fontFamily="Inter, ui-sans-serif, sans-serif" fontWeight="800" fontSize="24" letterSpacing="1.5" fill="#00afd7">DARWISH</text>
              <text x="0" y="50" fontFamily="Inter, ui-sans-serif, sans-serif" fontWeight="800" fontSize="24" letterSpacing="1.5" fill="currentColor">INTERSERVE</text>
              <text x="0" y="62" fontFamily="Inter, ui-sans-serif, sans-serif" fontWeight="500" fontSize="7" letterSpacing="1.6" fill="currentColor" opacity="0.7">FACILITY MANAGEMENT · W.L.L.</text>
            </svg>
          </a>
          <p className="mt-5 max-w-md text-sm">
            Integrated Facility Management Solutions across Qatar — Hard FM,
            Soft FM, MEP, cleaning, security and skilled manpower. Reliable,
            professional and available 24/7.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-brand-gold">About</a></li>
            <li><a href="#services" className="hover:text-brand-gold">Services</a></li>
            <li><a href="#brochure" className="hover:text-brand-gold">Brochure</a></li>
            <li><a href="#inquiry" className="hover:text-brand-gold">Request Service</a></li>
            <li><a href="#contact" className="hover:text-brand-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" /> Doha, Qatar</li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5" /> +974 4416 7155</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5" /> bikram.shah@darwishinterserve.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Darwish Interserve Facility Management. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
