export default function HowWeWork() {
  const steps = [
    {
      num: "01.",
      title: "Initial Consultation",
      text: "We start by sitting down with you to understand your investment vision, goals, and budget to craft the right gold strategy.",
    },
    {
      num: "02.",
      title: "Gold Sourcing & Verification",
      text: "We source only certified, premium-grade gold and run rigorous quality checks to ensure every unit meets our standards.",
    },
    {
      num: "03.",
      title: "Secure Transaction",
      text: "All trades are executed through fully regulated, transparent channels — ensuring your investment is safe at every step.",
    },
    {
      num: "04.",
      title: "Delivery & Ongoing Support",
      text: "We handle secure delivery and remain available for ongoing portfolio advice, market updates, and future trades.",
    },
  ];

  return (
    <section className="bg-slate-200 rounded-2xl px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — image */}
        <div className="w-full h-96 rounded-2xl overflow-hidden">
          <img
            src="/com.jpg"
            alt="Gold trading operations"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — steps */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-3">
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Our work process
          </h2>

          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <div key={s.num}>
                <div className="flex gap-4 items-start py-5">
                  <span className="text-sm font-bold text-yellow-700 min-w-7 pt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.text}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px bg-slate-300 ml-10" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}