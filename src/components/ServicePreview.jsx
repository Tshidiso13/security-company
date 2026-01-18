// src/components/ServicePreview.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/**
 * Lightweight intersection observer hook (no external libs)
 * Adds smooth "reveal" animations when section enters viewport.
 */
function useInView(options = { root: null, threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // trigger once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

const services = [
  {
    title: "On-Site Guarding",
    desc: "Professional armed/unarmed guards for estates, offices, retail, and construction sites—disciplined, visible, and alert.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "PSIRA-ready teams",
  },
  {
    title: "Mobile Patrols",
    desc: "Scheduled and rapid patrol coverage to deter threats, check perimeters, and support on-site teams with quick response.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M3 13l2-6h11l3 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 13v5M17 13v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 18h2M16 18h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    tag: "Visible deterrence",
  },
  {
    title: "CCTV Monitoring",
    desc: "Smart monitoring and incident escalation—keep eyes on entrances, parking, and high-risk zones with logged reporting.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M2 9l10-4 10 4-10 4L2 9z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 13v7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 20h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "24/7 eyes-on",
  },
  {
    title: "Access Control",
    desc: "Visitor management, gate control, and patrol logging—tight entry protocols to reduce unauthorized access.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M7 10V7a5 5 0 0110 0v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 10h12v10H6V10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 14v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "Strict protocols",
  },
];

export default function ServicePreview() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Decorative floating elements (creative “top class” look) */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-24 -left-24 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl animate-[floatSlow_10s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-0 right-12 h-40 w-40 rounded-full bg-slate-900/10 blur-2xl animate-[floatSlow_9s_ease-in-out_infinite]" />

      {/* Inline keyframes (no config edits needed) */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, 18px, 0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-120%); opacity: 0; }
          20% { opacity: 0.6; }
          60% { opacity: 0.25; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glass {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(12px);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={[
            "max-w-2xl",
            inView ? "opacity-100 animate-[rise_700ms_ease-out_both]" : "opacity-0",
          ].join(" ")}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-semibold shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
            Services Preview
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Security solutions built for real-world risk
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            From visible deterrence to monitored surveillance—our services are designed to
            reduce incidents, improve control, and keep people and property safe.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <ServiceCard key={s.title} service={s} inView={inView} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={[
            "mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
            inView ? "opacity-100 animate-[rise_700ms_ease-out_150ms_both]" : "opacity-0",
          ].join(" ")}
        >
          <p className="text-sm text-slate-600">
            Not sure what you need? Tell us your site type and risk level—we’ll recommend the best package.
          </p>
          <div className="flex gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition shadow-sm"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, inView, index }) {
  // Staggered reveal (clean, “premium” feel)
  const delayMs = 120 + index * 110;

  return (
    <div
      className={[
        "group relative rounded-2xl border border-slate-200 bg-white shadow-sm",
        "overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        inView ? "opacity-100 animate-[rise_700ms_ease-out_both]" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {/* Floating highlight ring */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-yellow-200/70 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-y-0 left-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
      </div>

      <div className="p-5">
        {/* Icon bubble */}
        <div className="flex items-center justify-between gap-3">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-slate-900/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm ring-1 ring-black/10 group-hover:scale-[1.03] transition-transform">
              {service.icon}
            </div>
          </div>

          {/* Mini floating badge */}
          <span className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-slate-800 ring-1 ring-slate-200 shadow-sm">
            {service.tag}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {service.desc}
        </p>

        {/* “Floating line” divider */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Action */}
        <div className="mt-4 flex items-center justify-between">
          <Link
            to="/services"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700 transition"
          >
            Learn more →
          </Link>

          {/* Tiny “status lights” */}
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
            <span className="h-2 w-2 rounded-full bg-slate-900/40" />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-yellow-400 to-slate-900 opacity-80 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
