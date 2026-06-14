"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const WECHAT_ID = "6136171688";
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
      // Clipboard not available - silently ignore
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
      <section className="bg-brand-green text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t.contactPage.title}</h1>
          <p className="mt-3 text-white/90">{t.contactPage.subtitle}</p>
        </div>
      </section>

      {/* Big call / WeChat buttons */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Call card */}
          <div className="bg-white border border-brand-green/15 rounded-lg p-6 shadow-sm text-center">
            <h2 className="text-xl font-bold text-brand-green">{t.contactPage.callHeading}</h2>
            
              href="tel:+16136171688"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-4 rounded-md font-semibold text-lg w-full hover:bg-brand-green-dark transition-colors"
            <a>
              📞 {t.contactPage.callButton}
            </a>
          </div>

          {/* WeChat card */}
          <div className="bg-white border border-brand-green/15 rounded-lg p-6 shadow-sm text-center">
            <h2 className="text-xl font-bold text-brand-green">{t.contactPage.wechatHeading}</h2>
            <p className="mt-2 text-sm text-brand-dark">{t.contactPage.wechatBody}</p>
            <div className="mt-4 bg-brand-cream rounded-md px-4 py-3 font-mono text-lg text-brand-dark">
              {WECHAT_ID}
            </div>
            <button
              onClick={handleCopy}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-md font-semibold w-full hover:bg-brand-brown/90 transition-colors"
            >
              💬 {copied ? t.contactPage.copiedText : t.contactPage.copyButton}
            </button>
          </div>
        </div>

        {/* Service area note */}
        <p className="mt-6 text-sm text-brand-dark text-center max-w-2xl mx-auto">
          {t.contactPage.areaNote}
        </p>
      </section>

      {/* Form section */}
      <section className="bg-brand-cream py-12 md:py-16">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-green text-center">{t.contactPage.formHeading}</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                {t.contactPage.formName}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-brand-green/30 px-4 py-2 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
                {t.contactPage.formPhone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-md border border-brand-green/30 px-4 py-2 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-dark mb-1">
                {t.contactPage.formAddress}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full rounded-md border border-brand-green/30 px-4 py-2 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
                {t.contactPage.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md border border-brand-green/30 px-4 py-2 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            <p className="text-sm text-brand-dark/80 bg-brand-cream border border-brand-green/20 rounded-md px-4 py-3">
              📷 {t.contactPage.formPhotoNote}
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-green text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-green-dark transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? t.contactPage.formSubmitting : t.contactPage.formSubmit}
            </button>

            {status === "success" && (
              <p className="text-brand-green text-center font-medium">{t.contactPage.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium">{t.contactPage.formError}</p>
            )}
            {status === "tooShort" && (
              <p className="text-red-600 text-center font-medium">{t.contactPage.formMinWordsError}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}