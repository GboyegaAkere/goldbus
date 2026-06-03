const testimonials = [
  { initials: "JD", name: "Jonathan Doe", role: "CEO, Apex Investments", color: "bg-yellow-700", quote: "Aureus Elite helped me build a gold portfolio that has consistently outperformed the market. Their expertise and transparency are unmatched." },
  { initials: "EM", name: "Emma Martinez", role: "Chairman, Orion Group", color: "bg-blue-900", quote: "From the first consultation to delivery, the process was seamless. I felt confident every step of the way knowing my assets were in safe hands." },
  { initials: "BF", name: "Ben Flake", role: "Portfolio Manager, Crest", color: "bg-violet-700", quote: "I've worked with several gold trading firms, but none come close to Aureus Elite's level of professionalism and quality of gold sourced." },
  { initials: "SK", name: "Sandra Kim", role: "Wealth Advisor, Nova Capital", color: "bg-teal-700", quote: "Their certified gold offerings gave me the peace of mind I needed. Aureus Elite's dedication to excellence truly sets them apart." },
  { initials: "RA", name: "Richard Mike", role: "Director, Goldstone Ltd", color: "bg-amber-700", quote: "The team at Aureus Elite understood my long-term goals and crafted a gold investment plan that perfectly aligned with my financial vision." },
  { initials: "LP", name: "Laura Patel", role: "CFO, Meridian Funds", color: "bg-blue-700", quote: "Exceptional service and absolute transparency. Aureus Elite made gold trading accessible and profitable for our entire investment group." },
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-slate-200 rounded-2xl py-14 overflow-hidden px-5">
      <div className="text-center px-10 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-slate-900">
          What clients are saying about us
        </h2>
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 w-max"
          style={{ animation: "marquee 28s linear infinite" }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
        >
          {doubled.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 w-72 shrink-0 border border-slate-100 flex flex-col justify-between gap-4">
              <div>
                <div className="text-yellow-600 text-sm mb-2">★★★★★</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  <span className="text-yellow-700 text-2xl leading-none mr-1">"</span>
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}