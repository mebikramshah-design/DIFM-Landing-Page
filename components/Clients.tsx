const clients = [
  "Government", "Hospitality", "Healthcare", "Banking",
  "Retail", "Industrial", "Education", "Aviation"
];

export default function Clients() {
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
          Trusted across sectors in Qatar
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {clients.map((c) => (
            <div
              key={c}
              className="grid h-16 place-items-center rounded-xl border border-brand-navy/10 bg-brand-ivory/40 text-sm font-semibold text-brand-navy/70"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
