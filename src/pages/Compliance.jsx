// src/pages/Compliance.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * COMPLIANCE / FAQ page (Modern + top-class)
 * - Premium header
 * - Compliance section (PSIRA, training, vetting, insurance)
 * - FAQ accordion (expand/collapse) with smooth animations
 * - No external libraries
 */

function useInView(options = { root: null, threshold: 0.12 }) {
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

const BadgeIcon = ({ name }) => {
  const cls = "h-6 w-6";
  switch (name) {
    case "psira":
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
    case "training":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
          <path
            d="M2 7l10-4 10 4-10 4L2 7z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 10v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M22 7v6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "vetting":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M21 21l-4.5-4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.5 11l1.8 1.8 3.7-4.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "insurance":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none">
          <path
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 13h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 9v8"
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

const complianceItems = [
  {
    title: "PSIRA Registration",
    icon: "psira",
    points: [
      "We operate under PSIRA regulations and maintain professional conduct across all deployments.",
      "Clear supervision structures, incident escalation, and documented site procedures.",
      "Uniform standards and officer identification aligned to client requirements.",
    ],
    note:
      "Tip: Display your PSIRA registration number across the website footer and quote documents to build trust.",
  },
  {
    title: "Training Standards",
    icon: "training",
    points: [
      "Officers receive role-based training aligned to site duties (access control, patrol routines, incident handling).",
      "Ongoing refreshers: shift discipline, radio procedure, reporting, and client communication.",
      "Site induction: each officer is briefed on SOPs, risk points, and escalation contacts before deployment.",
    ],
    note:
      "A trained officer prevents incidents through awareness and procedure—not just presence.",
  },
  {
    title: "Vetting Process",
    icon: "vetting",
    points: [
      "We screen candidates to ensure reliability, professionalism, and suitability for client environments.",
      "Officers are selected based on site risk level, shift requirements, and communication ability.",
      "Ongoing supervision includes shift handovers, attendance control, and duty compliance checks.",
    ],
    note:
      "Vetting + supervision is what maintains consistent quality over time.",
  },
  {
    title: "Insurance Cover",
    icon: "insurance",
    points: [
      "Operational coverage is maintained to protect both our teams and clients during service delivery.",
      "Risk planning and reporting reduce exposure, improve response time, and support investigations.",
      "Documented incident reporting assists with evidence trails and post-incident reviews.",
    ],
    note:
      "Insurance is important—but prevention, procedure, and reporting are what reduce claims in the first place.",
  },
];

const faqs = [
  {
    q: "Are your officers PSIRA registered?",
    a: "Yes. We prioritize compliance and professional conduct. Where required, we provide documentation and ensure officers deployed to your site meet operational standards and site requirements.",
  },
  {
    q: "Do you provide armed and unarmed guarding?",
    a: "Yes. Staffing is based on your risk level, operating hours, and site type. We assess exposure points (access, perimeter, traffic) and recommend the correct coverage.",
  },
  {
    q: "How do you handle incidents and reporting?",
    a: "We follow clear escalation procedures. Incidents are recorded, escalated to supervisors, and reported with timestamps, key details, and actions taken. This improves accountability and investigation outcomes.",
  },
  {
    q: "Can you cover night shift and weekends?",
    a: "Yes. We provide flexible coverage plans including 24/7 operations depending on your needs—residential estates, retail, corporate buildings, and construction sites.",
  },
  {
    q: "What areas do you operate in?",
    a: "We can cover your local area depending on staffing and requirements. Contact us with your location and site details and we’ll confirm availability and response planning.",
  },
];

export default function Compliance() {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState(0);

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
              Compliance / FAQ
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Compliance you can trust. Procedures you can verify.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              We build trust through discipline, proper training, vetting, and documented reporting—
              so your site remains protected and controlled.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section ref={ref} className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={[
              "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
              inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
            ].join(" ")}
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Our compliance framework
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Compliance isn’t a checkbox—it’s the system that keeps security operations consistent.
                Below is how we maintain professional standards across our teams.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm w-fit"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {complianceItems.map((item, idx) => (
              <ComplianceCard key={item.title} item={item} index={idx} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Clear answers help clients make confident decisions. If your question is not listed, contact us
              and we’ll respond quickly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Accordion */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((f, idx) => (
                  <AccordionItem
                    key={f.q}
                    idx={idx}
                    q={f.q}
                    a={f.a}
                    isOpen={openIndex === idx}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === idx ? -1 : idx))
                    }
                  />
                ))}
              </div>
            </div>

            {/* Side panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Want proof of compliance?
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We can share operational details such as deployment structure, reporting formats,
                  and coverage planning—based on your site needs.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <p className="text-sm text-slate-700">
                      Documented reporting & escalation procedures
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <p className="text-sm text-slate-700">
                      Site risk assessment & coverage recommendation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                    <p className="text-sm text-slate-700">
                      Clear shift handovers & supervision structure
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
                    Request a Quote
                  </Link>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Tip: Add your PSIRA registration number in the website footer for trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ComplianceCard({ item, index, inView }) {
  const delay = 120 + index * 120;

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        inView ? "opacity-100 animate-[fadeUp_700ms_ease-out_both]" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-yellow-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white ring-1 ring-black/10">
          <BadgeIcon name={item.icon} />
        </div>

        <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
          Verified Process
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {item.points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-yellow-400" />
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.note}</p>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-slate-900 via-yellow-400 to-slate-900 opacity-80" />
    </div>
  );
}

function AccordionItem({ idx, q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
      >
        <span className="text-sm sm:text-[15px] font-semibold text-slate-900">
          {q}
        </span>

        <span
          className={[
            "flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-slate-200 bg-slate-50",
            "transition-transform duration-300",
            isOpen ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Smooth height animation using CSS grid trick */}
      <div
        id={`faq-panel-${idx}`}
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}
