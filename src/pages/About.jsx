// src/pages/About.jsx
import aboutImage from "../assets/about-guard.jpg"; // <- replace with your image (guards / control room / patrol)
import Footer from "../components/Footer";

/**
 * About page (Top-class, detailed, modern)
 * - Hero header with subtle animated background
 * - Two-column story + image
 * - Values cards with hover + reveal animations
 * - No external libs
 */
const values = [
  {
    title: "Integrity",
    desc: "We operate with honesty and strict accountability. Every officer follows clear SOPs, reporting lines, and site instructions—no shortcuts, no excuses.",
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
  },
  {
    title: "Professionalism",
    desc: "From uniform standards to client communication—our teams deliver disciplined, respectful, and compliant service across residential, commercial, and industrial sites.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
    ),
  },
  {
    title: "Rapid Response",
    desc: "Risk doesn’t wait. Our escalation procedures, patrol coordination, and incident reporting are built to react fast—reducing downtime and preventing repeat incidents.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-[76px]">
        {/* Background decor */}
        <div className="absolute inset-0">
          <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl animate-[floatSlow_10s_ease-in-out_infinite]" />
          <div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-[0.14]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:48px_48px] animate-[gridMove_12s_linear_infinite]" />
          </div>
        </div>

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

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl animate-[fadeUp_700ms_ease-out_both]">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
              About Us
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              About Our Company
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              We deliver professional security services built on discipline,
              compliance, and rapid response—protecting people, property, and
              operations with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: Story */}
            <div className="animate-[fadeUp_700ms_ease-out_both]">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Our story and approach
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Our company was built to solve a simple problem: clients need
                security teams that are reliable, disciplined, and fully
                compliant—without gaps in communication or control.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                We focus on strong site supervision, clear SOPs, and consistent
                reporting. Whether it’s a residential estate, retail space, or
                construction site, we combine visible deterrence with proactive
                prevention—so incidents are reduced, not just reacted to.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Mission
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    To protect clients with professional security personnel,
                    strong procedures, and rapid escalation—every shift, every
                    day.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    What makes us different
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Consistent discipline, clean reporting, and a risk-first
                    approach focused on prevention and control.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-[fadeUp_700ms_ease-out_both]">
              <div className="absolute -inset-4 rounded-[32px] bg-yellow-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-md">
                <img
                  src={aboutImage}
                  alt="Security team on duty"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 p-4 shadow-lg">
                <p className="text-sm font-semibold text-slate-900">
                  Discipline • Compliance • Visibility
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Strong supervision, clear site instructions, and dependable
                  shift handovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="relative py-16 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Our values
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The standards below guide how our teams operate on every site—how
              we communicate, respond, and uphold trust.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${120 + i * 120}ms` }}
              >
                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-yellow-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm ring-1 ring-black/10 group-hover:scale-[1.03] transition-transform">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                    Operational standard
                  </span>
                  <span className="font-semibold text-slate-700">Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
