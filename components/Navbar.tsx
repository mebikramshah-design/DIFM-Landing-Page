"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#brochure", label: "Brochure" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#inquiry", label: "Request Service" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className={`flex items-center ${scrolled ? "text-brand-navy" : "text-white"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Darwish Interserve FM"
            className="h-12 w-auto hidden"
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

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-brand-teal ${
                scrolled ? "text-brand-navy" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#inquiry" className="btn-primary !py-2 !px-5">
            Get a Quote
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`md:hidden rounded-md p-2 ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-navy/10 bg-white">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-brand-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
