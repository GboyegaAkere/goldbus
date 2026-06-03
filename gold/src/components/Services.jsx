import { Gem, Users, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Gem size={20} />,
    title: "Premium Gold Quality",
    text: "We pride ourselves on sourcing and delivering only the finest certified gold in every transaction.",
  },
  {
    icon: <Users size={20} />,
    title: "Client-Centric Approach",
    text: "We take time to understand your investment goals and needs, providing personalised gold solutions.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Comprehensive Trading",
    text: "From gold bars to bullion coins, we offer a full range of acquisition and trading services to meet all your needs.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted & Certified",
    text: "We operate with full regulatory compliance and ISO certification, ensuring every deal is secure and transparent.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-200 rounded-2xl px-10 py-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-3">
        Our Speciality
      </p>
      <h2 className="text-4xl font-bold text-slate-900 mb-10">
        Top-notch gold services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100">
            <div className="w-10 h-10 rounded-lg border border-yellow-400 flex items-center justify-center text-yellow-700 mb-4">
              {s.icon}
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}