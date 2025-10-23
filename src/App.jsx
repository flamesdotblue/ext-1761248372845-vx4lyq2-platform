import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
      </main>
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} AeroNova Drones. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <a className="transition hover:text-white" href="#features">Features</a>
              <a className="transition hover:text-white" href="#products">Products</a>
              <a className="transition hover:text-white" href="mailto:hello@aeronova.io">hello@aeronova.io</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
