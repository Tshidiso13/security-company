// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Compliance", to: "/compliance" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background after slight scroll
      setScrolled(currentScrollY > 20);

      // Hide / show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkBase =
    "text-white/90 hover:text-white transition-colors text-sm md:text-[15px]";
  const activeClass = "text-white";

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-all duration-300 ease-in-out",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-white tracking-wide"
          aria-label="Go to home"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 ring-1 ring-white/20">
            <span className="text-black font-bold">SC</span>
          </span>
          <span className="text-base sm:text-lg">Security Company</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition shadow-sm"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 ring-1 ring-white/20"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {!isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <button
            className="fixed inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[76px] left-0 right-0 bg-black/70 backdrop-blur-md border-t border-white/10">
            <div className="mx-auto max-w-7xl px-5 py-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 text-base ${
                          isActive ? "text-white" : "text-white/85"
                        } hover:text-white transition`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
