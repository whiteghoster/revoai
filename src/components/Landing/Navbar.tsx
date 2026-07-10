// @ts-nocheck
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBranding } from "@/components/BrandingProvider";
import { AuthStorage } from "@/lib/auth-storage";

const languages = [
  { code: "en", name: "English", country: "United Kingdom", flag: "🇬🇧" },
  { code: "ur", name: "اردو", country: "Pakistan", flag: "🇵🇰" },
  { code: "ar", name: "العربية", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "de", name: "Deutsch", country: "Germany", flag: "🇩🇪" },
  { code: "es", name: "Español", country: "Spain", flag: "🇪🇸" },
  { code: "fr", name: "Français", country: "France", flag: "🇫🇷" },
  { code: "hi", name: "हिन्दी", country: "India", flag: "🇮🇳" },
  { code: "it", name: "Italiano", country: "Italy", flag: "🇮🇹" },
  { code: "ja", name: "日本語", country: "Japan", flag: "🇯🇵" },
  { code: "pl", name: "Polski", country: "Poland", flag: "🇵🇱" },
  { code: "pt", name: "Português", country: "Portugal", flag: "🇵🇹" },
  { code: "sv", name: "Svenska", country: "Sweden", flag: "🇸🇪" },
  { code: "ru", name: "Русский", country: "Russia", flag: "🇷🇺" },
];

const emojiStyle = {
  fontFamily: '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "EmojiOne Color", sans-serif',
};

const navPalette = {
  "/features": { text: "#FF7300", bg: "#FFF0E6", border: "#FFD4B3" },
  "/use-cases": { text: "#008A1A", bg: "#EEF8EA", border: "#CDEDCB" },
  "/pricing": { text: "#B45309", bg: "#FFF7ED", border: "#FED7AA" },
  "/integrations": { text: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  "/contact": { text: "#0F766E", bg: "#F0FDFA", border: "#99F6E4" },
};

function LanguageDropdown({ mobile = false }: { mobile?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const currentLang = languages.find((l) => l.code === i18n.language?.split("-")[0]) || languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = languages.filter((l) =>
    `${l.name} ${l.country} ${l.code}`.toLowerCase().includes(search.toLowerCase()),
  );

  const select = (lang: typeof languages[0]) => {
    i18n.changeLanguage(lang.code);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={dropdownRef} className="relative w-full lg:w-auto">
      <button
        onClick={() => setOpen((v) => !v)}
        className={mobile
          ? "w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#f6f6ef] text-sm font-semibold text-[#1E1B18]"
          : "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border border-[#E6E2D8] bg-white text-[#1E1B18] transition-all hover:border-[#FF7300]/40 hover:bg-[#f6f6ef]"
        }
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-xl leading-none" style={emojiStyle}>{currentLang.flag}</span>
          <span className="uppercase text-xs tracking-wide force-ltr">{currentLang.code}</span>
          {mobile && <span className="text-sm normal-case">{currentLang.name}</span>}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#655E56] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`${mobile ? "relative mt-2 w-full" : "absolute right-0 mt-2 w-64"} bg-white rounded-2xl shadow-xl border border-[#E6E2D8] py-2 z-[200] overflow-hidden`}
          >
            <div className="px-3 pb-2 border-b border-[#F0ECE2]">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f6f6ef] border border-[#E6E2D8]">
                <Search className="w-3.5 h-3.5 text-[#655E56] flex-shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search language or country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 text-xs bg-transparent outline-none text-[#1E1B18] placeholder-[#8C857D]"
                />
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <p className="text-xs text-[#8C857D] text-center py-4">No languages found</p>
              ) : filtered.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => select(lang)}
<<<<<<< HEAD
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    currentLang.code === lang.code ? "bg-[#FFF0E6]" : "hover:bg-[#f6f6ef]"
                  }`}
=======
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${currentLang.code === lang.code ? "bg-[#FFF0E6]" : "hover:bg-[#f6f6ef]"
                    }`}
>>>>>>> 5d840ee (update ui)
                >
                  <span className="text-xl leading-none w-7 text-center flex-shrink-0" style={emojiStyle}>{lang.flag}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block truncate text-sm font-semibold text-[#1E1B18]">{lang.name}</span>
                    <span className="block truncate text-[11px] text-[#655E56]">{lang.country}</span>
                  </span>
                  {currentLang.code === lang.code && <span className="w-2 h-2 rounded-full bg-[#FF7300] flex-shrink-0" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const previousOverflow = useRef<string>("");
  const brandingConfig = useBranding();
  const branding = brandingConfig.branding;
  const { t } = useTranslation();
  const isAuthenticated = AuthStorage.isAuthenticated();
  const isAdmin = AuthStorage.isAdmin();

  const navLinks = [
    { href: "/features", label: t("landing.navbar.features") },
    { href: "/use-cases", label: t("landing.navbar.useCases") },
    { href: "/pricing", label: t("landing.navbar.pricing") },
    { href: "/integrations", label: t("landing.navbar.integrations") },
    { href: "/contact", label: t("landing.navbar.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const restoreBodyOverflow = useCallback(() => {
    document.body.style.overflow = previousOverflow.current || "unset";
  }, []);
  const lockBodyOverflow = useCallback(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      lockBodyOverflow();
    } else {
      restoreBodyOverflow();
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      restoreBodyOverflow();
    };
  }, [isMobileMenuOpen, lockBodyOverflow, restoreBodyOverflow]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const handleSignIn = () => {
    setIsMobileMenuOpen(false);
    if (isAuthenticated) window.location.href = isAdmin ? "/admin" : "/app";
    else router.push("/login");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#E6E2D8] ${isScrolled ? "shadow-sm" : "shadow-none"}`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="flex items-center h-16 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            data-testid="link-logo"
            onClick={(e) => { e.preventDefault(); router.push("/"); }}
          >
<<<<<<< HEAD
              <img
    src={branding.logo_url_light || branding.logo_url || "/logo.png"}
    alt={branding.app_name || "Logo"}
    className="max-h-20 w-auto object-contain"
  />
=======
            <img
              src={branding.logo_url_light || branding.logo_url || "/logo.png"}
              alt={branding.app_name || "Logo"}
              className="max-h-20 w-auto object-contain"
            />
>>>>>>> 5d840ee (update ui)
          </motion.a>

          <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#E6E2D8] bg-[#f6f6ef]/70 p-1">
            {navLinks.map((link) => {
              const tone = navPalette[link.href];
              const active = pathname === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold rounded-full transition-all border border-transparent"
                  style={active ? { color: tone.text, background: tone.bg, borderColor: tone.border } : { color: "#655E56" }}
                  whileHover={{ y: -1, color: tone.text, backgroundColor: tone.bg, borderColor: tone.border }}
                  transition={{ type: "spring", stiffness: 400 }}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageDropdown />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSignIn}
              className="font-bold px-6 py-2 rounded-full text-sm text-white transition-all bg-[#FF7300] hover:bg-[#E66500] shadow-sm shadow-orange-500/20"
              data-testid="button-nav-signin"
            >
              {t("landing.navbar.login")}
            </motion.button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#1E1B18]"
            onClick={() => setIsMobileMenuOpen(true)}
            data-testid="button-mobile-menu-open"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/45 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-testid="mobile-menu-overlay"
            />
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm h-screen bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              data-testid="mobile-menu"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between h-16 px-4 border-b border-[#E6E2D8]">
                  <img src={branding.logo_url_light || branding.logo_url || "/logo.png"} alt={branding.app_name || "Logo"} className="h-10 w-auto max-w-[140px] object-contain" />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} data-testid="button-mobile-menu-close" aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-5">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                      const tone = navPalette[link.href];
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block text-base font-bold py-3 px-4 rounded-2xl border transition-all"
                          style={{ color: tone.text, background: tone.bg, borderColor: tone.border }}
                          data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </nav>

                <div className="p-4 border-t border-[#E6E2D8] space-y-3 bg-[#f6f6ef]">
                  <div>
                    <p className="text-xs text-[#655E56] mb-1.5 px-1">Select Language</p>
                    <LanguageDropdown mobile />
                  </div>
                  <button
                    className="w-full text-white font-bold py-3 rounded-xl text-sm bg-[#FF7300] hover:bg-[#E66500] transition-colors"
                    onClick={handleSignIn}
                    data-testid="button-mobile-signin"
                  >
                    {t("landing.navbar.login")}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
