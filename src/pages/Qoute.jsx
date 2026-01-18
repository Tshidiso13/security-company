// src/pages/Quote.jsx
import { useMemo, useState } from "react";
import Footer from "../components/Footer";

/**
 * CONTACT / GET A QUOTE page
 * - Left: form (Full Name, Email, Phone, Service dropdown, Message, Submit)
 * - Right: contact info + Google Map placeholder
 * - Modern layout + nice micro-interactions
 * - No external libs
 */

export default function Quote() {
  const services = useMemo(
    () => [
      "Armed & Unarmed Guarding",
      "CCTV Monitoring",
      "Mobile Patrols",
      "Event Security",
      "Access Control",
      "Other / Not sure",
    ],
    []
  );

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" }); // type: success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // Demo submit handler (front-end only)
  const onSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus({ type: "error", msg: "Please fill in Full Name, Email, and Phone." });
      return;
    }

    // For now: show success message (you can connect to EmailJS / API later)
    setStatus({
      type: "success",
      msg: "Request sent! We’ll contact you shortly.",
    });

    // Optional: clear form
    setForm({
      fullName: "",
      email: "",
      phone: "",
      service: services[0],
      message: "",
    });
  };

  return (
    <main className="bg-white">
      {/* Page Header */}
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
              Contact / Get a Quote
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Request a quote for professional security services
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              Tell us what you need and we’ll recommend the right coverage plan—fast response,
              clear reporting, and compliant deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* LEFT: Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Get a Quote
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in your details and we’ll contact you with a tailored security solution.
                </p>

                {/* Status message */}
                {status.msg && (
                  <div
                    className={[
                      "mt-5 rounded-xl px-4 py-3 text-sm ring-1",
                      status.type === "success"
                        ? "bg-green-50 text-green-800 ring-green-200"
                        : "bg-red-50 text-red-800 ring-red-200",
                    ].join(" ")}
                  >
                    {status.msg}
                  </div>
                )}

                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={onChange}
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                      type="text"
                      autoComplete="name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                      type="email"
                      autoComplete="email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+27 11 000 0000"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell us your location, site type, operating hours, and any specific risks."
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 min-h-[140px] resize-y"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      Tip: Include the number of entrances, shift times, and whether you need patrols.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT: Contact Info + Map Placeholder */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Contact Details
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Prefer calling? Reach us directly—24/7 availability depending on coverage.
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">Address:</span>{" "}
                    333 Fox Street, Johannesburg, South Africa
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                    <a
                      href="tel:+27110000000"
                      className="text-slate-900 hover:text-slate-700 transition font-semibold"
                    >
                      +27 11 000 0000
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    <a
                      href="mailto:info@securitycompany.co.za"
                      className="text-slate-900 hover:text-slate-700 transition font-semibold"
                    >
                      info@securitycompany.co.za
                    </a>
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <iframe
                    title="Company Location"
                    src="https://www.google.com/maps?q=Johannesburg%2C%20South%20Africa&output=embed"
                    className="h-[320px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>


                {/* Extra trust strip */}
                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Response-focused service
                  </p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    We’ll review your request and recommend the best coverage for your site risk and operating hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
