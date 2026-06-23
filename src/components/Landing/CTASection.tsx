// @ts-nocheck
"use client";
/**
 * ============================================================
 * CTASection - Exact Visual Match from image_bdae70.png
 * Features: Pure white text elements, matching borders,
 * and standard dual exports to eliminate main page runtime crashes.
 * ============================================================
 */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const router = useRouter();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = () => router.push("/login");

  if (!mounted) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="cta-section">
      {/* Container with exactly 32px matching corner radius and drop shadow */}
      <section className="relative overflow-hidden rounded-[32px] py-20 md:py-24 px-6 sm:px-12 lg:px-20 text-center shadow-lg">

        {/* The precise green-to-orange diagonal gradient profile */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #4caa65 0%, #a2b042 50%, #ff6600 100%)" }}
          data-testid="cta-background"
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="space-y-6">

            {/* Main Headline - Set to solid crisp white */}
            <h2
              className="text-3xl sm:text-4xl md:text-[44px] font-medium !text-white tracking-tight leading-[1.15] max-w-2xl mx-auto"
            >
              {t('landing.cta.title', 'Ready to Transform Your Call Operations?')}
            </h2>

            {/* Sub-headline / Contextual description - Set to solid crisp white */}
            <p
              className="text-sm sm:text-[15px] font-normal max-w-xl mx-auto leading-relaxed !text-white tracking-wide"
            >
              {t('landing.cta.description', 'Join 2,500+ businesses scaling their appointments with RevAI. Set up takes less than 5 minutes.')}
            </p>

            {/* Precision Button Group styling matching the mockup */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {/* Left Button: Transparent with fine white outline */}
              <button
                onClick={handleNavigate}
                className="w-full sm:w-auto h-11 px-6 text-[13px] font-medium rounded-full text-white border border-white/40 transition-all bg-transparent hover:bg-white/10 active:scale-95 cursor-pointer"
                data-testid="button-cta-get-started"
              >
                {t('landing.cta.button', 'Get Started For Free')}
              </button>

              {/* Right Button: Clean crisp solid white pill */}
              <button
                className="w-full sm:w-auto h-11 px-8 text-[13px] font-medium rounded-full text-slate-900 bg-white transition-all hover:bg-white/90 active:scale-95 shadow-md cursor-pointer"
                data-testid="button-cta-talk-sales"
              >
                {t('landing.cta.talkSales', 'Talk to Sales')}
              </button>
            </div>

            {/* Footer Trust Indicators with dot separators */}
            <div
              className="pt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] text-white/80 font-normal tracking-wide"
              data-testid="cta-trust-message"
            >
              <span>{t('landing.cta.noCard', 'No credit card required')}</span>
              <span className="opacity-40">•</span>
              <span>{t('landing.cta.setupTime', 'Setup in 5 minutes')}</span>
              <span className="opacity-40">•</span>
              <span>{t('landing.cta.freePlan', 'Free forever plan available')}</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Default export line to ensure absolute fallback compatibility
export default CTASection;