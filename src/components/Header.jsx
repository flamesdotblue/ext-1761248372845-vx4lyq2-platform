import { Camera } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950">
              <Camera className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              AeroNova <span className="text-slate-400">Drones</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#products" className="text-slate-300 hover:text-white transition">Products</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#products" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-white/10">Buy Now</a>
          </div>
        </div>
      </div>
    </header>
  );
}
