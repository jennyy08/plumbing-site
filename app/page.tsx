"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero section */}
      <section className="bg-brand-green text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{t.home.hero.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">{t.home.hero.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
            
              href="/contact"
              className="bg-brand-brown text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-brown/90 transition-colors"
            >
              {t.home.hero.ctaQuote}
            </Link>
            <a>
              href="tel:+16136171688"
              className="bg-white text-brand-green px-6 py-3 rounded-md font-semibold hover:bg-brand-cream transition-colors"
              {t.home.hero.ctaCall}
            </a>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green">{t.home.intro.heading}</h2>
          <p className="mt-4 text-brand-dark leading-relaxed">{t.home.intro.body}</p>
        </div>
        {/* Placeholder photo - replace with a real photo of Zeno/his work later */}
        <div className="bg-brand-brown/15 border-2 border-dashed border-brand-brown/40 rounded-lg h-64 flex items-center justify-center text-brand-brown font-medium">
          Photo coming soon
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-brand-cream py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green text-center">
            {t.home.servicesPreview.heading}
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {t.home.servicesPreview.items.map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm border border-brand-green/10">
                <h3 className="font-semibold text-brand-green">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-dark">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block bg-brand-green text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-green-dark transition-colors"
            >
              {t.home.servicesPreview.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo gallery teaser */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-brand-brown/15 border-2 border-dashed border-brand-brown/40 rounded-lg aspect-square flex items-center justify-center text-brand-brown text-sm font-medium"
            >
              Photo {n}
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-brand-brown text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">{t.home.cta.heading}</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">{t.home.cta.body}</p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-white text-brand-brown px-6 py-3 rounded-md font-semibold hover:bg-brand-cream transition-colors"
            >
              {t.home.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}