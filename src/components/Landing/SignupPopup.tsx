// @ts-nocheck
"use client";
/**
 * ============================================================
 * © 2025 Diploy — a brand of Bisht Technologies Private Limited
 * Original Author: BTPL Engineering Team
 * Website: https://diploy.in
 * Contact: cs@diploy.in
 * ============================================================
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useBranding } from "@/components/BrandingProvider";

export function SignupPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const router = useRouter();
  const brandingConfig = useBranding();
  const branding = brandingConfig.branding;

  useEffect(() => {
    const checkDismissed = localStorage.getItem("signup_popup_dismissed");
    if (checkDismissed) {
      setIsDismissed(true);
      return;
    }

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let hasScrolled = false;

    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        hasScrolled = true;
        scrollTimeout = setTimeout(() => {
          if (!isDismissed) {
            setIsVisible(true);
          }
        }, 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("signup_popup_dismissed", "true");
  };

  const handleSignup = () => {
    handleClose();
    router.push("/login");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="hidden sm:block fixed bottom-6 right-6 z-50 max-w-sm w-full"
          data-testid="popup-signup"
        >
          {/* Light-themed crisp white container matching Screen Version 3_2.jpg */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-[#EDE8E4] overflow-hidden">
            {/* Subtle warm background tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDFB] via-transparent to-[#FFF9F5] pointer-events-none" />
            
            {/* Styled Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 h-7 w-7 rounded-full bg-[#F5EFEA] hover:bg-[#EDE5DD] text-[#655E56] flex items-center justify-center z-20 transition-colors"
              data-testid="button-close-popup"
            >
              <X className="h-4 w-4 stroke-[2.5]" />
            </button>

            <div className="relative p-6 space-y-4">
              {/* Soft Emerald Green Badge styling */}
              <div className="flex items-center gap-1.5 text-[#14A848] font-bold">
                <Sparkles className="h-4 w-4 fill-[#14A848]/10" />
                <span className="text-xs uppercase tracking-wider">Limited Offer</span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-[#1E1B18]" data-testid="heading-popup">
                  Start Your Free Trial
                </h3>
                <p className="text-sm text-[#655E56] leading-relaxed font-medium" data-testid="text-popup-description">
                  Join {branding.app_name} today and get 10 free credits to test our real-time AI voice agents.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-1">
                {/* Brand-accurate High Contrast Orange CTA */}
                <Button
                  onClick={handleSignup}
                  className="w-full bg-[#FF7A00] hover:bg-[#E06B00] text-white font-bold h-11 rounded-full shadow-md shadow-orange-500/10 group transition-all"
                  data-testid="button-popup-signup"
                >
                  Get Started Free
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </Button>
                
                <button
                  onClick={handleClose}
                  className="text-xs text-[#A69E96] font-semibold hover:text-[#655E56] transition-colors pt-0.5"
                  data-testid="button-popup-no-thanks"
                >
                  No thanks, maybe later
                </button>
              </div>

              {/* Light-themed Stats Matrix Row */}
              <div className="flex items-center justify-center gap-4 pt-3.5 border-t border-[#EDE8E4]">
                <div className="text-center flex-1">
                  <div className="text-base font-black text-[#FF7A00]">10</div>
                  <div className="text-[10px] font-bold text-[#A69E96] uppercase tracking-tight">Free Credits</div>
                </div>
                <div className="h-7 w-px bg-[#EDE8E4]" />
                <div className="text-center flex-1">
                  <div className="text-base font-black text-[#1E1B18]">24/7</div>
                  <div className="text-[10px] font-bold text-[#A69E96] uppercase tracking-tight">Support</div>
                </div>
                <div className="h-7 w-px bg-[#EDE8E4]" />
                <div className="text-center flex-1">
                  <div className="text-base font-black text-[#1E1B18]">0</div>
                  <div className="text-[10px] font-bold text-[#A69E96] uppercase tracking-tight">Setup Fee</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SignupPopup;