"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface Props {
  needsLightText?: boolean;
}

const languages = [
  { code: "en", name: "English",    native: "English",    flag: "🇺🇸" },
  { code: "ar", name: "Arabic",     native: "العربية",    flag: "🇸🇦" },
  { code: "de", name: "German",     native: "Deutsch",    flag: "🇩🇪" },
  { code: "es", name: "Spanish",    native: "Español",    flag: "🇪🇸" },
  { code: "fr", name: "French",     native: "Français",   flag: "🇫🇷" },
  { code: "hi", name: "Hindi",      native: "हिन्दी",      flag: "🇮🇳" },
  { code: "it", name: "Italian",    native: "Italiano",   flag: "🇮🇹" },
  { code: "ja", name: "Japanese",   native: "日本語",      flag: "🇯🇵" },
  { code: "pl", name: "Polish",     native: "Polski",     flag: "🇵🇱" },
  { code: "pt", name: "Portuguese", native: "Português",  flag: "🇧🇷" },
  { code: "sv", name: "Swedish",    native: "Svenska",    flag: "🇸🇪" },
  { code: "ru", name: "Russian",    native: "Русский",    flag: "🇷🇺" },
];

export function LandingLanguageSelector({ needsLightText }: Props) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    languages.find((l) => l.code === i18n.language) ?? languages[0]
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const select = (lang: typeof languages[0]) => {
    setSelected(lang);
    setOpen(false);
    i18n.changeLanguage(lang.code);
  };

  const triggerText   = needsLightText ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900";
  const triggerBorder = needsLightText ? "border-white/20" : "border-gray-200";

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium border transition-all
          ${triggerBorder} ${triggerText} hover:bg-black/5 ${open ? "bg-black/5" : "bg-transparent"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-xs font-semibold tracking-wide uppercase">{selected.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown — matches screenshot style */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[200] overflow-hidden"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={selected.code === lang.code}
              onClick={() => select(lang)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                selected.code === lang.code ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              {/* Flag */}
              <span className="text-xl leading-none w-7 text-center flex-shrink-0">{lang.flag}</span>

              {/* Native name (bold) + English name (muted) */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-gray-900 leading-tight truncate">
                  {lang.native}
                </span>
                <span className="text-xs text-gray-400 leading-tight truncate">
                  {lang.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LandingLanguageSelector;