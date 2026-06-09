import { ArrowUpRight, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-14">
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
 <a href="https://t.me/17188142775"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-semibold px-5 py-3 rounded transition-colors whitespace-nowrap"
>
  Get a Quote <ArrowUpRight size={15} />
</a>

  <div className="flex items-center">
    <div className="w-9 h-9 rounded-full border border-slate-400 flex items-center justify-center text-slate-500 shrink-0">
      <Phone size={15} />
    </div>
   <div className="mr-5">
  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium whitespace-nowrap">Call support</p>
  
   <a href="https://wa.me/17474006208"
    target="_blank"
    rel="noopener noreferrer"
    className="text-base font-bold text-slate-900 whitespace-nowrap hover:text-yellow-700 transition-colors"
  >
    +17474006208
  </a>
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