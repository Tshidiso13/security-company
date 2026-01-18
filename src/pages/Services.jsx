// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Top-class Services page:
 * - Premium header
 * - Reusable ServiceCard component
 * - 3-column desktop grid
 * - Smooth reveal animations (no libs)
 * - Rich, client-attracting copy
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
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

const Icon = ({ name }) => {
  const cls = "h-6 w-6";
  switch (name) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
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
      );
    case "camera":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
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
      );
    case "patrol":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
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
          <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "event":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
          <path
            d="M7 3v3M17 3v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6h16v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 10h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 15l2 2 4-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "access":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
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
      );
    default:
      return null;
  }
};

export default function Services() {
  const { ref, inView } = useInView();

  const services = useMemo(
    () => [
      {
        title: "Armed & Unarmed Guarding",
        desc:
          "Professional, visible guarding for residential estates, retail, offices, and construction sites. " +
          "We focus on deterrence, access control, patrol routines, and disciplined shift handovers to keep your site stable and secure.",
        icon: "shield",
        highlights: ["Site supervision & reporting", "Vetting & uniform standards", "SOP-driven operations"],
        to: "/contact",
      },
      {
        title: "CCTV Monitoring",
        desc:
          "Real-time monitoring for entrances, high-risk zones, and perimeters—supported by incident logs and escalation. " +
          "Improve response time, reduce blind spots, and strengthen evidence collection when it matters.",
        icon: "camera",
        highlights: ["Incident escalation", "Daily activity logs", "Targeted camera coverage"],
        to: "/contact",
      },
      {
        title: "Mobile Patrols",
        desc:
          "Scheduled and rapid patrols that disrupt criminal patterns and reinforce on-site teams. " +
          "We perform perimeter checks, visibility sweeps, and quick support—ideal for night coverage and wide properties.",
        icon: "patrol",
        highlights: ["Perimeter & hotspot checks", "Visible deterrence", "Quick response support"],
        to: "/contact",
      },
      {
        title: "Event Security",
        desc:
          "Crowd control, access management, and incident prevention for events and venues. " +
          "We help you reduce risk, protect guests, and maintain order—from entry screening to post-event dispersal.",
        icon: "event",
        highlights: ["Entry screening & control", "Crowd management", "Risk-focused staffing"],
        to: "/contact",
      },
      {
        title: "Access Control",
        desc:
          "Visitor management, gate control, ID verification, and controlled entry procedures that reduce unauthorized access. " +
          "We align protocols with your site rules to keep movement safe and documented.",
        icon: "access",
        highlights: ["Visitor logs & verification", "Gate procedures", "Access discipline & compliance"],
        to: "/contact",
      },
    ],
    []
  );

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
              Services
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Security services designed to reduce risk
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Choose disciplined guarding, strong access control, and proactive patrol coverage—
              built around your site’s needs, operating hours, and risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                What we offer
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Every service includes clear procedures, shift handovers, incident reporting,
                and a professional on-site presence—because consistency is what prevents incidents.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm w-fit"
            >
              Request a Quote
            </Link>
          </div>

          {/* 3 columns desktop */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} service={service} inView={inView} index={idx} />
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className={[
              "mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6",
              "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
              inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_120ms_both]" : "opacity-0",
            ].join(" ")}
          >
            <div>
              <p className="text-base font-semibold text-slate-900">
                Need a custom security plan?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Tell us your site type, location, and operating hours—then we’ll recommend the best coverage.
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
    </main>
  );
}

function ServiceCard({ service, inView, index }) {
  const delay = 100 + index * 110;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-yellow-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="flex items-start justify-between gap-4">
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-slate-900/10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white ring-1 ring-black/10 group-hover:scale-[1.03] transition-transform">
            <Icon name={service.icon} />
          </div>
        </div>

        <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
          Premium Service
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {service.desc}
      </p>

      {/* Highlights */}
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Learn more */}
      <div className="mt-4 flex items-center justify-between">
        <Link
          to={service.to}
          className="text-sm font-semibold text-slate-900 hover:text-slate-700 transition"
        >
          Learn More →
        </Link>

        <span className="text-xs text-slate-500">
          Fast response • Clear reporting
        </span>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-slate-900 via-yellow-400 to-slate-900 opacity-80 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
