import { ArrowUpRight } from "lucide-react";

const products = [
  {
    image: "/1.jpg",
    badge: "Gold Bar",
    badgeStyle: "bg-yellow-100 text-yellow-800",
    // title: "1kg Gold Bullion Bar",
    price: "$62,400",
    unit: "/ per bar",
    featured: false,
  },
  {
    image: "/13.jpg",
    badge: "Gold chains",
    badgeStyle: "bg-blue-100 text-blue-800",
    // title: "1oz Gold Bullion Coin",
    price: "$2,050",
    unit: "/ per coin",
    featured: true,
  },
  {
    image: "/14.jpg",
    badge: "Gold chain",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },
  {
    image: "/15.jpg",
    badge: "Gold chain",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },{
    image: "/16.jpg",
    badge: "Gold chain",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },
  {
    image: "/3.jpg",
    badge: "Gold chains",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },
  {
    image: "/4.jpg",
    badge: "Gold chains",
    badgeStyle: "bg-pink-100 text-pink-800",
    title: "100g Gold Ingot",
    price: "$6,400",
    unit: "/ per ingot",
    featured: false,
  },

  {
    image: "/5.jpg",
    badge: "Gold chains",
    badgeStyle: "bg-pink-100 text-pink-800",
    price: "$6,400",
    unit: "/ per ingot",
    featured: false,
  },

  {
    image: "/6.jpg",
    badge: "Gold chains",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },

  {
    image: "/7.jpg",
    badge: "Gold chain",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },
  {
    image: "/8.jpg",
    badge: "Gold chain",
    badgeStyle: "bg-green-100 text-green-800",
    // title: "500g Raw Gold Dust",
    price: "$29,800",
    unit: "/ per 500g",
    featured: false,
  },
  
];

export default function Products() {
  return (
    <section id="projects" className="bg-white px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700 mb-3">
          Our Products
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Crafted in Gold, Made to Last
        </h2>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Explore our exclusive collection of handcrafted gold jewellery — from elegant rings
          to bold chains, every piece is made from certified, premium-grade gold.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <div
            key={p.title}
            className={`rounded-xl border flex flex-col overflow-hidden ${
              p.featured ? "border-yellow-600 ring-2 ring-yellow-600" : "border-slate-200"
            } relative`}
          >
            {p.featured && (
              <div className="absolute top-3 right-3 bg-yellow-700 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Most Popular
              </div>
            )}

            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />

            <div className="p-5 flex flex-col gap-2 flex-1">
              <span className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full w-fit ${p.badgeStyle}`}>
                {p.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
              <div className="text-xl font-bold text-yellow-700 mt-1">
                {p.price} <span className="text-xs font-normal text-slate-400">{p.unit}</span>
              </div>
            </div>

            <div className="px-5 pb-5">
              
                <a href="https://wa.me/17474006208"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}