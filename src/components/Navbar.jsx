import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sub-Org", href: "#sub-organizations" },
  { label: "Equipment", href: "#equipment" },
  { label: "About", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo light={!solid} />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition ${
                  solid
                    ? "text-navy-700 hover:text-brand-blue"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#signin"
            className={`text-sm font-semibold transition ${
              solid ? "text-navy-700 hover:text-brand-blue" : "text-white hover:text-white/80"
            }`}
          >
            Sign In
          </a>
          <a href="#signup" className="btn-pill">
            Sign Up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            solid ? "text-navy-800" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-navy-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-navy-700 hover:bg-navy-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3">
            <a href="#signin" className="flex-1 rounded-md border border-navy-200 py-2 text-center text-sm font-semibold text-navy-700">
              Sign In
            </a>
            <a href="#signup" className="btn-pill flex-1">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
