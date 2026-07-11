"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const WECHAT_ID = "16136171688";
const FORMSPREE_URL = "https://formspree.io/f/mnjyoyzw";
const MIN_WORDS = 10;

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "tooShort">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = (formData.get("message") as string) || "";

    if (countWords(message) < MIN_WORDS) {
      setStatus("tooShort");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t.contactPage.title}
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Call / WeChat cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Call card */}
          <div className="bg-white border border-brand-navy/10 rounded-xl p-8 shadow-sm text-center">
            <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-2">
              Fastest Way to Reach Us
            </p>
            <h2 className="text-2xl font-black text-brand-navy">{t.contactPage.callHeading}</h2>
            <a
              href="tel:+16136171688"
              className="mt-5 inline-flex items-center justify-center bg-brand-green text-white px-6 py-4 rounded-md font-bold text-lg w-full hover:bg-brand-green-dark transition-colors"
            >
              {t.contactPage.callButton}
            </a>
          </div>

          {/* WeChat card */}
          <div className="bg-white border border-brand-navy/10 rounded-xl p-8 shadow-sm text-center">
            <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-2">
              Also Available On
            </p>
            <h2 className="text-2xl font-black text-brand-navy">{t.contactPage.wechatHeading}</h2>
            <p className="mt-2 text-sm text-brand-dark/60">{t.contactPage.wechatBody}</p>
            <div className="mt-4 bg-brand-grey rounded-lg px-4 py-3 font-mono text-xl text-brand-navy font-bold">
              {WECHAT_ID}
            </div>
            <button
              onClick={handleCopy}
              className="mt-3 inline-flex items-center justify-center bg-brand-brown text-white px-6 py-3 rounded-md font-bold w-full hover:bg-brand-brown/90 transition-colors"
            >
              {copied ? t.contactPage.copiedText : t.contactPage.copyButton}
            </button>
          </div>
        </div>

        {/* Service area note */}
        <p className="mt-4 text-sm text-brand-dark/60 text-center max-w-2xl mx-auto leading-relaxed">
          {t.contactPage.areaNote}
        </p>
        </section>

      {/* Form */}
      <section className="bg-brand-grey pt-12 pb-12 md:pb-20">
        <div className="max-w-md mx-auto px-6">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-1 text-center">
            Prefer to Write?
          </p>
          <h2 className="text-3xl font-black text-brand-navy text-center mb-1">
            {t.contactPage.formHeading}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-1">
                {t.contactPage.formName}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-brand-navy/20 px-4 py-3 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-1">
                {t.contactPage.formPhone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-brand-navy/20 px-4 py-3 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-bold text-brand-navy mb-1">
                {t.contactPage.formAddress}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full rounded-lg border border-brand-navy/20 px-4 py-3 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-1">
                {t.contactPage.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-brand-navy/20 px-4 py-3 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <p className="text-sm text-brand-dark/60 bg-white border border-brand-navy/10 rounded-lg px-4 py-3">
              {t.contactPage.formPhotoNote}
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-green text-white px-6 py-4 rounded-lg font-black text-base hover:bg-brand-green-dark transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? t.contactPage.formSubmitting : t.contactPage.formSubmit}
            </button>

            {status === "success" && (
              <p className="text-brand-green text-center font-bold">{t.contactPage.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-bold">{t.contactPage.formError}</p>
            )}
            {status === "tooShort" && (
              <p className="text-red-500 text-center font-bold">{t.contactPage.formMinWordsError}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}