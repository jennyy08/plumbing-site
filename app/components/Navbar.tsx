"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-brand-green font-bold text-xl">美嘉装修</span>
          <span className="text-brand-dark/60 text-xs tracking-wide">Meijia Plumbing · Ottawa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-dark hover:text-brand-green font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="text-brand-dark/60 hover:text-brand-green text-sm font-medium transition-colors"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
        </nav>

        {/* Desktop phone CTA */}
        <a
          href="tel:+16136171688"
          className="hidden md:inline-flex items-center gap-2 bg-brand-brown text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-brand-brown/90 transition-colors"
        >
          📞 +1 (613) 617-1688
        </a>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+16136171688"
            className="bg-brand-brown text-white px-3 py-1.5 rounded-md text-sm font-semibold"
          >
            📞 Call
          </a>
          <button
            className="text-brand-green text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4 border-t border-brand-green/10 pt-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-dark hover:text-brand-green font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="text-brand-dark/60 hover:text-brand-green text-sm font-medium text-left"
          >
            {lang === "en" ? "切换到中文" : "Switch to English"}
          </button>
        </nav>
      )}
    </header>
  );
}