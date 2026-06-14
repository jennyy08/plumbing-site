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
    <header className="bg-brand-cream border-b border-brand-green/20 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-brand-green font-bold text-lg">
          美嘉装修
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-dark hover:text-brand-green font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="bg-brand-green text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-brand-green-dark transition-colors"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-brand-green text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4">
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
            className="bg-brand-green text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-brand-green-dark transition-colors w-fit"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
        </nav>
      )}
    </header>
  );
}