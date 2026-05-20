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
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`grid h-9 w-9 place-items-center rounded-lg font-black ${
              scrolled ? "bg-brand-navy text-white" : "bg-white text-brand-navy"
            }`}
          >
            DI
          </span>
          <span
            className={`hidden sm:block text-sm font-semibold leading-tight ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}
          >
            Darwish Interserve
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] opacity-70">
              Facility Management
            </span>
          </span>
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
