// src/components/Hero.jsx
import { Link } from "react-router-dom";
// Option A: import local image from assets (recommended)
import heroImage from "../assets/hero-guard.jpeg"; // <- replace with your guard/patrol image
import heroBg from "../assets/hero-bg.jpg"; // <- replace with your background image

const Hero = () => {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background image (sits UNDER the transparent navbar) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Security background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Optional: subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-full">
        <div className="grid h-full items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div className="pt-[76px] md:pt-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/15">
              PSIRA-Registered • 24/7 Protection • Rapid Response
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Security Services
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Trusted, trained, and vigilant protection for homes, businesses,
              and events. We prioritize safety, professionalism, and rapid
              response—so you can have peace of mind, day and night.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors shadow-sm"
              >
                Request a Quote
              </Link>

              {/* Outline CTA */}
              <a
                href="tel:+27110000000"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/75">
              <span className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">
                Background Checks
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">
                Trained Guards
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/10">
                CCTV & Patrols
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex justify-end pt-[76px] md:pt-0">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute -inset-4 rounded-[32px] bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Security guard on duty"
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 rounded-2xl bg-black/55 px-4 py-3 text-white ring-1 ring-white/10 backdrop-blur-md">
                <p className="text-sm font-semibold">24/7 Coverage</p>
                <p className="text-xs text-white/80">
                  On-site guarding • Patrol • Monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
