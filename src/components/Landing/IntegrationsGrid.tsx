"use client";
import { motion } from "framer-motion";
import { CalendarDays, Database, Mail, MessageCircle, Share2, Webhook } from "lucide-react";

const integrations = [
  { name: "CRM", description: "Sync leads, call notes, outcomes, and qualification status.", icon: Database, color: "#FF7300", bg: "#FFF0E6" },
  { name: "Calendar", description: "Book meetings and send invites during the live call flow.", icon: CalendarDays, color: "#008A1A", bg: "#EEF8EA" },
  { name: "Email", description: "Send summaries, confirmations, and follow-up sequences automatically.", icon: Mail, color: "#4F46E5", bg: "#EEF2FF" },
  { name: "WhatsApp", description: "Trigger WhatsApp messages after calls and customer actions.", icon: MessageCircle, color: "#0F766E", bg: "#F0FDFA" },
  { name: "Webhooks", description: "Connect custom workflows with your own backend or automation stack.", icon: Webhook, color: "#B45309", bg: "#FFF7ED" },
  { name: "Zapier", description: "Route events into hundreds of business apps without custom code.", icon: Share2, color: "#9333EA", bg: "#FAF5FF" },
];

export function IntegrationsGrid() {
  return (
    <section id="integrations" className="section-alt premium-overlap-section relative z-50 -mt-6 md:-mt-12 py-16 md:py-24 overflow-hidden" data-testid="integrations-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-10 lg:gap-16 items-start">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
=======
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
>>>>>>> 5d840ee (update ui)
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex rounded-full border border-[#FFD4B3] bg-[#FFF0E6] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF7300]">
              Integrations
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1B18] tracking-tight">
              Connect RevoAI with the tools your team already uses
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#655E56] leading-relaxed">
              Keep the landing page dynamic with reusable integration cards. Add or remove tools from one array and the UI updates automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {integrations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="premium-card-3d rounded-3xl border border-[#E6E2D8] bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-orange-200"
                >
                  <div className="icon-hover mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ background: item.bg, color: item.color, borderColor: item.bg }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E1B18]">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#655E56]">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationsGrid;
