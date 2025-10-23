import { Camera, Shield, Battery, Gauge } from 'lucide-react';

const features = [
  {
    title: '4K Stabilized Imaging',
    desc: 'Shoot crisp aerial footage with 3-axis gimbal stabilization and low-light optimization.',
    icon: Camera,
  },
  {
    title: 'Enterprise Safety',
    desc: 'Multi-sensor obstacle avoidance, geofencing, and secure link encryption.',
    icon: Shield,
  },
  {
    title: 'Endurance Battery',
    desc: 'Up to 42 minutes of flight time with smart thermal management.',
    icon: Battery,
  },
  {
    title: 'Sport Performance',
    desc: '68 km/h top speed with precision positioning and wind resistance.',
    icon: Gauge,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Why choose AeroNova</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Built for creators, surveyors, responders, and inspectors who demand reliability and control.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
