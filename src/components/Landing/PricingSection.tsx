// @ts-nocheck
"use client";
/**
 * ============================================================
 * PricingSection - Matches "Choose Your Subscription" design
 * Free vs Pro plan cards with Monthly/Yearly toggle
 * ============================================================
 */
import { useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

interface PlanFeature {
  text: string;
}

interface PlanProps {
  name: string;
  price: { monthly: number; yearly: number };
  isFree?: boolean;
  popular?: boolean;
  description?: string;
  features: PlanFeature[];
  ctaLabel: string;
}

const plans: PlanProps[] = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    isFree: true,
    features: [
      { text: "Deploy 2 Custom AI Agents" },
      { text: "3 Active Campaigns" },
      { text: "Smart CRM (10 Contacts)" },
      { text: "System-assigned Number" },
      { text: "Basic Automation Flows" },
    ],
    ctaLabel: "Get Plan",
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 470 },
    popular: true,
    description: "For growing businesses. Unlock advanced features, more capacity, and premium support.",
    features: [
      { text: "Deploy 25 Custom AI Agents" },
      { text: "Unlimited Active Campaigns" },
      { text: "Enterprise CRM (3k+ Contacts)" },
      { text: "Select Preferred LLM Models" },
      { text: "Bring Your Own Phone Number" },
      { text: "25 Advanced Flow Automations" },
      { text: "20 Global/Webhook Endpoints" },
    ],
    ctaLabel: "Get Plan",
  },
];

function PlanCard({ plan, yearly, delay }: { plan: PlanProps; yearly: boolean; delay: number }) {
  const price = yearly ? plan.price.yearly : plan.price.monthly;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={
        plan.popular
          ? "relative rounded-3xl p-8 sm:p-10 flex flex-col border-2 shadow-[0_8px_30px_rgba(250,204,21,0.25)]"
          : "relative rounded-3xl p-8 sm:p-10 flex flex-col border border-gray-100 shadow-sm"
      }
      style={
        plan.popular
          ? { background: "#FFF0E6", borderColor: "#FF7300" }
          : { background: "#FFFFFF" }
      }
      data-testid={`pricing-card-${plan.name.toLowerCase()}`}
    >
      {plan.popular && (
        <span
          className="absolute top-4 left-6 px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white tracking-wide"
          style={{ background: "#008A1A" }}
        >
          Popular
        </span>
      )}

      <h3 className={`text-2xl font-extrabold text-gray-900 ${plan.popular ? "mt-4 mb-2" : "mb-2"}`}>{plan.name}</h3>

      {plan.description && (
        <p className="text-xs text-gray-600 leading-relaxed mb-4 max-w-xs">{plan.description}</p>
      )}

      <div className="flex items-end gap-1 mb-8">
        <span className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight">${price}</span>
        <span className="text-xs text-gray-500 font-medium pb-1.5">
          /{yearly ? "year" : "month"}
        </span>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div 
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: "#008A1A" }}
            >
              <Check className="h-2.5 w-2.5 text-white stroke-[4]" />
            </div>
            <span className="text-xs font-medium text-gray-600 leading-normal">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link href="/login" className="w-full">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full h-12 rounded-full font-normal text-sm transition-all"
          style={
            plan.popular
              ? { background: "#FF6B00", color: "#ffffff" }
              : { border: "1px solid #FFCDAB", color: "#1F2937", background: "#ffffff" }
          }
          data-testid={`button-pricing-${plan.name.toLowerCase()}`}
        >
          {plan.ctaLabel}
        </motion.button>
      </Link>
    </motion.div>
  );
}

export function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28" style={{ background: "#FEF8F4" }} data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F110B] mb-3 tracking-tight">
            Choose Your Subscription
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-medium">
            Start for free, upgrade when you're ready to scale your operations. No hidden fees.
          </p>
        </motion.div>

        {/* Pill-shaped switch capsule for billing toggles */}
        <div className="flex items-center justify-center mb-16">
          <div 
            onClick={() => setYearly((v) => !v)}
            className="inline-flex items-center gap-3 px-4 py-2 cursor-pointer transition-all select-none"
            style={{ backgroundColor: "#efebe8", borderRadius: "9999px" }}
          >
            <span className={`text-[11px] tracking-wide font-bold transition-colors ${!yearly ? "text-[#008A1A]" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              className="relative inline-flex h-5 w-9 items-center transition-colors"
              style={{ 
                background: yearly ? "#185323" : "#C4BDBA", 
                borderRadius: "9999px" 
              }}
              data-testid="toggle-billing-period"
            >
              <span
                className="inline-block h-4 w-4 transform bg-white shadow-sm transition-transform"
                style={{ 
                  transform: yearly ? "translateX(18px)" : "translateX(2px)",
                  borderRadius: "50%" 
                }}
              />
            </button>
            <span className={`text-[11px] font-bold tracking-wide transition-colors ${yearly ? "text-[#008A1A]" : "text-gray-400"}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} delay={idx * 0.05} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 font-medium mt-14 tracking-wide">
          All plans include 14-day money-back guarantee. No credit card required for free plan.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;