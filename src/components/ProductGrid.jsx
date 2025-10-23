export default function ProductGrid() {
  const products = [
    {
      name: 'AeroNova S1',
      tagline: 'Ultra-light 4K creator drone',
      price: '$899',
      accent: 'from-cyan-400 to-emerald-500',
    },
    {
      name: 'AeroNova X Pro',
      tagline: 'Enterprise mapping & inspection',
      price: '$1,699',
      accent: 'from-fuchsia-400 to-cyan-400',
    },
    {
      name: 'AeroNova FPV',
      tagline: 'Immersive flight with agile control',
      price: '$1,199',
      accent: 'from-amber-400 to-rose-500',
    },
  ];

  return (
    <section id="products" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Choose your flight companion</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Three precision-tuned systems, one mission: elevate what you can do in the air.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${p.accent} opacity-90`}> 
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_40%)] mix-blend-overlay" />
                <div className="absolute inset-0 grid place-items-center">
                  <svg width="220" height="140" viewBox="0 0 360 220" className="text-white/90 drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    <g fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="110" y="80" width="140" height="60" rx="14" />
                      <circle cx="80" cy="110" r="28" />
                      <circle cx="280" cy="110" r="28" />
                      <line x1="138" y1="80" x2="138" y2="60" />
                      <line x1="222" y1="80" x2="222" y2="60" />
                      <line x1="138" y1="140" x2="138" y2="160" />
                      <line x1="222" y1="140" x2="222" y2="160" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-300">{p.tagline}</p>
                  </div>
                  <span className="rounded-md bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-inset ring-white/15">{p.price}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 transition hover:bg-emerald-400">Add to cart</a>
                  <a href="#" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10">Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
