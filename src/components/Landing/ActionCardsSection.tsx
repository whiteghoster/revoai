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
  variant: "default" | "orange" | "green";
}

const ActionCard = ({ icon, title, delay, variant }: ActionCardProps) => {
  const styles = {
    default: {
      bg: "#FFF8F5",
      border: "#fde8d8",
      iconBg: "#fff3ed",
      iconColor: "#FF7300",
      titleColor: "#374151",
    },
    orange: {
      bg: "#FF7300",
      border: "#FF7300",
      iconBg: "rgba(255,255,255,0.2)",
      iconColor: "#fff",
      titleColor: "#fff",
    },
    green: {
      bg: "#16a34a",
      border: "#16a34a",
      iconBg: "rgba(255,255,255,0.2)",
      iconColor: "#fff",
      titleColor: "#fff",
    },
  };
  const s = styles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-2xl border p-5 cursor-pointer transition-all duration-300 flex items-start gap-4"
      style={{ background: s.bg, borderColor: s.border, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      data-testid={`action-card-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: s.iconBg }}
      >
        <div style={{ color: s.iconColor }}>{icon}</div>
      </div>
      <p className="text-sm font-medium leading-snug pt-1" style={{ color: s.titleColor }}>{title}</p>
    </motion.div>
  );
};

const cardVariants: ("default" | "orange" | "green")[] = [
  "orange", "default", "default", "default", "green", "default"
];

export function ActionCardsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const actions = [
    { icon: <MessageSquare className="w-5 h-5" />, title: t('landing.actionCards.cards.sms') },
    { icon: <PhoneForwarded className="w-5 h-5" />, title: t('landing.actionCards.cards.transfer') },
    { icon: <Webhook className="w-5 h-5" />, title: t('landing.actionCards.cards.webhooks') },
    { icon: <Mail className="w-5 h-5" />, title: t('landing.actionCards.cards.email') },
    { icon: <MessageCircle className="w-5 h-5" />, title: t('landing.actionCards.cards.whatsapp') },
    { icon: <Calendar className="w-5 h-5" />, title: t('landing.actionCards.cards.appointments') },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32" style={{ background: "#FAFAFA" }} data-testid="action-cards-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Automate Tasks &{" "}
            <span style={{ color: "#FF7300" }}>Actions</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('landing.actionCards.description')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <ActionCard
              key={index}
              icon={action.icon}
              title={action.title}
              delay={index * 0.1}
              variant={cardVariants[index]}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(255,115,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="font-bold h-12 px-8 rounded-full text-white text-base"
              style={{ background: "#FF7300" }}
              data-testid="button-actions-get-started"
            >
              {t('landing.actionCards.getStarted')}
            </motion.button>
          </Link>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
              <span>{t('landing.actionCards.freeTrial')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
              <span>{t('landing.actionCards.freeCredit')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ActionCardsSection;
