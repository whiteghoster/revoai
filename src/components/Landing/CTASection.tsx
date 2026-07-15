// @ts-nocheck
"use client";

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

  const handleNavigate = () => router.push("/signup");

  if (!mounted) return null;

  return (
    <div className="w-full bg-[#f6f6ef] px-4 sm:px-6 lg:px-8 py-12" data-testid="cta-section">
      {/* Dynamic Floating Keyframe Injection */}
      <style>{`
        @keyframes customFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.01); }
        }
        .animate-image-float {
          animation: customFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Container with exactly 32px matching corner radius and drop shadow */}
        <section className="relative overflow-hidden rounded-[32px] py-16 md:py-20 px-6 sm:px-12 lg:px-16 shadow-lg">

          {/* The precise radial gradient cosmic background */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, #f5a15c 0%, #d36a07 100%, #c9630f 40%)",
              border: "4px solid #ffffff",
              borderRadius: "35px"
            }}
            data-testid="cta-background"
          />


          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


            <div className="space-y-6 lg:col-span-7 text-center lg:text-left">


              <h2
                className="text-3xl sm:text-4xl md:text-[40px] font-medium !text-white tracking-tight leading-[1.15] max-w-2xl lg:mx-0 mx-auto"
              >
                {t('landing.cta.title', 'Ready to Transform Your Call Operations?')}
              </h2>

              <p
                className="text-sm sm:text-[15px] font-normal max-w-xl lg:mx-0 mx-auto leading-relaxed !text-white tracking-wide"
              >
                {t('landing.cta.description', 'Join 2,500+ businesses scaling their appointments with RevoAI. Set up takes less than 5 minutes.')}
              </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">

                <button
                  onClick={handleNavigate}
                  className="w-full sm:w-auto h-11 px-6 text-[14px] font-medium rounded-full text-white border border-white/40 transition-all bg-transparent hover:bg-white/10 active:scale-95 shadow-md cursor-pointer"
                  data-testid="button-cta-get-started"
                >
                  {t('landing.cta.button', 'Get Started For Free')}
                </button>

                <button
                  className="w-full sm:w-auto h-11 px-8 text-[14px] font-medium rounded-full text-slate-900 bg-white transition-all hover:bg-white/90 active:scale-95 "
                  data-testid="button-cta-talk-sales"
                >
                  {t('landing.cta.talkSales', 'Talk to Sales')}
                </button>
              </div>

              <div
                className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1 text-[13px] text-white/70 font-normal tracking-wide"
                data-testid="cta-trust-message"
              >
                <span>{t('landing.cta.noCard', 'No credit card required')}</span>
                <span className="opacity-40">•</span>
                <span>{t('landing.cta.setupTime', 'Setup in 5 minutes')}</span>
                <span className="opacity-40">•</span>
                <span>{t('landing.cta.freePlan', 'Free forever plan available')}</span>
              </div>

            </div>
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none rounded-2xl border-[0.5px] border-white p-1 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] animate-image-float">
                <img
                  src="/ai_technology_busine_1e218027.jpg"
                  alt="RevoAI Dashboard Interface Mockup"
                  className="w-full h-auto object-cover rounded-xl border-[0.5px] border-white"
                />
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

// Default export line to ensure absolute fallback compatibility
export default CTASection;