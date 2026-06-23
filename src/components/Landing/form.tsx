// @ts-nocheck
"use client";
/**
 * ============================================================
 * ContactSection - Precise Color & Complex Gradient Match
 * Features: Top-left light green glow to bottom-right peach glow bg,
 * solid white card container, and matching precise UI form controls.
 * ============================================================
 */
import React, { useState } from "react";
import { Clock, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
  };

  return (
    /* The main section container background blends green to peach exactly like image_bdaaad.png */
    <section className="relative w-full bg-gradient-to-br from-[#f2faf5] via-[#fcfbfa] to-[#fff3e9] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Content & Trust Indicators */}
        <div className="space-y-5">
          <div className="inline-block px-3 py-1 bg-[#e6f7ee] border border-[#c4ebd5] rounded-full text-[11px] font-bold text-[#2ea363] tracking-wide">
            {t("contact.badge", "GET IN TOUCH")}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            {t("contact.title", "Ready to Transform Your Calls?")}
          </h2>
          
          <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed max-w-md">
            {t("contact.description", "Elevate your customer experience with RevolQ AI. Our voice agents handle operations so you can focus on growth.")}
          </p>

          <div className="space-y-3.5 pt-4">
            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="w-4 h-4 text-slate-400 stroke-[2.5]" />
              <span className="text-xs font-semibold">{t("contact.indicator1", "We respond within 24 hours")}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-slate-400 stroke-[2.5]" />
              <span className="text-xs font-semibold">{t("contact.indicator2", "No commitment required")}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Users className="w-4 h-4 text-slate-400 stroke-[2.5]" />
              <span className="text-xs font-semibold">{t("contact.indicator3", "Trusted by 2,500+ businesses")}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Solid White Form Card Container */}
        <div className="w-full max-w-lg mx-auto bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.02)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t("contact.form.name", "Name *")}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-200/80 rounded-lg text-sm text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder={t("contact.form.namePlaceholder", "Your full name")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t("contact.form.email", "Email *")}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-200/80 rounded-lg text-sm text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder={t("contact.form.emailPlaceholder", "you@company.com")}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t("contact.form.company", "Company")}
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-200/80 rounded-lg text-sm text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder={t("contact.form.companyPlaceholder", "Your company name (optional)")}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                {t("contact.form.message", "Message *")}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-200/80 rounded-lg text-sm text-slate-800 placeholder-slate-400/80 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                placeholder={t("contact.form.messagePlaceholder", "Tell us about your needs...")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3 px-4 bg-[#ff6600] hover:bg-[#e65c00] active:scale-[0.99] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer"
            >
              <span>{t("contact.form.submit", "Send Message")}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-400/90 mt-4 font-medium">
            {t("contact.form.privacy", "Your data is secure. We never share your information.")}
          </p>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;