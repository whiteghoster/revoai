// @ts-nocheck
"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { AuthStorage } from "@/lib/auth-storage";
import { useTranslation } from 'react-i18next';

const heroCardSales        = "/hero-card-sales.png";
const heroCardSupport      = "/hero-card-support.png";
const heroCardLeads        = "/hero-card-leads.png";
const heroCardAppointments = "/hero-card-appointments.png";

/* ── Typing animation ─────────────────────────────────────── */
const TypingWord = ({
  words,
  reduceMotion,
}: {
  words: string[];
  reduceMotion: boolean | null;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText]   = useState(words[0] || "");
  const [isDeleting, setIsDeleting]     = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      const interval = setInterval(
        () => setCurrentIndex((p) => (p + 1) % words.length),
        3000,
      );
      return () => clearInterval(interval);
    }
    const currentWord   = words[currentIndex];
    const typingSpeed   = isDeleting ? 50 : 100;
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
    <span className="inline-block min-w-[160px] sm:min-w-[200px] text-left">
      <span style={{ color: "#FF7A00" }}>{displayText}</span>
      {!reduceMotion && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[0.9em] ml-1 align-middle"
          style={{ backgroundColor: "#FF7A00" }}
        />
      )}
    </span>
  );
};

/* ── Data ─────────────────────────────────────────────────── */
const useCaseCards = [
  { title: "Lead Qualification", image: heroCardLeads,        widget: "leads" },
  { title: "Sales Outreach",     image: heroCardSales,        widget: "sales" },
  { title: "Appointments",       image: heroCardAppointments, widget: "appointments" },
  { title: "Customer Support",   image: heroCardSupport,      widget: "support" },
];

const widgetComponents: Record<string, React.FC> = {};

/* ── Framer variants ──────────────────────────────────────── */
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ── Component ────────────────────────────────────────────── */
export function HeroSection() {
  const { t }              = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const isAuthenticated    = AuthStorage.isAuthenticated();
  const isAdmin            = AuthStorage.isAdmin();
  const sectionRef         = useRef(null);
  const isInView           = useInView(sectionRef, { once: true });

  const rotatingWords = [
    t('landing.hero.rotatingWords.voiceAgents',  'AI Voice Agents'),
    t('landing.hero.rotatingWords.sales',        'Sales Calls'),
    t('landing.hero.rotatingWords.support',      'Customer Support'),
    t('landing.hero.rotatingWords.appointments', 'Appointments'),
  ];

  const handleScrollDown = () =>
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });

  const getDashboardLink = () =>
    isAuthenticated ? (isAdmin ? "/admin" : "/app") : "/login";

  return (
    <section
      ref={sectionRef}
      className="
        relative flex flex-col items-center overflow-hidden
        pt-20 pb-12
        sm:pt-28 sm:pb-16
        md:pt-36 md:pb-20
        lg:pt-40 lg:pb-24
        bg-[#ffede0]
      "
      data-testid="hero-section"
    >
      {/* Background Dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-dots.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          opacity: 0.15,
        }}
      />

      {/* Left Green Badge — desktop only */}
      <div className="animate-float-l absolute left-8 xl:left-12 top-40 hidden lg:flex flex-col items-end gap-1 z-10">
        <svg
          className="w-6 h-6 text-[#1E1B18] fill-current transform translate-x-4 translate-y-1"
          viewBox="0 0 24 24" stroke="white" strokeWidth="3" strokeLinejoin="round"
        >
          <path d="M21 3L3 10.53l7.76 2.56L13.32 21z" />
        </svg>
        <div className="bg-[#A4F5B7] text-[#1E1B18] font-medium px-5 py-2.5 text-sm flex items-center gap-2 rounded-tl-[50px] rounded-tr-none rounded-bl-[50px] rounded-br-[15px]">
          <span className="w-2 h-2 bg-[#14A848] rounded-full inline-block animate-pulse" />
          Live Conversations
        </div>
      </div>

      {/* Right Orange Badge — desktop only */}
      <div className="animate-float-r absolute right-8 xl:right-16 top-44 hidden lg:flex flex-col items-start gap-1 z-10">
        <svg
          className="w-6 h-6 text-[#1E1B18] fill-current transform -translate-x-4 -translate-y-1 rotate-[270deg]"
          viewBox="0 0 24 24" stroke="white" strokeWidth="3" strokeLinejoin="round"
        >
          <path d="M21 3L3 10.53l7.76 2.56L13.32 21z" />
        </svg>
        <div className="bg-[#FFAA73] text-[#1E1B18] font-medium px-5 py-2.5 text-sm rounded-tl-none rounded-tr-[50px] rounded-bl-[15px] rounded-br-[50px]">
          Live Conversations
        </div>
      </div>

      {/* ── Hero copy ───────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
          animate={shouldReduceMotion ? { opacity: 1 } : isInView ? "visible" : "hidden"}
          className="space-y-5 sm:space-y-7"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#c6f37e] bg-[#e5f0b3] text-[#4d9b00]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25ZM4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625ZM5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583Z" fill="#4D9B00" />
              </svg>
              {t('landing.hero.badge', 'No-code AI Voice Engine')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="
              text-3xl font-black tracking-tight leading-[1.15] text-[#1E1B18]
              sm:text-4xl sm:leading-[1.1]
              md:text-5xl
              lg:text-6xl
            "
            data-testid="hero-headline"
          >
            <span className="block sm:whitespace-nowrap">
              {t('landing.hero.headline', 'Scale Your Appointments with')}
            </span>
            <span className="block mt-2">
              <TypingWord words={rotatingWords} reduceMotion={shouldReduceMotion} />
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="
              text-base font-medium text-[#655E56] max-w-2xl mx-auto leading-relaxed
              sm:text-lg
              md:text-xl
            "
            data-testid="hero-subheadline"
          >
            {t(
              'landing.hero.subheadline',
              'Create human-like AI voice agents that answer calls, book meetings, and handle customer interactions 24/7.',
            )}
          </motion.p>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-1"
          >
            {[
              t('landing.hero.freeTrial', '14-day Free Trial'),
              t('landing.hero.freeCredit', 'Free $10 Credit'),
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#655E56] bg-white border border-[#EDE8E4] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm"
              >
                <Check size={13} className="text-[#14A848] stroke-[3]" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div variants={itemVariants} className="flex justify-center pt-2">
            <Link href={getDashboardLink()}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(20,168,72,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="sm:font-semibold
                  font-black rounded-full text-white
                  bg-[#FF7A00] hover:bg-[#E06B00] transition-all duration-200
                  px-8 py-3.5 text-base
                  sm:px-12 sm:py-4 sm:text-lg
                "
                data-testid="button-hero-get-started"
              >
                {t('landing.hero.getStarted', 'Book a Free Demo')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Hero Cards ──────────────────────────────────────── */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={shouldReduceMotion ? undefined : { delay: 0.8, duration: 0.7 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 md:mt-16 lg:mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {useCaseCards.map((card, index) => {
            const Widget = widgetComponents[card.widget];

            return (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { delay: 1 + index * 0.1, duration: 0.5 }
                }
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="
                  relative overflow-hidden rounded-2xl 
                  aspect-[3/4]
                "
              >
                {/*
                  object-cover fills the card fully.
                  object-top keeps faces/content anchored to the top
                  so the bottom gets trimmed rather than faces.
                  All 4 cards share the same aspect-ratio so heights
                  are always equal at every breakpoint automatically.
                */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {Widget && (
                  <div className="absolute inset-0">
                    <Widget />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { delay: 1.5, duration: 0.6 }}
        className="relative z-10 mt-10 sm:mt-14"
      >
        <button
          onClick={handleScrollDown}
          className="group focus:outline-none focus-visible:ring-2 rounded-full p-2"
          style={{ "--tw-ring-color": "#FF7A00" } as any}
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