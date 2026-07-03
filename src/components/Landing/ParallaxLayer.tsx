"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  rotate?: number;
  scale?: [number, number];
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 28,
  direction = "up",
  rotate = 0,
  scale = [1, 1],
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const distance = direction === "up" ? [speed, -speed] : [-speed, speed];
  const y = useTransform(scrollYProgress, [0, 1], distance);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale);

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y, rotate: rotateValue, scale: scaleValue }}>
      {children}
    </motion.div>
  );
}

export default ParallaxLayer;
