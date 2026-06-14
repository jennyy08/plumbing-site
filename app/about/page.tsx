"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-green text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t.aboutPage.title}</h1>
          <p className="mt-3 text-white/90">{t.aboutPage.intro}</p>
        </div>
      </section>

      {/* Story section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Placeholder photo - replace with a real photo of Zeno later */}
        <div className="bg-brand-brown/15 border-2 border-dashed border-brand-brown/40 rounded-lg h-64 flex items-center justify-center text-brand-brown font-medium order-1 md:order-none">
          Photo coming soon
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green">{t.aboutPage.storyHeading}</h2>
          <p className="mt-4 text-brand-dark leading-relaxed">{t.aboutPage.storyBody}</p>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-brand-cream py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green text-center">
            {t.aboutPage.valuesHeading}
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {t.aboutPage.values.map((value, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm border border-brand-green/10">
                <h3 className="font-semibold text-brand-green">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-green text-center">
          {t.aboutPage.areaHeading}
        </h2>
        <p className="mt-4 text-brand-dark leading-relaxed text-center max-w-2xl mx-auto">
          {t.aboutPage.areaBody}
        </p>
      </section>
    </div>
  );
}