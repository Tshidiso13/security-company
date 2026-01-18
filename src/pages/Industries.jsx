// src/pages/Industries.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/**
 * INDUSTRIES / CLIENTS page
 * - Premium header + subtle animated background
 * - Industry cards (image + name)
 * - Top-class hover effects + reveal animations
 * - Uses your local assets (replace file names below with yours)
 */

// ✅ Replace these imports with YOUR real asset file names (must exist)
import residentialImg from "../assets/residential.jpg";
import corporateImg from "../assets/corporate.jpg";
import retailImg from "../assets/retail.jpg";
import constructionImg from "../assets/construction.jpg";
import schoolsImg from "../assets/school.jpeg";
import Footer from "../components/Footer";

function useInView(options = { root: null, threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Industries() {
  const { ref, inView } = useInView();

  const industries = [
    {
      name: "Residential",
      img: residentialImg,
      tag: "Estates • Complexes • Homes",
      desc: "Visible guarding, access control, and patrol routines that protect residents, visitors, and property—day and night.",
    },
    {
      name: "Corporate",
      img: corporateImg,
      tag: "Offices • Buildings • HQ",
      desc: "Professional front-of-house security, visitor management, and controlled entry procedures that keep business operations secure.",
    },
    {
      name: "Retail",
      img: retailImg,
      tag: "Stores • Malls • Warehouses",
      desc: "Loss prevention, high-traffic monitoring, and rapid incident response—reducing shrinkage and improving customer safety.",
    },
    {
      name: "Construction",
      img: constructionImg,
      tag: "Sites • Equipment • Materials",
      desc: "Perimeter control, night coverage, and strict access logging to protect equipment and reduce theft and vandalism.",
    },
    {
      name: "Schools",
      img: schoolsImg,
      tag: "Schools • Campuses • Events",
      desc: "Controlled entry, safeguarding learners and staff, and calm crowd management during peak hours and school events.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-950 pt-[76px]">
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translate3d(0,0,0); }
            50% { transform: translate3d(0,18px,0); }
          }
          @keyframes gridMove {
            from { transform: translate3d(0,0,0); }
            to { transform: translate3d(-48px,48px,0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl animate-[floatSlow_10s_ease-in-out_infinite]" />
          <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-[0.14]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:48px_48px] animate-[gridMove_12s_linear_infinite]" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl animate-[fadeUp_700ms_ease-out_both]">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
              Industries / Clients
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Security coverage tailored to your environment
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Different industries carry different risks. We adapt procedures,
              staffing, and reporting to match your site’s traffic, operating
              hours, and exposure points.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section ref={ref} className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Industries we protect
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                From controlled access to visible deterrence and patrol routines—our
                teams bring discipline, compliance, and quick escalation procedures
                to every site.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm w-fit"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <IndustryCard
                key={industry.name}
                industry={industry}
                inView={inView}
                index={idx}
              />
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className={[
              "mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6",
              "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
              inView
                ? "opacity-100 animate-[fadeUp_700ms_ease-out_120ms_both]"
                : "opacity-0",
            ].join(" ")}
          >
            <div>
              <p className="text-base font-semibold text-slate-900">
                Not sure which coverage you need?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Share your industry, location, and operating hours—then we’ll recommend the right solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+27110000000"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition shadow-sm"
              >
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition shadow-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        </section>
      <Footer />
    </main>
  );
}

function IndustryCard({ industry, inView, index }) {
  const delay = 120 + index * 110;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={industry.img}
          alt={industry.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        {/* Image overlay for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Floating badge */}
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-900 ring-1 ring-slate-200 backdrop-blur-md">
          {industry.tag}
        </div>

        {/* Corner glow */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-yellow-400/35 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
          <span className="text-xs font-semibold text-slate-500">Protected sites →</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {industry.desc}
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mt-4 flex items-center justify-between">
          <Link
            to="/contact"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700 transition"
          >
            Get Coverage →
          </Link>

          {/* Tiny “status lights” */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
            <span className="h-2 w-2 rounded-full bg-slate-900/40" />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-yellow-400 to-slate-900 opacity-80 group-hover:opacity-100 transition-opacity" />
      
    </div>
  );
}
