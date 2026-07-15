// @ts-nocheck
"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import {
  ChevronDown,
  Phone,
  Zap,
  Code2,
  ShieldCheck,
  Globe,
  Play,
  PhoneIncoming,
  CheckCircle2,
  Headphones,
  Calendar,
  Users,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

/* ── Typing animation ─────────────────────────────────────── */
const TypingWord = ({
  words,
  reduceMotion,
}: {
  words: string[];
  reduceMotion: boolean | null;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      const interval = setInterval(
        () => setCurrentIndex((p) => (p + 1) % words.length),
        3000,
      );
      return () => clearInterval(interval);
    }
    const currentWord = words[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    if (!isDeleting && displayText === currentWord) {
      const t = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((p) => (p + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentWord.slice(0, displayText.length - 1)
          : currentWord.slice(0, displayText.length + 1),
      );
    }, typingSpeed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, currentIndex, words, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) setDisplayText(words[currentIndex]);
  }, [currentIndex, words, reduceMotion]);

  return (
    <span className="inline-block min-w-[160px] sm:min-w-[220px] text-left">
      <span style={{ color: "#0CBDAB" }}>{displayText}</span>
      {!reduceMotion && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[0.9em] ml-1 align-middle"
          style={{ backgroundColor: "#0CBDAB" }}
        />
      )}
    </span>
  );
};

/* ── Crisp Audio Waveform ─────────────────── */
const WAVE_PATTERN = [
  42, 68, 50, 88, 60, 100, 72, 54, 82, 40, 94, 58, 74, 46, 96, 64, 50, 86, 42,
  70, 90, 52, 64, 80, 46, 92, 58, 44, 76, 50,
];

function AgentWave({ color }: { color: string }) {
  return (
    <div className="agent-wave flex items-end justify-between h-8 w-full max-w-[245px] mx-auto px-1">
      {WAVE_PATTERN.map((h, i) => (
        <span
          key={i}
          className="w-[2px] sm:w-[3px] rounded-full shrink-0"
          style={{
            height: `${h}%`,
            background: color,
            opacity: 0.4 + (h / 100) * 0.6,
            animationDelay: `${i * 0.02}s`,
            animationDuration: `${1.1 + (i % 4) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function AgentCard({ card, index, reduceMotion, isInView }: any) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 34, filter: "blur(8px)" }}
      animate={
        reduceMotion
          ? { opacity: 1 }
          : isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 34, filter: "blur(8px)" }
      }
      transition={reduceMotion ? undefined : { delay: 0.3 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#EDE8E4] bg-white p-3.5 sm:p-5 shadow-[0_14px_40px_rgba(30,27,24,0.06)] transition-all duration-300 hover:border-transparent hover:shadow-[0_28px_70px_rgba(30,27,24,0.14)] w-full min-h-[220px]"
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${card.grad[0]}, ${card.grad[1]})` }}
      />

      <div className="flex items-center gap-2.5 sm:gap-3">
        <div
          className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${card.grad[0]}, ${card.grad[1]})`,
            boxShadow: `0 10px 22px -6px ${card.grad[1]}66`,
          }}
        >
          <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs sm:text-sm font-black text-[#1E1B18]">{card.title}</p>
          <p className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-[#0CBDAB]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0CBDAB] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0CBDAB]" />
            </span>
            Online
          </p>
        </div>
      </div>

      <div className="my-2.5 rounded-xl bg-[#FAFAF8] px-2 py-1.5 sm:px-3 sm:py-2 transition-colors duration-300 group-hover:bg-[#F5FBFA]">
        <AgentWave color={card.wave} />
      </div>

      <div className="mt-auto space-y-0.5">
        {card.stats.map(([label, value]: [string, string], i: number) => (
          <div
            key={label}
            className={`flex items-center justify-between py-1 sm:py-1.5 text-[10px] sm:text-sm ${
              i > 0 ? "border-t border-[#F1ECE7]" : ""
            }`}
          >
            <span className="font-medium text-[#655E56] truncate mr-1">{label}</span>
            <span className="font-black text-[#1E1B18] shrink-0">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Floating status chip ─────────────────────────────────── */
function FloatChip({ children, className, delay = 0, floatRange = 10, reduceMotion }: any) {
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85, y: 14 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      transition={reduceMotion ? undefined : { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -floatRange, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 5 + floatRange / 6, repeat: Infinity, ease: "easeInOut", delay }
        }
        className="rounded-xl border border-white/70 bg-white/90 p-2 sm:p-2.5 shadow-[0_18px_50px_rgba(30,27,24,0.14)] backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── AI face + connector badges ─────────────────── */
/* ── AI face + connector badges (Mobile-Only Adjustments) ─────────────────── */
function AIFaceVisual({ reduceMotion, isInView, t }: any) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] aspect-square">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.92 }
        }
        transition={reduceMotion ? undefined : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full"
      >
        <Image
          src="/ai-face.png"
          alt="AI voice agent wireframe face"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 420px"
          className="object-contain select-none pointer-events-none"
        />
      </motion.div>

      {/* 1. INCOMING CALL: 
          - Mobile: Pushed left (-left-6 to -left-8)
          - Web/Tablet (sm): Restored to original closer look (-left-6) 
      */}
      <FloatChip
        reduceMotion={reduceMotion}
        delay={0.7}
        floatRange={9}
        className="absolute -left-6 top-2 xs:top-4 z-20 xs:-left-8 sm:-left-6"
      >
        <div className="flex items-center gap-1.5 xs:gap-2">
          <span className="flex h-6 w-6 xs:h-7 xs:w-7 items-center justify-center rounded-lg bg-[#E66500] text-white shrink-0">
            <PhoneIncoming size={11} strokeWidth={2.4} />
          </span>
          <div className="text-left">
            <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#1E1B18] leading-tight whitespace-nowrap">
              {t("landing.hero.chipIncoming", "Incoming Call")}
            </p>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-[#655E56] leading-tight">+1 (415) 123-9876</p>
          </div>
        </div>
      </FloatChip>

      {/* 2. INTENT DETECTED: 
          - Mobile: Pushed left (-left-8 to -left-12) to clear the eye/face profile
          - Web/Tablet (sm): Restored to original (-left-8) 
      */}
      <FloatChip
        reduceMotion={reduceMotion}
        delay={1.0}
        floatRange={8}
        className="absolute -left-8 top-[42%] z-20 xs:-left-12 sm:-left-8"
      >
        <div className="text-left">
          <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#1E1B18] leading-tight">
            {t("landing.hero.chipIntent", "Intent Detected")}
          </p>
          <p className="mt-0.5 text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-[#655E56] leading-tight">
            {t("landing.hero.chipIntentValue", "Book a demo")}
          </p>
          <p className="mt-1.5 text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-[#0CBDAB]">
            {t("landing.hero.chipConfidence", "Confidence 98%")}
          </p>
          <div className="mt-1 h-1 w-14 xs:w-16 sm:w-20 overflow-hidden rounded-full bg-[#EDE8E4]">
            <div className="h-full w-[98%] rounded-full bg-[#0CBDAB]" />
          </div>
        </div>
      </FloatChip>

      {/* 3. VOICE AGENT: 
          - Mobile: Pushed right (-right-6 to -right-8)
          - Web/Tablet (sm): Restored to original (-right-6)
      */}
      <FloatChip
        reduceMotion={reduceMotion}
        delay={0.85}
        floatRange={10}
        className="absolute -right-6 top-4 xs:top-6 z-20 xs:-right-8 sm:-right-6"
      >
        <div className="text-left">
          <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#1E1B18] whitespace-nowrap">
            {t("landing.hero.chipVoiceAgent", "Voice Agent")}
          </p>
          <div className="mt-0.5 flex items-center gap-1 xs:gap-1.5">
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-[#655E56] whitespace-nowrap">
              {t("landing.hero.agentSales", "Sales Agent")}
            </p>
            <span className="flex items-center gap-1 text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-[#0CBDAB]">
              <span className="h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-[#0CBDAB]" />
              Online
            </span>
          </div>
          <div className="mt-1.5 flex h-2.5 xs:h-3 items-end gap-[1.5px] xs:gap-[2px]">
            {[6, 11, 8, 14, 7, 12, 5, 10, 8, 13].map((h, i) => (
              <span
                key={i}
                className="w-[1.5px] xs:w-[2px] rounded-full bg-[#0CBDAB]"
                style={{ height: `${h - 3}px`, opacity: 0.5 + h / 28 }}
              />
            ))}
          </div>
        </div>
      </FloatChip>

      {/* 4. ACTION TAKEN: 
          - Mobile: Pushed right (-right-6 to -right-10) to clear the chin/neck
          - Web/Tablet (sm): Restored to original (-right-6)
      */}
      <FloatChip
        reduceMotion={reduceMotion}
        delay={1.25}
        floatRange={9}
        className="absolute bottom-2 -right-6 z-20 xs:-right-10 sm:-right-6"
      >
        <div className="text-left">
          <p className="mb-1 text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#1E1B18] whitespace-nowrap">
            {t("landing.hero.chipAction", "Action Taken")}
          </p>
          <div className="space-y-0.5 xs:space-y-1">
            {[
              t("landing.hero.actionQualified", "Lead Qualified"),
              t("landing.hero.actionCrm", "CRM Updated"),
              t("landing.hero.actionBooked", "Meeting Booked"),
            ].map((a) => (
              <div key={a} className="flex items-center gap-1 text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-[#655E56] whitespace-nowrap">
                <CheckCircle2 size={8} className="text-[#0CBDAB] shrink-0" />
                {a}
              </div>
            ))}
          </div>
        </div>
      </FloatChip>
    </div>
  );
}
/* ── Framer variants ──────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── Component ────────────────────────────────────────────── */
export function HeroSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const rotatingWords = [
    t("landing.hero.rotatingWords.voiceAgents", "you deploy code"),
    t("landing.hero.rotatingWords.sales", "Sales Calls"),
    t("landing.hero.rotatingWords.support", "Customer Support"),
    t("landing.hero.rotatingWords.appointments", "Appointments"),
  ];

  const featureChips = [
    { icon: Zap, label: t("landing.hero.chipSetup", "30-sec Setup") },
    { icon: Code2, label: t("landing.hero.chipApi", "API First") },
    { icon: ShieldCheck, label: t("landing.hero.chipEnterprise", "Enterprise Ready") },
    { icon: Globe, label: t("landing.hero.chipLanguages", "14+ Languages") },
  ];

  const agentCards = [
    {
      title: t("landing.hero.agentSales", "Sales Agent"),
      icon: Phone,
      grad: ["#3FE0CC", "#0CBDAB"],
      wave: "#0CBDAB",
      stats: [
        [t("landing.hero.statCallsToday", "Calls Today"), "632"],
        [t("landing.hero.statSuccess", "Success Rate"), "96%"],
        [t("landing.hero.statLatencyRow", "Latency"), "162ms"],
      ],
    },
    {
      title: t("landing.hero.agentSupport", "Support Agent"),
      icon: Headphones,
      grad: ["#c084fc", "#9333ea"],
      wave: "#a855f7",
      stats: [
        [t("landing.hero.statCallsToday", "Calls Today"), "412"],
        [t("landing.hero.statResolution", "Resolution Rate"), "94%"],
        [t("landing.hero.statLatencyRow", "Latency"), "171ms"],
      ],
    },
    {
      title: t("landing.hero.agentBooking", "Booking Agent"),
      icon: Calendar,
      grad: ["#60a5fa", "#2563eb"],
      wave: "#3b82f6",
      stats: [
        [t("landing.hero.statCallsToday", "Calls Today"), "278"],
        [t("landing.hero.statMeetings", "Meetings Booked"), "89"],
        [t("landing.hero.statLatencyRow", "Latency"), "155ms"],
      ],
    },
    {
      title: t("landing.hero.agentRecruiter", "Recruiter Agent"),
      icon: Users,
      grad: ["#fdba74", "#ea580c"],
      wave: "#FF7300",
      stats: [
        [t("landing.hero.statCallsToday", "Calls Today"), "160"],
        [t("landing.hero.statInterviews", "Interviews Set"), "34"],
        [t("landing.hero.statLatencyRow", "Latency"), "168ms"],
      ],
    },
  ];

  const handleScrollDown = () =>
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-hidden pt-24 pb-10 sm:py-16 md:py-20 lg:py-24 bg-white"
      data-testid="hero-section"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          
          {/* LEFT — Typography and CTA */}
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
            animate={shouldReduceMotion ? { opacity: 1 } : isInView ? "visible" : "hidden"}
            className="relative text-left flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-start">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#B7EEE5] bg-[#E6FBF7] text-[#0A9D8F]">
                <Zap size={12} className="fill-current" strokeWidth={0} />
                {t("landing.hero.badge", "Now in Beta")}
                <span className="font-medium text-[#655E56] normal-case hidden sm:inline">
                  {t("landing.hero.badgeSuffix", " · Deploy your first agent in < 60 seconds")}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-3xl font-black tracking-tight leading-[1.12] text-[#1E1B18] sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3.5rem]"
              data-testid="hero-headline"
            >
              <span className="block">
                {t("landing.hero.headline", "Deploy AI Voice Agents like")}
              </span>
              <span className="block mt-1">
                <TypingWord words={rotatingWords} reduceMotion={shouldReduceMotion} />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm font-medium text-[#655E56] max-w-xl leading-relaxed sm:text-base"
              data-testid="hero-subheadline"
            >
              {t(
                "landing.hero.subheadline",
                "Autonomous voice agents that call, qualify, support and schedule. 24/7. On autopilot.",
              )}
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 w-full flex flex-col sm:flex-row items-center gap-3 justify-start"
            >
              <Link href="/login" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 14px 34px rgba(230,101,0,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto font-black rounded-full text-white bg-[#E66500] hover:bg-[#ff7b1a] transition-colors duration-200 px-7 py-3.5 text-sm sm:text-base"
                  data-testid="button-hero-get-started"
                >
                  {t("landing.hero.getStarted", "Deploy Your First Agent")}
                </motion.button>
              </Link>
              
              <Link href="/login" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold rounded-full text-[#1E1B18] bg-white border border-[#EDE8E4] hover:border-[#5FDBCB] px-6 py-3.5 text-sm shadow-sm transition-colors duration-200"
                  data-testid="button-hero-demo"
                >
                  <Play size={12} className="text-[#1E1B18] fill-current" />
                  {t("landing.hero.watchDemo", "Watch Live Demo")}
                </motion.button>
              </Link>
            </motion.div>

            {/* Feature chips */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 justify-start"
            >
              {featureChips.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#655E56]">
                  <Icon size={13} className="text-[#0CBDAB]" strokeWidth={2.4} />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — wireframe AI face + floating connector badges */}
          <div className="relative mx-auto w-full max-w-[min(94vw,340px)] sm:max-w-[440px] px-4 sm:px-0 overflow-visible">
            <AIFaceVisual reduceMotion={shouldReduceMotion} isInView={isInView} t={t} />
          </div>
        </div>

        {/* Agent metric cards row */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="grid w-full max-w-[1200px] grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {agentCards.map((card, index) => (
              <AgentCard
                key={card.title}
                card={card}
                index={index}
                reduceMotion={shouldReduceMotion}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { delay: 1.2, duration: 0.6 }}
        className="relative z-10 mt-8 sm:mt-12"
      >
        <button
          onClick={handleScrollDown}
          className="group focus:outline-none focus-visible:ring-2 rounded-full p-2"
          style={{ "--tw-ring-color": "#da7d05" } as any}
          aria-label="Scroll down"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown
            className={`h-6 w-6 text-[#A69E96] transition-colors ${
              shouldReduceMotion ? "" : "animate-bounce"
            }`}
          />
        </button>
      </motion.div>
    </section>
  );
}

export default HeroSection;