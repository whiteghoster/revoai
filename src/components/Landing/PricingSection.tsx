// @ts-nocheck
"use client";
/**
 * ============================================================
<<<<<<< HEAD
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
          ? "premium-card-3d relative rounded-3xl p-8 sm:p-10 flex flex-col border-2 shadow-[0_8px_30px_rgba(250,204,21,0.25)]"
          : "premium-card-3d relative rounded-3xl p-8 sm:p-10 flex flex-col border border-gray-100 shadow-sm"
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

      <Link href="/signup" className="w-full">
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
    <section id="pricing" ref={ref} className="premium-overlap-section relative z-[60] -mt-6 md:-mt-12 py-20 md:py-28 overflow-hidden" style={{ background: "#ffffff" }} data-testid="pricing-section">
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
=======
 * © 2025 Diploy — a brand of Bisht Technologies Private Limited
 * Original Author: BTPL Engineering Team
 * Website: https://diploy.in
 * Contact: cs@diploy.in
 *
 * Distributed under the Envato / CodeCanyon License Agreement.
 * Licensed to the purchaser for use as defined by the
 * Envato Market (CodeCanyon) Regular or Extended License.
 *
 * You are NOT permitted to redistribute, resell, sublicense,
 * or share this source code, in whole or in part.
 * Respect the author's rights and Envato licensing terms.
 * ============================================================
 */
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Plan {
  id: string;
  name: string;
  displayName: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string | null;
  razorpayMonthlyPrice: string | null;
  razorpayYearlyPrice: string | null;
  paypalMonthlyPrice: string | null;
  paypalYearlyPrice: string | null;
  paystackMonthlyPrice: string | null;
  paystackYearlyPrice: string | null;
  mercadopagoMonthlyPrice: string | null;
  mercadopagoYearlyPrice: string | null;
  maxAgents: number;
  maxCampaigns: number;
  maxContactsPerCampaign: number;
  maxWebhooks: number;
  maxKnowledgeBases: number;
  maxFlows: number;
  maxPhoneNumbers: number;
  includedCredits: number;
  canChooseLlm: boolean;
  canPurchaseNumbers: boolean;
  features: any;
  sipEnabled?: boolean;
  restApiEnabled?: boolean;
}

interface PluginCapabilities {
  success: boolean;
  data: {
    capabilities: Record<string, boolean>;
    sipEngine: boolean;
    restApi: boolean;
  };
}

interface PaymentGatewayConfig {
  stripeEnabled: boolean;
  razorpayEnabled: boolean;
  paypalEnabled: boolean;
  paystackEnabled: boolean;
  mercadopagoEnabled: boolean;
  stripeCurrency?: string;
  stripeCurrencySymbol?: string;
  paypalCurrency?: string;
  paypalCurrencySymbol?: string;
  paystackCurrency?: string;
  paystackCurrencySymbol?: string;
  paystackCurrencies?: string[];
  paystackDefaultCurrency?: string;
  mercadopagoCurrency?: string;
  mercadopagoCurrencySymbol?: string;
  mercadopagoCurrencies?: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Currency symbol lookup
const currencySymbols: Record<string, string> = {
  'USD': '$', 'EUR': '€', 'GBP': '£', 'CAD': 'C$', 'AUD': 'A$',
  'JPY': '¥', 'INR': '₹', 'BRL': 'R$', 'MXN': '$', 'CHF': 'CHF',
  'NGN': '₦', 'GHS': '₵', 'ZAR': 'R', 'KES': 'KSh',
  'ARS': '$', 'CLP': '$', 'COP': '$', 'PEN': 'S/', 'UYU': '$'
};

interface CurrencyOption {
  code: string;
  symbol: string;
  gateway: string;
}

export function PricingSection() {
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const { data: plans, isLoading: plansLoading } = useQuery<Plan[]>({
    queryKey: ["/api/plans"],
  });

  const { data: gatewayConfig } = useQuery<PaymentGatewayConfig>({
    queryKey: ["/api/settings/payment-gateway"],
  });

  const { data: pluginCapabilities } = useQuery<PluginCapabilities>({
    queryKey: ["/api/plugins/capabilities"],
  });

  const sipPluginEnabled = pluginCapabilities?.data?.capabilities?.['sip-engine'] ?? false;
  const restApiPluginEnabled = pluginCapabilities?.data?.capabilities?.['rest-api'] ?? false;

  const handleNavigate = () => {
    router.push("/login");
  };

  // Sort all plans: free first, then by monthly price ascending
  const sortedPlans = [...(plans || [])].sort((a, b) => {
    if (a.name === 'free') return -1;
    if (b.name === 'free') return 1;
    const priceA = parseFloat(a.monthlyPrice || '0');
    const priceB = parseFloat(b.monthlyPrice || '0');
    return priceA - priceB;
  });

  const hasPaidPricing = (getter: (p: Plan) => string | null | undefined) =>
    sortedPlans.some(p => {
      const v = getter(p);
      return v != null && parseFloat(v) > 0;
    });
  const hasStripePricing = hasPaidPricing(p => p.monthlyPrice) || hasPaidPricing(p => p.yearlyPrice);
  const hasRazorpayPricing = hasPaidPricing(p => p.razorpayMonthlyPrice) || hasPaidPricing(p => p.razorpayYearlyPrice);
  const hasPaypalPricing = hasPaidPricing(p => p.paypalMonthlyPrice) || hasPaidPricing(p => p.paypalYearlyPrice);
  const hasPaystackPricing = hasPaidPricing(p => p.paystackMonthlyPrice) || hasPaidPricing(p => p.paystackYearlyPrice);
  const hasMercadopagoPricing = hasPaidPricing(p => p.mercadopagoMonthlyPrice) || hasPaidPricing(p => p.mercadopagoYearlyPrice);

  const allGatewayEntries: CurrencyOption[] = [];
  if (gatewayConfig?.stripeEnabled && gatewayConfig.stripeCurrency) {
    allGatewayEntries.push({
      code: gatewayConfig.stripeCurrency.toUpperCase(),
      symbol: gatewayConfig.stripeCurrencySymbol || currencySymbols[gatewayConfig.stripeCurrency.toUpperCase()] || '$',
      gateway: 'stripe'
    });
  }
  if (gatewayConfig?.razorpayEnabled) {
    allGatewayEntries.push({ code: 'INR', symbol: '₹', gateway: 'razorpay' });
  }
  if (gatewayConfig?.paypalEnabled && gatewayConfig.paypalCurrency) {
    allGatewayEntries.push({
      code: gatewayConfig.paypalCurrency.toUpperCase(),
      symbol: gatewayConfig.paypalCurrencySymbol || currencySymbols[gatewayConfig.paypalCurrency.toUpperCase()] || '$',
      gateway: 'paypal'
    });
  }
  if (gatewayConfig?.paystackEnabled) {
    const paystackCurrency = gatewayConfig.paystackCurrency?.toUpperCase() || gatewayConfig.paystackDefaultCurrency || 'NGN';
    allGatewayEntries.push({
      code: paystackCurrency,
      symbol: gatewayConfig.paystackCurrencySymbol || currencySymbols[paystackCurrency] || '₦',
      gateway: 'paystack'
    });
  }
  if (gatewayConfig?.mercadopagoEnabled && gatewayConfig.mercadopagoCurrency) {
    const mercadopagoCurrency = gatewayConfig.mercadopagoCurrency.toUpperCase();
    allGatewayEntries.push({
      code: mercadopagoCurrency,
      symbol: gatewayConfig.mercadopagoCurrencySymbol || currencySymbols[mercadopagoCurrency] || 'R$',
      gateway: 'mercadopago'
    });
  }

  const gwHasPricing: Record<string, boolean> = {
    stripe: hasStripePricing,
    razorpay: hasRazorpayPricing,
    paypal: hasPaypalPricing,
    paystack: hasPaystackPricing,
    mercadopago: hasMercadopagoPricing,
  };

  const currencyOptions: CurrencyOption[] = [];
  for (const entry of allGatewayEntries) {
    const existingIdx = currencyOptions.findIndex(c => c.code === entry.code);
    if (existingIdx === -1) {
      const otherGwSharesCurrency = allGatewayEntries.some(
        e => e.code === entry.code && e.gateway !== entry.gateway
      );
      if (gwHasPricing[entry.gateway] || otherGwSharesCurrency) {
        currencyOptions.push(entry);
      }
    } else if (gwHasPricing[entry.gateway] && !gwHasPricing[currencyOptions[existingIdx].gateway]) {
      currencyOptions[existingIdx] = entry;
    }
  }

  if (currencyOptions.length === 0) {
    currencyOptions.push({ code: 'USD', symbol: '$', gateway: 'stripe' });
  }

  const validCurrency = currencyOptions.find(c => c.code === selectedCurrency);
  const effectiveCurrency = validCurrency ? selectedCurrency : (currencyOptions[0]?.code || 'USD');
  const currencySymbol = validCurrency?.symbol || currencyOptions.find(c => c.code === effectiveCurrency)?.symbol || '$';

  const showCurrencySelector = currencyOptions.length > 1;

  const getGatewayPrice = (plan: Plan, gw: string, yearly: boolean): string | null => {
    switch (gw) {
      case 'razorpay': return yearly ? plan.razorpayYearlyPrice : plan.razorpayMonthlyPrice;
      case 'paypal': return yearly ? plan.paypalYearlyPrice : plan.paypalMonthlyPrice;
      case 'paystack': return yearly ? plan.paystackYearlyPrice : plan.paystackMonthlyPrice;
      case 'mercadopago': return yearly ? plan.mercadopagoYearlyPrice : plan.mercadopagoMonthlyPrice;
      case 'stripe': default: return yearly ? plan.yearlyPrice : plan.monthlyPrice;
    }
  };

  const getPrice = (plan: Plan): string => {
    const currencyOption = currencyOptions.find(c => c.code === effectiveCurrency);
    const primaryGateway = currencyOption?.gateway || 'stripe';

    let price = getGatewayPrice(plan, primaryGateway, isYearly);

    if (!price || parseFloat(price) === 0) {
      const alternates = allGatewayEntries.filter(
        e => e.code === effectiveCurrency && e.gateway !== primaryGateway
      );
      for (const alt of alternates) {
        const altPrice = getGatewayPrice(plan, alt.gateway, isYearly);
        if (altPrice && parseFloat(altPrice) > 0) {
          price = altPrice;
          break;
        }
      }
    }

    if ((!price || parseFloat(price) === 0) && primaryGateway !== 'stripe') {
      const stripeCurrency = gatewayConfig?.stripeCurrency?.toUpperCase();
      if (stripeCurrency === effectiveCurrency) {
        const defaultPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
        if (defaultPrice && parseFloat(defaultPrice) > 0) {
          price = defaultPrice;
        }
      }
    }

    return price ? parseFloat(price).toLocaleString() : '0';
  };

  // Helper: build a flat, ordered list of feature strings for a plan (mirrors the screenshot's simple list)
  const getFeatureList = (plan: Plan, isFree: boolean): { text: string; bold?: boolean }[] => {
    const items: { text: string; bold?: boolean }[] = [];

    if (plan.maxAgents >= 999 || plan.maxAgents === -1) {
      items.push({ text: "Unlimited AI Agents", bold: true });
    } else {
      items.push({ text: `Deploy ${plan.maxAgents} Custom AI Agent${plan.maxAgents > 1 ? "s" : ""}` });
    }

    if (plan.maxCampaigns >= 999 || plan.maxCampaigns === -1) {
      items.push({ text: "Unlimited Active Campaigns", bold: true });
    } else {
      items.push({ text: `${plan.maxCampaigns} Active Campaign${plan.maxCampaigns > 1 ? "s" : ""}` });
    }

    if (plan.maxContactsPerCampaign >= 9999 || plan.maxContactsPerCampaign === -1) {
      items.push({ text: "Enterprise CRM (Unlimited Contacts)" });
    } else {
      items.push({ text: `Smart CRM (${plan.maxContactsPerCampaign} Contacts)` });
    }

    if (plan.canChooseLlm) {
      items.push({ text: "Select Preferred LLM Models" });
    }

    items.push({
      text: plan.canPurchaseNumbers ? "Bring Your Own Phone Number" : "System-assigned Number",
    });

    if (plan.maxFlows > 0) {
      items.push({
        text: plan.maxFlows >= 999
          ? "Unlimited Flow Automations"
          : `${plan.maxFlows} ${isFree ? "Basic" : "Advanced"} Flow Automation${plan.maxFlows !== 1 ? "s" : ""}`,
      });
    }

    if (plan.maxWebhooks > 0 || plan.maxKnowledgeBases > 0) {
      const endpointCount = (plan.maxWebhooks || 0) + (plan.maxKnowledgeBases || 0);
      items.push({
        text: endpointCount >= 999
          ? "Unlimited Global/Webhook Endpoints"
          : `${endpointCount} Global/Webhook Endpoints`,
      });
    }

    if (plan.maxPhoneNumbers > 0) {
      items.push({
        text: plan.maxPhoneNumbers >= 999
          ? "Unlimited Phone Numbers"
          : `${plan.maxPhoneNumbers} Phone Number${plan.maxPhoneNumbers !== 1 ? "s" : ""}`,
      });
    }

    if (plan.includedCredits > 0) {
      items.push({ text: `${plan.includedCredits} Included Credits` });
    }

    if (sipPluginEnabled && plan.sipEnabled && !isFree) {
      items.push({ text: "SIP Trunk Access" });
    }

    if (restApiPluginEnabled && plan.restApiEnabled && !isFree) {
      items.push({ text: "REST API Access" });
    }

    return items;
  };

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50/30"
      data-testid="pricing-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900"
            data-testid="pricing-headline"
          >
            {t('landing.pricing.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {t('landing.pricing.titleHighlight')}
            </span>{' '}
            {t('landing.pricing.titleEnd')}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-zinc-500"
            data-testid="pricing-subheadline"
          >
            {t('landing.pricing.description')}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3 bg-zinc-100 rounded-full px-4 py-2">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-emerald-600' : 'text-zinc-400'}`}>
              {t('landing.pricing.monthly')}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              data-testid="switch-billing-period"
            />
            <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-emerald-600' : 'text-zinc-400'}`}>
              {t('landing.pricing.yearly')}
            </span>
            {isYearly && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                {t('landing.pricing.save20')}
              </Badge>
            )}
          </div>

          {showCurrencySelector && (
            <div className="flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-2 flex-wrap justify-center">
              {currencyOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setSelectedCurrency(option.code)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    effectiveCurrency === option.code
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                  data-testid={`button-currency-${option.code.toLowerCase()}`}
                >
                  {option.symbol} {option.code}
                </button>
              ))}
            </div>
          )}
        </div>

        {plansLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid grid-cols-1 ${
              sortedPlans.length === 2
                ? 'md:grid-cols-2 max-w-3xl'
                : sortedPlans.length >= 3
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'md:grid-cols-1 max-w-md'
            } gap-6 md:gap-8 mx-auto items-start`}
            data-testid="pricing-grid"
          >
            {sortedPlans.map((plan, index) => {
              const isFree = plan.name === 'free';
              const isHighlighted = !isFree && (sortedPlans[0]?.name === 'free' ? index === 1 : index === 0);
              const price = getPrice(plan);
              const isFreePrice = parseFloat(price) === 0;
              const features = getFeatureList(plan, isFree);

              return (
                <motion.div
                  key={plan.id}
                  variants={shouldReduceMotion ? {} : itemVariants}
                  data-testid={`pricing-card-${index}`}
                >
                  <Card
                    className={`relative p-6 sm:p-8 rounded-3xl transition-all h-full ${
                      isHighlighted
                        ? "border-2 border-orange-300 bg-gradient-to-b from-orange-50 to-orange-50/40 shadow-xl shadow-orange-500/10"
                        : "border border-zinc-200 bg-white shadow-sm"
                    }`}
                  >
                    {isHighlighted && (
                      <Badge
                        className="absolute -top-3 left-6 bg-emerald-500 hover:bg-emerald-500 text-white border-0 rounded-full px-3 py-1 text-xs font-semibold shadow"
                        data-testid="popular-badge"
                      >
                        {t('landing.pricing.popular')}
                      </Badge>
                    )}

                    <div className="space-y-5">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-zinc-900"
                          data-testid={`plan-name-${index}`}
                        >
                          {plan.displayName}
                        </h3>
                        <p
                          className="text-sm text-zinc-500 mt-1.5 leading-snug"
                          data-testid={`plan-description-${index}`}
                        >
                          {plan.description}
                        </p>
                      </div>

                      <div
                        className="flex items-end gap-1 text-zinc-900"
                        data-testid={`plan-price-${index}`}
                      >
                        {isFreePrice ? (
                          <span className="text-4xl sm:text-5xl font-bold">
                            {t('landing.pricing.free')}
                          </span>
                        ) : (
                          <>
                            <span className="text-4xl sm:text-5xl font-bold">
                              {currencySymbol}{price}
                            </span>
                            <span className="text-base font-normal text-zinc-400 pb-1.5">
                              {isYearly ? t('landing.pricing.perYear') : t('landing.pricing.perMonth')}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="space-y-3 pt-1" data-testid={`plan-features-${index}`}>
                        {features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5">
                            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 flex-shrink-0">
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            </span>
                            <span className={`text-sm text-zinc-700 ${feature.bold ? "font-semibold" : ""}`}>
                              {feature.text}
                            </span>
                          </div>
                        ))}

                        {!isFree && (
                          <div className="flex items-center gap-2.5">
                            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 flex-shrink-0">
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            </span>
                            <span className="text-sm text-zinc-700">Priority support</span>
                          </div>
                        )}
                      </div>

                      <Button
                        variant={isHighlighted ? "default" : "outline"}
                        size="lg"
                        className={`w-full h-12 text-base font-semibold rounded-full mt-2 ${
                          isHighlighted
                            ? "bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-md shadow-orange-500/30"
                            : "border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                        }`}
                        onClick={handleNavigate}
                        data-testid={`button-plan-${index}`}
                      >
                        {t('landing.pricing.getPlan', 'Get Plan')}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-zinc-400 text-sm mt-8"
        >
          {t('landing.pricing.guarantee')}
        </motion.p>

      </div>
    </section>
  );
}

export default PricingSection;