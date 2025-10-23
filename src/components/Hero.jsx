import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-emerald-400/10 to-blue-500/10 blur-3xl" />
        <div className="absolute right-[-20%] bottom-[-10%] h-[400px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Elevate your vision with next‑gen aerial performance
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Capture cinematic footage, map terrains, and inspect assets with precision-engineered drones designed for creators and professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-emerald-400">
                Explore Models
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-white/10">
                See Features
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.2),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <svg width="360" height="220" viewBox="0 0 360 220" className="drop-shadow-[0_10px_40px_rgba(16,185,129,0.25)]">
                  <g fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200">
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
              <div className="absolute bottom-3 right-3 rounded-md bg-black/30 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/15 backdrop-blur">
                Concept render
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
