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
          ? "relative rounded-2xl p-7 sm:p-8 flex flex-col border-2 shadow-lg"
          : "relative rounded-2xl p-7 sm:p-8 flex flex-col border"
      }
      style={
        plan.popular
          ? { background: "#FFF3EA", borderColor: "#FF7300" }
          : { background: "#FFFFFF", borderColor: "#E5E7EB" }
      }
      data-testid={`pricing-card-${plan.name.toLowerCase()}`}
    >
      {plan.popular && (
        <span
          className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide text-white"
          style={{ background: "#FF7300" }}
        >
          Popular
        </span>
      )}

      <h3 className="text-lg font-bold text-gray-900 mb-3">{plan.name}</h3>

      {plan.description && (
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{plan.description}</p>
      )}

      <div className="flex items-end gap-1 mb-6">
        <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">${price}</span>
        <span className="text-base text-gray-500 font-medium mb-1">
          /{yearly ? "year" : "month"}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5 shrink-0">
              <Check className="h-2.5 w-2.5 text-green-600 stroke-[3]" />
            </div>
            <span className="text-sm text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link href="/login">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={
            plan.popular
              ? "w-full h-12 rounded-full font-semibold text-sm text-white transition-all"
              : "w-full h-12 rounded-full font-semibold text-sm transition-all border-2"
          }
          style={
            plan.popular
              ? { background: "#FF7300" }
              : { borderColor: "#FF7300", color: "#FF7300", background: "transparent" }
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
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-white" data-testid="pricing-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Choose Your Subscription
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Start for free, upgrade when you're ready to scale your operations. No hidden fees.
          </p>
        </motion.div>

        {/* Monthly / Yearly toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm font-medium ${!yearly ? "text-gray-900" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
            style={{ background: "#22c55e" }}
            data-testid="toggle-billing-period"
          >
            <span
              className="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform"
              style={{ transform: yearly ? "translateX(22px)" : "translateX(2px)" }}
            />
          </button>
          <span className={`text-sm font-medium ${yearly ? "text-gray-900" : "text-gray-400"}`}>
            Yearly
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} delay={idx * 0.1} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include 14-day money-back guarantee. No credit card required for free plan.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
