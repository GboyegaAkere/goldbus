import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-yellow-700 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>A</span>
        </div>
        <span className="text-gray-900 font-semibold text-base tracking-tight">
          <span className="text-yellow-700">Aureus</span> Elite Gold
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "About Us"].map((l) => (
          <a key={l} href="#"
            className={`text-sm font-medium ${l === "Home" ? "text-yellow-700" : "text-gray-500 hover:text-gray-800"} transition-colors`}>
            {l}
          </a>
        ))}
        {["Services", "Projects"].map((l) => (
          <a key={l} href="#" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors">
            {l} <ChevronDown size={13} />
          </a>
        ))}
        <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Blog</a>
      </div>

      {/* CTA */}
      <button className="hidden md:block px-5 py-2 rounded-full border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200">
        Contact Us
      </button>

      {/* Mobile toggle */}
      <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-md px-6 py-5 flex flex-col gap-4 md:hidden">
          {["Home", "About Us", "Services", "Projects"].map((l) => (
            <a key={l} href="#" className="text-sm text-gray-600 hover:text-yellow-700">{l}</a>
          ))}
          <button className="mt-2 px-5 py-2 rounded-full border border-gray-900 text-sm font-medium w-fit">Contact Us</button>
        </div>
      )}
    </nav>
  );
}