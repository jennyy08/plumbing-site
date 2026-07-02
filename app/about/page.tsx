"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.aboutPage.intro}
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-brand-grey border-2 border-dashed border-brand-brown/25 rounded-2xl h-80 flex items-center justify-center text-brand-brown/40 font-medium text-sm order-1 md:order-none">
          Photo of Zeno — coming soon
        </div>
        <div>
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
            {t.aboutPage.storyHeading}
          </h2>
          <p className="mt-5 text-brand-dark/75 leading-relaxed text-lg">
            {t.aboutPage.storyBody}
          </p>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3 text-center">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">
            {t.aboutPage.valuesHeading}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {t.aboutPage.values.map((value, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-black text-white text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
          Coverage
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy">
          {t.aboutPage.areaHeading}
        </h2>
        <p className="mt-5 text-brand-dark/70 leading-relaxed text-lg max-w-2xl mx-auto">
          {t.aboutPage.areaBody}
        </p>
      </section>
    </div>
  );
}