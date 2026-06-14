"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-green text-white mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm">
        <p className="font-semibold">美嘉装修 — Zeno Yuan</p>
        <p className="mt-1">{t.footer.tagline}</p>
        <p className="mt-2">📞 +1 (613) 617-1688</p>
        <p className="mt-4 text-white/70">
          © {new Date().getFullYear()} 美嘉装修. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}