"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-green text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t.servicesPage.title}</h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">{t.servicesPage.subtitle}</p>
          
            href="tel:+16136171688"
            className="mt-6 inline-block bg-white text-brand-green px-6 py-3 rounded-md font-semibold hover:bg-brand-cream transition-colors"
          <a>
            📞 {t.servicesPage.callForQuote}
          </a>
        </div>
      </section>

      {/* Pricing note */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-brand-cream border border-brand-green/20 rounded-lg px-5 py-4 text-sm text-brand-dark text-center">
          <p>{t.servicesPage.pricingNote}</p>
          <p className="mt-1 text-brand-dark/70">{t.servicesPage.pricingSubject}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {t.servicesPage.services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 shadow-sm border border-brand-green/10 flex flex-col"
            >
              <h3 className="font-semibold text-brand-green text-lg">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-dark flex-1">{service.description}</p>
              {service.price && (
                <p className="mt-3 text-brand-brown font-semibold text-sm">{service.price}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Emergency section */}
      <section className="bg-brand-cream py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-brand-brown/30 rounded-lg px-6 py-6 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-brand-brown">🚨 {t.servicesPage.emergencyHeading}</h2>
            <p className="mt-3 text-brand-dark text-sm">{t.servicesPage.emergencyBody}</p>
            
              href="tel:+16136171688"
              className="mt-5 inline-block bg-brand-brown text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-brown/90 transition-colors"
            <a>
              📞 +1 (613) 617-1688
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-brand-dark">Not sure what you need?</p>
        <Link
          href="/contact"
          className="mt-3 inline-block bg-brand-green text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-green-dark transition-colors"
        >
          {t.nav.contact}
        </Link>
      </section>
    </div>
  );
}