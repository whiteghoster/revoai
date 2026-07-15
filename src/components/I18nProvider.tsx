"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

const rtlLanguages = new Set(["ar", "ur"]);

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const applyDirection = (language: string) => {
      const lang = language?.split("-")[0] || "en";
      document.documentElement.lang = lang;
      document.documentElement.dir = rtlLanguages.has(lang) ? "rtl" : "ltr";
    };

    applyDirection(i18n.language);
    i18n.on("languageChanged", applyDirection);
    setReady(true);

    return () => {
      i18n.off("languageChanged", applyDirection);
    };
  }, [i18n]);

  if (!ready) return null;
  return <>{children}</>;
}
