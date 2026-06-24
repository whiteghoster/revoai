// @ts-nocheck
"use client";
import { motion, useInView } from "framer-motion";
import { MessageSquare, PhoneForwarded, Webhook, Mail, MessageCircle, Calendar, Check } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
  variant: "solid-orange" | "light-orange" | "light-green" | "solid-green";
}

const ActionCard = ({ icon, title, delay, variant }: ActionCardProps) => {
  const styles = {
    "solid-orange": {
      bg: "#FF6B00",
      border: "#FF6B00",
      iconBg: "#FFAC71",
      iconColor: "#ffffff",
      titleColor: "#ffffff",
    },
    "light-orange": {
      bg: "#fff4ed",
      border: "#FBECE6",
      iconBg: "#ffeadc",
      iconColor: "#FF6B00",
      titleColor: "#52525B",
    },
    "light-green": {
      bg: "#edf6ed",
      border: "#E2ECE7",
      iconBg: "#C9FAC9",
      iconColor: "#008000",
      titleColor: "#52525B",
    },
    "solid-green": {
      bg: "#008A1A",
      border: "#008A1A",
      iconBg: "#00bb00",
      iconColor: "#ffffff",
      titleColor: "#ffffff",
    },
  };
  const s = styles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl border p-6 flex flex-col items-start gap-4 h-full min-h-[160px]"
      style={{ background: s.bg, borderColor: s.border, boxShadow: "0 4px 12px rgba(0,0,0,0.01)" }}
      data-testid={`action-card-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: s.iconBg }}
      >
        <div style={{ color: s.iconColor }}>{icon}</div>
      </div>
      <p className="text-xs font-semibold leading-relaxed" style={{ color: s.titleColor }}>{title}</p>
    </motion.div>
  );
};

// Layout sequence matching row configurations in image_8885ea.png
const cardVariants: ("solid-orange" | "light-orange" | "light-green" | "solid-green")[] = [
  "solid-orange", "light-orange", "light-orange", "light-green", "solid-green", "light-green"
];

export function ActionCardsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const actions = [
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.sms', 'Send SMS messages to customers immediately during phone calls') 
    },
    { 
      icon: <PhoneForwarded className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.transfer', 'Redirect or transfer calls to a live human agent') 
    },
    { 
      icon: <Webhook className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.webhooks', 'Collect customer data & automate actions using Zapier and Webhooks') 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.email', 'Send emails effortlessly during or after a call') 
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.whatsapp', 'Send WhatsApp messages to customers during phone calls') 
    },
    { 
      icon: <Calendar className="w-5 h-5" />, 
      title: t('landing.actionCards.cards.appointments', 'Schedule appointments and send calendar invites during the call') 
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-28 bg-white" data-testid="action-cards-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container matched with image_8885ea.png */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-500 mb-4 tracking-tight">
            Automate <span style={{ color: "#FF7300" }}>Tasks</span> & <span style={{ color: "#FF7300" }}>Actions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            {t('landing.actionCards.description', 'Configure the AI Agents to automate a variety of tasks and actions, like:')}
          </p>
        </motion.div>

        {/* Dynamic responsive grid architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {actions.map((action, index) => (
            <ActionCard
              key={index}
              icon={action.icon}
              title={action.title}
              delay={index * 0.05}
              variant={cardVariants[index]}
            />
          ))}
        </div>

        {/* Footer actions block structured for tighter viewports */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(255,115,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="font-bold h-12 px-8 rounded-full text-white text-sm sm:text-base w-full sm:w-auto"
              style={{ background: "#FF7300" }}
              data-testid="button-actions-get-started"
            >
              {t('landing.actionCards.getStarted', 'Get Started')}
            </motion.button>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-5 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 shrink-0 stroke-[3]" style={{ color: "#22c55e" }} />
              <span>{t('landing.actionCards.freeTrial', 'No credit card required')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 shrink-0 stroke-[3]" style={{ color: "#22c55e" }} />
              <span>{t('landing.actionCards.freeCredit', '10 mins free trial credit')}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ActionCardsSection;