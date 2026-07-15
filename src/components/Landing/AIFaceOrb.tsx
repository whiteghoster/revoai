"use client";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useState } from "react";

export function AIFaceOrb() {
  const [loaded, setLoaded] = useState(false);

  function handleLoad(spline: any) {
    setLoaded(true);
    // Hide the "Built with Spline" watermark DOM element
    const container = spline?.canvas?.parentElement;
    if (container) {
      const links = container.querySelectorAll("a");
      links.forEach((el: HTMLElement) => { el.style.display = "none"; });
      // Also hide any sibling divs after the canvas (watermark wrapper)
      const siblings = container.children;
      for (let i = 0; i < siblings.length; i++) {
        const el = siblings[i] as HTMLElement;
        if (el.tagName !== "CANVAS") el.style.display = "none";
      }
    }
  }

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 450 }}>
      {/* ACTIVE chip */}
      <div style={{
        position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
        background: "rgba(20,168,72,0.1)", border: "1px solid rgba(74,222,128,0.3)",
        borderRadius: 20, padding: "3px 12px", display: "flex", alignItems: "center",
        gap: 6, zIndex: 30,
      }}>
        <motion.div
          style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80" }}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <span style={{ color: "#4ade80", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em" }}>
          ACTIVE
        </span>
      </div>

      {/* Spline scene */}
      <motion.div
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Spline
          scene="https://prod.spline.design/SnJ9oGoWibWPOB85/scene.splinecode"
          onLoad={handleLoad}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Fallback cover over bottom-right watermark area */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: 220, height: 50,
        background: "#f6f6ef",
        zIndex: 9999,
        pointerEvents: "none",
      }} />

      {/* Bottom label */}
      <span style={{
        position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
        color: "rgba(74,222,128,0.4)", fontSize: 9, fontWeight: 700,
        letterSpacing: "0.18em", zIndex: 30, whiteSpace: "nowrap",
      }}>
        AI VOICE ENGINE
      </span>
    </div>
  );
}

export default AIFaceOrb;
