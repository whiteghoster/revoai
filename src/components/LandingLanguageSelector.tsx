"use client";
import { useState } from "react";

interface Props {
  needsLightText?: boolean;
}

const languages = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
];

export function LandingLanguageSelector({ needsLightText }: Props) {
  const [current, setCurrent] = useState("en");
  return (
    <div className="flex items-center gap-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setCurrent(l.code)}
          className={`px-2 py-1 text-xs rounded transition-colors ${
            current === l.code
              ? "bg-amber-500 text-white"
              : needsLightText
              ? "text-white/70 hover:text-white"
              : "text-stone-500 hover:text-stone-900"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
