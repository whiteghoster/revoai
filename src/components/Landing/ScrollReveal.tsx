"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

export type ScrollAnimation =
  | "fade-up"
  | "fade-right"
  | "fade-left"
  | "zoom-in"
  | "blur-up"
  | "rotate-up"
  | "clip-up"
  | "float-in";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: ScrollAnimation;
  delay?: number;
  className?: string;
  once?: boolean;
  parallax?: number;
  amount?: number;
}

const animationVariants: Record<ScrollAnimation, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 58 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.9, y: 34 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 44, filter: "blur(14px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "rotate-up": {
    hidden: { opacity: 0, y: 72, rotateX: 10, scale: 0.96, transformPerspective: 1200 },
    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transformPerspective: 1200 },
  },
  "clip-up": {
    hidden: { opacity: 0, y: 44, clipPath: "inset(18% 0% 0% 0% round 32px)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" },
  },
  "float-in": {
    hidden: { opacity: 0, y: 88, scale: 0.94, rotate: -1.5 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
  },
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  once = true,
  parallax = 18,
  amount = 0.18,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const variants = animationVariants[animation];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`premium-scroll-shell ${className}`}
      style={{ y }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount, margin: "0px 0px -110px 0px" }}
        variants={variants}
        transition={{
          duration: 0.88,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ScrollReveal;
