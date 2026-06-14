"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="bg-brand-green text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-md hover:bg-brand-green-dark transition-colors"
    >
      {lang === "en" ? "中文" : "English"}
    </button>
  );
}