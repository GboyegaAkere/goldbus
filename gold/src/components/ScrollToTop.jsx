import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <button
      onClick={scrollUp}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
    >
      <ArrowUp size={18} />
    </button>
  ) : null;
}