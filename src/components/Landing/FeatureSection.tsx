// @ts-nocheck
"use client";
/**
 * ============================================================
 * FeatureSection - Clean Light Design Match
 * Alternating layouts, precise light UI mockups with soft orange glows
 * ============================================================
 */
import { motion, useInView } from "framer-motion";
import { Check, User, Calendar, MessageSquare, Phone, Settings } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ParallaxLayer } from "@/components/Landing/ParallaxLayer";

const rollingPopupVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const CapabilityBadge = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    className="flex items-center gap-1.5"
    variants={rollingPopupVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="w-4 h-4 rounded-full bg-[#d6f5d6] flex items-center justify-center">
      <Check className="h-2.5 w-2.5 text-[#008000] stroke-[3]" />
    </div>
    <span className="text-[#008000] font-semibold text-sm">{text}</span>
  </motion.div>
);

const VoiceAgentMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Exact Match: Warm ambient orange shadow glow + light orange border */}
      <div className="relative bg-white border border-orange-100 shadow-[0_15px_35px_rgba(255,122,0,0.07),0_5px_15px_rgba(255,122,0,0.03)] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600">
            <span>English (Singapore)</span>
            <span className="text-[10px] text-gray-400">▼</span>
          </div>
        </div>
        
        <div className="w-fit px-2.5 py-0.5 bg-orange-50 border border-orange-200 rounded-md text-[11px] text-orange-600 font-medium">
          Voice: Brian ✓
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center shrink-0">
            <User className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 w-14">Stability</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-orange-500 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 w-14">Speed</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-orange-500 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 w-14">Diarization</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-orange-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <button className="bg-orange-500 text-white font-medium text-xs px-3 py-1.5 rounded-md shadow-sm shadow-orange-500/20">
          Create Agent
        </button>

        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <div className="w-7 h-7 rounded-md bg-red-50 border border-red-100 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-red-400" />
          </div>
          <div className="w-7 h-7 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-teal-500" />
          </div>
          <div className="w-7 h-7 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center">
            <Settings className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CallSchedulerMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Exact Match: Warm ambient orange shadow glow + light orange border */}
      <div className="relative bg-white border border-orange-100 shadow-[0_15px_35px_rgba(255,122,0,0.07),0_5px_15px_rgba(255,122,0,0.03)] rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-500 text-white rounded-md w-fit text-xs font-medium">
          <User className="w-3.5 h-3.5" />
          <span>Select Agent</span>
        </div>

        <div className="pl-6 space-y-2">
          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-gray-200 rounded-md w-36 text-xs text-gray-600">
            <span>Outbound Call</span>
            <span className="text-[10px] text-gray-400">✓</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-green-300 rounded-md w-36 text-xs text-green-600 font-medium">
            <span>Start: 1/05/24</span>
            <span className="text-[10px] text-green-500">✓</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-green-300 rounded-md w-36 text-xs text-green-600 font-medium">
            <span>End: 20/05/24</span>
            <span className="text-[10px] text-green-500">✓</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-500 text-white rounded-md w-fit text-xs font-medium">
          <Calendar className="w-3.5 h-3.5" />
          <span>Select List</span>
        </div>
      </div>
    </div>
  );
};

const ConversionMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Exact Match: Warm ambient orange shadow glow + light orange border */}
      <div className="relative bg-white border border-orange-100 shadow-[0_15px_35px_rgba(255,122,0,0.07),0_5px_15px_rgba(255,122,0,0.03)] rounded-2xl p-6 space-y-4">
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <div className="space-y-2.5 px-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-lg">
            <User className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold text-orange-700">Collect Contact Details</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-lg">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold text-orange-700">Book Appointments</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-lg">
            <Check className="w-4 h-4 text-orange-500 stroke-[3]" />
            <span className="text-xs font-semibold text-orange-700">Qualify Leads</span>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shadow-sm">
            <User className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  imagePosition: "left" | "right";
}

const FeatureCard = ({ title, description, bullets, mockup, imagePosition }: FeatureCardProps) => {
  const isLeft = imagePosition === "left";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Container Card Layout */}
        <ParallaxLayer speed={isLeft ? 16 : 24} direction={isLeft ? "down" : "up"} className={`${isLeft ? "order-2" : "order-2 md:order-1"}`}>
          <div className="premium-card-3d bg-white/95 border border-[#E6E2D8] shadow-[0_18px_55px_rgba(30,27,24,0.06)] rounded-[28px] p-6 sm:p-10 space-y-4 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">{description}</p>

            <ul className="space-y-2.5 pt-2">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
<<<<<<< HEAD
                  initial={{ opacity: 0, x: isLeft ? 16 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
=======
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
>>>>>>> 5d840ee (update ui)
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="icon-hover w-4 h-4 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="h-2.5 w-2.5 text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-gray-600 text-xs font-medium">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </ParallaxLayer>

        {/* Mockup Graphic Container */}
        <ParallaxLayer
          speed={isLeft ? 34 : 30}
          rotate={isLeft ? -2.5 : 2.5}
          className={`relative ${isLeft ? "order-1" : "order-1 md:order-2"}`}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-[#A4F5B7]/40 blur-xl" />
            <div className="absolute -right-4 bottom-4 h-28 w-28 rounded-full bg-[#FFAA73]/30 blur-xl" />
            <div className="premium-card-3d relative rounded-[32px] border border-white/70 bg-white/60 p-3 shadow-[0_30px_90px_rgba(30,27,24,0.12)] backdrop-blur-md">
              {mockup}
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </div>
  );
};

export function FeatureSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-white premium-overlap-section relative z-20 -mt-6 md:-mt-14 py-20 md:py-24 font-sans overflow-hidden">
      {/* Header Container */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
          Automate Your <span className="text-orange-500">Growth</span>
        </h2>
        <p className="text-gray-500 text-sm font-medium mb-6">
          Intelligent voice solutions designed for modern enterprise workflows.
        </p>

        <div className="text-secondary flex flex-wrap justify-center gap-x-5 gap-y-2 font-medium">
          <CapabilityBadge text={t('landing.featureSection.capabilities.bookMeetings', 'Book Meetings')} delay={0} />
          <CapabilityBadge text={t('landing.featureSection.capabilities.conductInterviews', 'Conduct Interviews')} delay={0.1} />
          <CapabilityBadge text={t('landing.featureSection.capabilities.coldCallProspects', 'Cold Call Prospects')} delay={0.2} />
          <CapabilityBadge text={t('landing.featureSection.capabilities.offerSupport', 'Offer Support')} delay={0.3} />
        </div>
      </div>

      {/* Feature Blocks arranged alternating like the template image */}
      <div className="space-y-6">
        <FeatureCard 
          title={t('landing.featureSection.feature1.title', 'Human-like Voice Agents')}
          description={t('landing.featureSection.feature1.description', 'Easily create your AI agent by giving your agent a name, selecting its language, accent, and set it up to handle tasks:')}
          bullets={[
            t('landing.featureSection.feature1.bullet1', 'Instantly train AI Agents with your data'),
            t('landing.featureSection.feature1.bullet2', 'Deploy quickly using no-code platform'),
            t('landing.featureSection.feature1.bullet3', 'Automate customer interactions')
          ]}
          mockup={<VoiceAgentMockup />}
          imagePosition="right"
        />

        <FeatureCard
          title={t('landing.featureSection.feature2.title', 'Let AI Handle Your Calls')}
          description={t('landing.featureSection.feature2.description', 'Handle outbound calls, answer inbound calls, and schedule appointments 24/7. Select your list or upload contacts, setup a schedule and go!')}
          bullets={[
            t('landing.featureSection.feature2.bullet1', 'Outbound Calls'),
            t('landing.featureSection.feature2.bullet2', 'Inbound Calls')
          ]}
          mockup={<CallSchedulerMockup />}
          imagePosition="left"
        />

        <FeatureCard
          title={t('landing.featureSection.feature3.title', 'Engage & Convert')}
          description={t('landing.featureSection.feature3.description', 'Connect with customers in the most human-like way possible, automating tasks and enhancing your outreach efforts.')}
          bullets={[
            t('landing.featureSection.feature3.bullet1', 'Automate Lead Qualification and Follow-ups'),
            t('landing.featureSection.feature3.bullet2', 'Boost Event Attendance with AI Invitations'),
            t('landing.featureSection.feature3.bullet3', 'Provide 24/7 AI Customer Support Solutions'),
            t('landing.featureSection.feature3.bullet4', 'Utilize AI to Automate Applicant Interviews')
          ]}
          mockup={<ConversionMockup />}
          imagePosition="right"
        />
      </div>
    </section>
  );
}

export default FeatureSection;