"use client";
import { motion } from "framer-motion";
import { CalendarCheck, Headphones, PhoneCall, ShoppingCart, Stethoscope, GraduationCap } from "lucide-react";

const useCases = [
  {
    title: "Sales qualification",
    description: "Qualify inbound leads, ask the right questions, and push hot prospects to your sales team.",
    icon: PhoneCall,
    color: "#FF7300",
    bg: "#FFF0E6",
  },
  {
    title: "Appointment booking",
    description: "Let customers schedule, reschedule, and confirm meetings without waiting for a human agent.",
    icon: CalendarCheck,
    color: "#008A1A",
    bg: "#EEF8EA",
  },
  {
    title: "Customer support",
    description: "Handle repetitive support calls, collect context, and escalate only the conversations that need humans.",
    icon: Headphones,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    title: "Ecommerce updates",
    description: "Automate order status, return requests, delivery reminders, and feedback collection at scale.",
    icon: ShoppingCart,
    color: "#B45309",
    bg: "#FFF7ED",
  },
  {
    title: "Healthcare reminders",
    description: "Send appointment reminders, collect patient responses, and reduce no-shows with voice automation.",
    icon: Stethoscope,
    color: "#0F766E",
    bg: "#F0FDFA",
  },
  {
    title: "Education outreach",
    description: "Call students or parents for admission follow-ups, counselling slots, and event reminders.",
    icon: GraduationCap,
    color: "#9333EA",
    bg: "#FAF5FF",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases-overview" className="section-white premium-overlap-section relative z-40 -mt-6 md:-mt-12 py-16 md:py-24 overflow-hidden" data-testid="use-cases-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex rounded-full border border-[#CDEDCB] bg-[#EEF8EA] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#008A1A]">
            Use Cases
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1B18] tracking-tight">
            One AI voice platform for every business conversation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#655E56] leading-relaxed">
            Build reusable voice agents for sales, support, reminders, bookings, feedback, and industry-specific workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="premium-card-3d group rounded-3xl border border-[#E6E2D8] bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-orange-200"
              >
                <div className="icon-hover mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ background: item.bg, color: item.color, borderColor: item.bg }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1E1B18]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#655E56]">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
