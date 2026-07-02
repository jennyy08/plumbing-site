"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t.servicesPage.title}
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.servicesPage.subtitle}
          </p>
          <a
            href="tel:+16136171688"
            className="mt-8 inline-block bg-brand-brown text-white px-8 py-4 rounded-md font-bold hover:bg-brand-brown/90 transition-colors"
          >
            {t.servicesPage.callForQuote}
          </a>
        </div>
      </section>

      {/* Pricing note */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-2">
        <div className="bg-brand-grey border border-brand-green/20 rounded-xl px-6 py-4 text-sm text-brand-dark text-center">
          <p className="font-medium">{t.servicesPage.pricingNote}</p>
          <p className="mt-1 text-brand-dark/60">{t.servicesPage.pricingSubject}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {t.servicesPage.services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-brand-navy/10 flex flex-col"
            >
              <h3 className="font-black text-brand-navy text-lg">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-dark/70 flex-1 leading-relaxed">
                {service.description}
              </p>
              {service.price && (
                <p className="mt-4 text-brand-brown font-bold text-sm uppercase tracking-wide">
                  {service.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Emergency section */}
      <section className="bg-brand-grey py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border-l-4 border-brand-brown rounded-xl px-8 py-8 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-brand-brown font-bold text-xs uppercase tracking-[0.2em] mb-2">
              Urgent?
            </p>
            <h2 className="text-2xl font-black text-brand-navy">
              {t.servicesPage.emergencyHeading}
            </h2>
            <p className="mt-3 text-brand-dark/70 text-sm leading-relaxed">
              {t.servicesPage.emergencyBody}
            </p>
            <a
              href="tel:+16136171688"
              className="mt-6 inline-block bg-brand-brown text-white px-8 py-3.5 rounded-md font-bold hover:bg-brand-brown/90 transition-colors"
            >
              +1 (613) 617-1688
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-black text-brand-navy">Not sure what you need?</h2>
        <p className="mt-2 text-brand-dark/60">Give us a call and we'll figure it out together.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16136171688"
            className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-md font-bold hover:bg-brand-green-dark transition-colors"
          >
            +1 (613) 617-1688
          </a>
          <Link
            href="/contact"
            className="inline-block bg-brand-grey border border-brand-navy/20 text-brand-navy px-8 py-3.5 rounded-md font-bold hover:bg-brand-grey/70 transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}