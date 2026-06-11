import { ArrowUpRight } from "lucide-react";
// import hero from "../images/hero.jpg"

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-22 pb-8">
      {/* Top two-column text row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 items-start">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-4">
            Welcome to Aureus Elite Gold
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mining for a{" "}
            <span className="italic text-yellow-700">golden</span>{" "}
            future
          </h1>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between gap-6 pt-2">
          <p className="text-gray-500 text-sm leading-relaxed">
            We mine more than just ore — we forge legacies. With over 7 years of experience,
            we are committed to delivering quality &amp; innovation in gold extraction and trading.
          </p>
          <div>
            <a href="#projects" className="inline-flex items-center gap-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-semibold px-6 py-3 rounded transition-colors duration-200">
              Our Projects <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Full-width hero image */}
      <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden relative bg-gray-900">
        <img
           src="/hero.jpg"
          alt="Aureus Elite Gold mining operations"
          className="w-full h-full object-cover"
        />
        
        {/* Bottom-left text overlay */}
        <div className="absolute bottom-5 left-5">
          <div className="bg-black bg-opacity-40 border border-yellow-700 border-opacity-40 rounded-lg px-4 py-3 backdrop-blur-sm">
            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest">Certified Gold Operations</p>
            <p className="text-white text-opacity-60 text-xs mt-0.5">ISO 9001 · Verified &amp; Trusted</p>
          </div>
        </div>
      </div>
    </section>
  );
}