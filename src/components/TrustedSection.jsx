// src/components/TrustedSection.jsx
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Smooth count-up animation when stats enter viewport.
 * - No external libs
 * - Runs once per page load
 */
function useInView(options = { root: null, threshold: 0.2 }) {
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

function useCountUp(target, startWhen, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let raf = null;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [target, startWhen, durationMs]);

  return value;
}

const StatIcon = ({ variant = "shield" }) => {
  // Inline SVG icons (keeps it dependency-free)
  const common = "h-6 w-6";
  switch (variant) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
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
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="9"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 21v-2a4 4 0 00-3-3.87"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3.13a4 4 0 010 7.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M10 6V5a2 2 0 012-2h0a2 2 0 012 2v1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 7h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 12h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path
            d="M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * OPTIONAL: Pass a bg image from your assets:
 * <TrustedSection bgImage={bgTrust} />
 */
export default function TrustedSection({ bgImage }) {
  const { ref, inView } = useInView();

  // Customize your stats here (these are “nice defaults”)
  const stats = useMemo(
    () => [
      {
        label: "Years Experience",
        value: 8,
        suffix: "+",
        icon: "briefcase",
        note: "Industry experience & site discipline",
      },
      {
        label: "Trained Guards",
        value: 120,
        suffix: "+",
        icon: "users",
        note: "Vetted, uniformed, and site-ready",
      },
      {
        label: "Clients Protected",
        value: 260,
        suffix: "+",
        icon: "shield",
        note: "Residential, commercial, and events",
      },
      {
        label: "PSIRA Registered",
        value: 100,
        suffix: "%",
        icon: "badge",
        note: "Compliance-driven operations",
      },
    ],
    []
  );

  // Animated count-ups (only when in view)
  const c0 = useCountUp(stats[0].value, inView, 1100);
  const c1 = useCountUp(stats[1].value, inView, 1250);
  const c2 = useCountUp(stats[2].value, inView, 1350);
  const c3 = useCountUp(stats[3].value, inView, 1000);

  const counts = [c0, c1, c2, c3];

  return (
    <section ref={ref} className="relative py-20 sm:py-24 overflow-hidden">
      {/* Animated floating background image / pattern */}
      <div className="absolute inset-0 -z-10">
        {bgImage ? (
          <>
            <img
              src={bgImage}
              alt="Trust background"
              className="h-full w-full object-cover scale-[1.03] opacity-80"
            />
            <div className="absolute inset-0 bg-slate-900/70" />
          </>
        ) : (
          <>
            {/* Fallback “premium” background if no image provided */}
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,179,1,0.20),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_45%)]" />
          </>
        )}

        {/* Floating overlay layers (parallax-ish movement) */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-300/15 blur-3xl animate-[floatA_10s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-[floatB_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl animate-[floatC_14s_ease-in-out_infinite]" />

        {/* Subtle moving “grid” texture */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:48px_48px] animate-[gridMove_12s_linear_infinite]" />
        </div>
      </div>

      {/* Inline animations */}
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,18px,0); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(-14px,14px,0); }
        }
        @keyframes floatC {
          0%, 100% { transform: translate3d(-50%,0,0); }
          50% { transform: translate3d(-50%,-16px,0); }
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={[
            "max-w-2xl",
            inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
          ].join(" ")}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-md">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
            Trusted Protection
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Security built on discipline, compliance, and results
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            We operate with strict procedures, trained personnel, and a clear chain of
            reporting—so every site remains controlled, monitored, and protected.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <StatCard
              key={s.label}
              stat={s}
              count={counts[idx]}
              inView={inView}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom “trust strip” */}
        <div
          className={[
            "mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6",
            "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
            inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_140ms_both]" : "opacity-0",
          ].join(" ")}
        >
          <div className="text-white">
            <p className="text-base font-semibold">Need a security plan that fits your site?</p>
            <p className="text-sm text-white/75 mt-1">
              Tell us your location, site type, and operating hours—we’ll recommend the right coverage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+27110000000"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, count, inView, index }) {
  const delay = 120 + index * 110;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-md p-6 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl",
        inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Floating accent glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-yellow-300/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 group-hover:scale-[1.03] transition-transform">
          <StatIcon variant={stat.icon} />
        </div>

        <span className="rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/10">
          Verified
        </span>
      </div>

      {/* Number */}
      <div className="mt-5 flex items-end gap-1">
        <p className="text-4xl font-semibold tracking-tight text-white">
          {count}
        </p>
        <span className="mb-1 text-lg font-semibold text-yellow-300">
          {stat.suffix}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
      <p className="mt-2 text-sm text-white/75 leading-relaxed">{stat.note}</p>

      {/* Decorative bottom line */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Micro detail row */}
      <div className="mt-4 flex items-center justify-between text-xs text-white/70">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
          Operational
        </span>
        <span className="text-white/60">Updated regularly</span>
      </div>
    </div>
  );
}
