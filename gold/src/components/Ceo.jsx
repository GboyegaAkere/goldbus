export default function CEO() {
  return (
    <section id="ceo" className="bg-white px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left — Image */}
        <div className="relative">
          <div className="w-full h-120 rounded-2xl overflow-hidden">
            <img
              src="/ceo.jpg"
              alt="CEO of Aureus Elite Gold"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Name badge over image */}
          <div className="absolute bottom-6 left-6 bg-slate-900 rounded-xl px-5 py-4 border-l-4 border-yellow-700">
            <p className="text-white text-sm font-bold">Eric Wayne</p>
            <p className="text-slate-400 text-xs mt-1">CEO · Aureus Elite Gold</p>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-3">
            Meet Our CEO
          </p>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Leading with <span className="italic text-yellow-700">vision,</span><br />
            driven by gold.
          </h2>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
            Eric Wayne
          </p>

          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            With over 20 years in the precious metals industry, Eric Wayne founded
            Aureus Elite Gold Company with a singular mission to make premium gold
            investment accessible, transparent, and trustworthy for everyone.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            His deep expertise in gold trading, global commodity markets, and wealth
            management has positioned Aureus Elite as one of the most respected gold
            companies in the region.
          </p>

          <div className="h-px bg-slate-200 my-8" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "$4B+", label: "Assets Managed" },
              { value: "1,200+", label: "Clients Served" },
              { value: "15+", label: "Countries Reached" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-yellow-700"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-yellow-50 border-l-4 border-yellow-700 px-5 py-4 rounded-r-xl">
            <p className="text-sm text-slate-500 italic leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              "Gold is not just a commodity, it is a legacy. We exist to help our
              clients build that legacy with confidence."
            </p>
            <p className="text-xs text-slate-400 mt-3">— Eric Wayne CEO</p>
          </div>
        </div>

      </div>
    </section>
  );
}