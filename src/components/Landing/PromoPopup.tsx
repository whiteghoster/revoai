// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBranding } from "@/components/BrandingProvider";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const brandingConfig = useBranding();
  const branding = brandingConfig.branding;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setIsOpen(false);
    router.push("/login");
  };

  const handleDismiss = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Lightened, slightly warmer modal overlay blur */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            data-testid="promo-overlay"
          />
          
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            data-testid="promo-popup"
          >
            {/* White clean surface container with light cream accents */}
            <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-[#EDE8E4] shadow-2xl overflow-hidden">
              {/* Subtle background gradient to add depth without looking dark */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDFB] via-transparent to-[#FFF9F5] pointer-events-none" />

              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-[#F5EFEA] hover:bg-[#EDE5DD] text-[#655E56] flex items-center justify-center transition-colors z-10"
                data-testid="button-promo-close"
                aria-label="Close"
              >
                <X className="h-4 w-4 stroke-[2.5]" />
              </button>

              <div className="relative z-10">
                {/* Micro badge text styled with brand orange layout details */}
                <div className="flex items-center gap-1.5 mb-4 text-[#FF7A00] font-bold">
                  <Sparkles className="h-4 w-4 fill-[#FF7A00]/10" />
                  <span className="text-xs uppercase tracking-wider">
                    LIMITED OFFER
                  </span>
                </div>

                {/* Dark bold charcoal header for readability */}
                <h2 className="text-2xl md:text-3xl font-black text-[#1E1B18] mb-3">
                  Start Your Free Trial
                </h2>
                
                {/* Muted warm grey explanation block */}
                <p className="text-[#655E56] text-sm md:text-base font-medium mb-6 leading-relaxed">
                  Join {branding.app_name || "us"} today and get 10 free credits to try our AI-powered calling platform.
                </p>

                {/* Full high-contrast brand orange button */}
                <Button
                  onClick={handleGetStarted}
                  className="w-full h-12 bg-[#FF7A00] hover:bg-[#E06B00] text-white font-bold rounded-full text-base mb-4 shadow-lg shadow-orange-500/10 group transition-all"
                  data-testid="button-promo-cta"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </Button>

                <button
                  onClick={handleDismiss}
                  className="w-full text-center text-[#A69E96] font-semibold hover:text-[#655E56] text-sm transition-colors"
                  data-testid="button-promo-dismiss"
                >
                  No thanks, maybe later
                </button>

                {/* Light-themed feature stats row */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#EDE8E4]">
                  <div className="text-center flex-1">
                    <div className="text-xl font-black text-[#FF7A00]">10</div>
                    <div className="text-xs font-bold text-[#A69E96] uppercase tracking-tight">Free Credits</div>
                  </div>
                  <div className="h-8 w-px bg-[#EDE8E4]" />
                  <div className="text-center flex-1">
                    <div className="text-xl font-black text-[#1E1B18]">24/7</div>
                    <div className="text-xs font-bold text-[#A69E96] uppercase tracking-tight">Support</div>
                  </div>
                  <div className="h-8 w-px bg-[#EDE8E4]" />
                  <div className="text-center flex-1">
                    <div className="text-xl font-black text-[#1E1B18]">0</div>
                    <div className="text-xs font-bold text-[#A69E96] uppercase tracking-tight">Setup Fee</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default PromoPopup;