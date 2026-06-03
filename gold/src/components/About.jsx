import { ArrowUpRight, Phone } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-200 px-10 py-14 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            About Us
          </p>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 mb-5">
            Gold trading experts you've trusted over 20 years.
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            Our journey is defined by our passion for gold and our dedication to our clients.
            We believe in building wealth through integrity, precision, &amp; excellence.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            To deliver premium-grade gold acquisition and trading services that exceed our
            clients' expectations and secure generational wealth.
          </p>

          <div className="flex flex-row items-center gap-6 mt-8">
  <button className="inline-flex items-center gap-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-semibold px-5 py-3 rounded transition-colors whitespace-nowrap">
    Get a Quote <ArrowUpRight size={15} />
  </button>

  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full border border-slate-400 flex items-center justify-center text-slate-500 shrink-0">
      <Phone size={15} />
    </div>
    <div className="mr-5">
      <p className="text-xs text-slate-400 uppercase tracking-wide font-medium whitespace-nowrap">Call support centre</p>
      <p className="text-base font-bold mr-7 text-slate-900 whitespace-nowrap">+17474006208</p>
    </div>
  </div>
</div>
        </div>

        {/* Right — image */}
        <div className="w-full h-80 rounded-2xl overflow-hidden">
          <img
           src="/gold.jpg"
            alt="Gold bars and trading operations"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}