// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Clock, CheckCircle2, Users, ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBranding } from "@/components/BrandingProvider";

export function ContactSection() {
  const { t } = useTranslation();
  const { branding } = useBranding();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
  };

  return (
    <section id="contact" className="section-white premium-overlap-section relative z-[80] -mt-6 md:-mt-12 w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden" data-testid="contact-section">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#EEF8EA] blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFF0E6] blur-3xl opacity-80" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 relative z-10 items-center">
        <div className="space-y-5 rtl-text-right">
          <div className="inline-flex px-3 py-1 bg-[#EEF8EA] border border-[#CDEDCB] rounded-full text-[11px] font-bold text-[#008A1A] tracking-wide uppercase">
            {t("landing.contact.badge", "Get in Touch")}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-md font-extrabold text-[#1E1B18] tracking-tight leading-[1.08]">
            {t("landing.contact.title", "Let's Talk About Your Business")}
          </h2>

          <p className="text-[#655E56] text-sm sm:text-base leading-relaxed max-w-md">
            {t("landing.contact.description", "Have questions about RevoAI? Our team is here to help you find the right fit.", { appName: branding.app_name || "RevoAI" })}
          </p>

          <div className="space-y-3.5 pt-4">
            <div className="flex items-center gap-3 text-[#655E56] rtl-flip-row">
              <Clock className="icon-hover w-9 h-9 p-2 rounded-xl bg-[#FFF0E6] text-[#FF7300] stroke-[2.5]" />
              <span className="text-sm font-semibold">{t("landing.contact.trustResponseTime", "Reply within 24 hours")}</span>
            </div>
            <div className="flex items-center gap-3 text-[#655E56] rtl-flip-row">
              <CheckCircle2 className="icon-hover w-9 h-9 p-2 rounded-xl bg-[#EEF8EA] text-[#008A1A] stroke-[2.5]" />
              <span className="text-sm font-semibold">{t("landing.contact.trustNoCommitment", "No commitment required")}</span>
            </div>
            <div className="flex items-center gap-3 text-[#655E56] rtl-flip-row">
              <Users className="icon-hover w-9 h-9 p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] stroke-[2.5]" />
              <span className="text-sm font-semibold">{t("landing.contact.trustCustomerCount", "Trusted by 500+ businesses")}</span>
            </div>
            <a href={`mailto:${branding.contact_email || branding.admin_email || "hello@revoai.co"}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7300] hover:text-[#E66500] rtl-flip-row">
              <Mail className="h-4 w-4" />
              {branding.contact_email || branding.admin_email || "hello@revoai.co"}
            </a>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto bg-white border border-[#E6E2D8] rounded-3xl p-6 sm:p-8 shadow-[0_18px_60px_rgba(30,27,24,0.07)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#1E1B18] mb-1.5">
                {t("landing.contact.form.nameLabel", "Full Name")}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3.5 py-3 bg-[#f6f6ef] border border-[#E6E2D8] rounded-xl text-sm text-[#1E1B18] placeholder-[#8C857D] focus:outline-none focus:ring-1 focus:ring-[#FF7300] focus:border-[#FF7300] transition-colors"
                placeholder={t("landing.contact.form.namePlaceholder", "John Smith")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#1E1B18] mb-1.5">
                {t("landing.contact.form.emailLabel", "Work Email")}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3.5 py-3 bg-[#f6f6ef] border border-[#E6E2D8] rounded-xl text-sm text-[#1E1B18] placeholder-[#8C857D] focus:outline-none focus:ring-1 focus:ring-[#FF7300] focus:border-[#FF7300] transition-colors"
                placeholder={t("landing.contact.form.emailPlaceholder", "john@company.com")}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold text-[#1E1B18] mb-1.5">
                {t("landing.contact.form.companyLabel", "Company")}
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3.5 py-3 bg-[#f6f6ef] border border-[#E6E2D8] rounded-xl text-sm text-[#1E1B18] placeholder-[#8C857D] focus:outline-none focus:ring-1 focus:ring-[#FF7300] focus:border-[#FF7300] transition-colors"
                placeholder={t("landing.contact.form.companyPlaceholder", "Your company name")}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-[#1E1B18] mb-1.5">
                {t("landing.contact.form.messageLabel", "Message")}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-3.5 py-3 bg-[#f6f6ef] border border-[#E6E2D8] rounded-xl text-sm text-[#1E1B18] placeholder-[#8C857D] focus:outline-none focus:ring-1 focus:ring-[#FF7300] focus:border-[#FF7300] transition-colors resize-none"
                placeholder={t("landing.contact.form.messagePlaceholder", "Tell us about your use case...")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FF7300] hover:bg-[#E66500] active:scale-[0.99] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer rtl-flip-row"
            >
              <span>{t("landing.contact.form.submit", "Send Message")}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

          <p className="text-center text-[11px] text-[#655E56] mt-4 font-medium">
            {t("landing.contact.form.privacyNotice", "We respect your privacy. Your information will never be shared.")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
