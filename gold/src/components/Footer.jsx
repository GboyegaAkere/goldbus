import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 rounded-2xl px-10 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-yellow-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-base">
              <span className="text-yellow-600">Aureus</span> Elite Gold
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            We are one of the top premium gold trading &amp; investment companies,
            delivering excellence and generational wealth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Services", href: "#services" },
              { label: "Our Products", href: "#products" },
              { label: "Contact Us", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-slate-400 text-xs hover:text-yellow-600 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Gold Trading", href: "#services" },
              { label: "Bullion & Coins", href: "#services" },
              { label: "Gold Investment Plans", href: "#services" },
              { label: "Portfolio Management", href: "#services" },
              { label: "Gold Certification", href: "#services" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-slate-400 text-xs hover:text-yellow-600 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-bold mb-5">Contact Us</h4>
          <div className="flex flex-col gap-4">
            {[
              { icon: <Phone size={14} />, text: "+8 624 713 7241", href: "tel:+86247137241" },
              { icon: <Mail size={14} />, text: "hello@aureusElite.com", href: "mailto:hello@aureusElite.com" },
              { icon: <MapPin size={14} />, text: "14/6 Gold Avenue, Lagos, Nigeria", href: "#contact" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-start gap-3 group">
                <span className="text-yellow-600 mt-0.5 shrink-0">{item.icon}</span>
                <span className="text-slate-400 text-xs leading-relaxed group-hover:text-yellow-600 transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs">Copyright © 2024 Aureus Elite Gold. All rights reserved.</p>
        <div className="flex gap-5">
          {["Terms & Conditions", "Privacy Policy"].map((l) => (
            <a key={l} href="#" className="text-slate-500 text-xs hover:text-yellow-600 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}