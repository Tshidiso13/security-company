// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black font-bold">
                SC
              </div>
              <h3 className="text-lg font-semibold">
                Security Company
              </h3>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Providing professional, reliable, and compliant security
              solutions for residential, commercial, and industrial clients.
              Your safety is our responsibility.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">
              PSIRA Reg No: <span className="text-yellow-400">XXXXXX</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/70 hover:text-white transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-white/70 hover:text-white transition">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                📍 333 Fox Street, Johannesburg, SA
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+27110000000"
                  className="hover:text-white transition"
                >
                  +27 11 000 0000
                </a>
              </li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:info@securitycompany.co.za"
                  className="hover:text-white transition"
                >
                  info@securitycompany.co.za
                </a>
              </li>
              <li>
                ⏱️ 24/7 Operations & Response
              </li>
            </ul>
          </div>

          {/* Compliance / Trust */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Compliance & Trust
            </h4>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              All officers are fully vetted, trained, and deployed in
              accordance with PSIRA regulations and industry best practices.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-xs font-semibold ring-1 ring-white/10">
              ✔ PSIRA Compliant  
              ✔ Trained Guards  
              ✔ Insured Operations
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>
            © {year} Security Company. All rights reserved.
          </p>

          <p className="text-white/50">
            Designed & Developed with professionalism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
