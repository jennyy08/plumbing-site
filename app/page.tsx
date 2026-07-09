"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80";

const trustItems = (t: ReturnType<typeof useLanguage>["t"]) => [
  { label: t.home.trust.hours },
  { label: t.home.trust.area },
  { label: t.home.trust.wechat },
  { label: t.home.trust.honest },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[75vh] flex flex-col justify-between"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-navy/75" />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-20 w-full">
            <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Ottawa &nbsp;·&nbsp; Barrhaven &nbsp;·&nbsp; Serving All Areas
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] max-w-3xl">
              {t.home.hero.title}
            </h1>
            <p className="mt-5 text-xl text-white/75 max-w-lg font-light">
              {t.home.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16136171688"
                className="inline-flex items-center justify-center bg-brand-brown text-white px-8 py-4 rounded-md font-bold text-base tracking-wide hover:bg-brand-brown/90 transition-colors"
              >
                {t.home.hero.ctaCall} — +1 (613) 617-1688
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/50 text-white px-8 py-4 rounded-md font-bold text-base tracking-wide hover:border-white hover:bg-white/10 transition-colors"
              >
                {t.home.hero.ctaQuote}
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 bg-black/50 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustItems(t).map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-brown shrink-0" />
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
            {t.home.intro.heading}
          </h2>
          <p className="mt-6 text-brand-dark/75 leading-relaxed text-lg">
            {t.home.intro.body}
          </p>
          <Link
            href="/about"
            className="mt-7 inline-block text-brand-green font-bold text-sm uppercase tracking-wide hover:text-brand-green-dark transition-colors"
          >
            Learn more →
          </Link>
        </div>
        <img
          src="/images/plumbingmain.png"
          alt="Zeno Yuan — Meijia Plumbing"
          className="rounded-2xl object-contain w-full max-h-[500px] order-1 md:order-none"
        />
      </section>

      {/* Services preview */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3 text-center">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">
            {t.home.servicesPreview.heading}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {t.home.servicesPreview.items.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-brand-green-dark transition-colors"
            >
              {t.home.servicesPreview.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3 text-center">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-brand-navy text-center mb-12">
          Recent Projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/images/shower.jpg"
            alt="Completed bathroom installation"
            className="rounded-2xl aspect-square object-cover w-full"
          />
          {[2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-brand-grey border-2 border-dashed border-brand-brown/25 rounded-2xl aspect-square flex items-center justify-center text-brand-brown/40 text-sm font-medium"
            >
              Photo {n}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {t.home.cta.heading}
            </h2>
            <p className="mt-4 text-white/75 max-w-xl text-lg">{t.home.cta.body}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:+16136171688"
              className="inline-flex items-center justify-center bg-white text-brand-green px-8 py-4 rounded-md font-black text-lg hover:bg-brand-cream transition-colors"
            >
              +1 (613) 617-1688
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-green-dark text-white px-8 py-4 rounded-md font-bold text-base hover:bg-brand-navy transition-colors"
            >
              {t.home.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}