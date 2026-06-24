// @ts-nocheck
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBranding } from "@/components/BrandingProvider";
import { AuthStorage } from "@/lib/auth-storage";

// ── Language data ─────────────────────────────────────────────────────────────
const languages = [
  { code: "en", name: "English",    flag: "🇬🇧" },
  { code: "ar", name: "العربية",    flag: "🇸🇦" },
  { code: "de", name: "Deutsch",    flag: "🇩🇪" },
  { code: "es", name: "Español",    flag: "🇪🇸" },
  { code: "fr", name: "Français",   flag: "🇫🇷" },
  { code: "hi", name: "हिन्दी",     flag: "🇮🇳" },
  { code: "it", name: "Italiano",   flag: "🇮🇹" },
  { code: "ja", name: "日本語",     flag: "🇯🇵" },
  { code: "pl", name: "Polski",     flag: "🇵🇱" },
  { code: "pt", name: "Português",  flag: "🇵🇹" },
  { code: "sv", name: "Svenska",    flag: "🇸🇪" },
  { code: "ru", name: "Русский",    flag: "🇷🇺" },
];

const emojiStyle = {
  fontFamily: '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "EmojiOne Color", sans-serif',
};

// ── Language Dropdown (Desktop) ───────────────────────────────────────────────
function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen]     = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef         = useRef<HTMLDivElement>(null);
  const searchRef           = useRef<HTMLInputElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false); setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setSearch(""); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = languages.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.code.toLowerCase().includes(search.toLowerCase())
  );

  const select = (lang: typeof languages[0]) => {
    i18n.changeLanguage(lang.code);
    setOpen(false); setSearch("");
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium border transition-all
          border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50
          ${open ? "bg-gray-50" : "bg-transparent"}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-xl leading-none" style={emojiStyle}>{currentLang.flag}</span>
        <span className="text-xs font-semibold tracking-wide uppercase">{currentLang.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-[200] overflow-hidden"
          >
            <div className="px-3 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                <Search className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search language..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 text-xs bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <div className="max-h-52 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-4">No languages found</p>
              ) : filtered.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => select(lang)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    currentLang.code === lang.code ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl leading-none w-6 text-center flex-shrink-0" style={emojiStyle}>{lang.flag}</span>
                  <span className="flex-1 truncate text-sm text-gray-700">{lang.name}</span>
                  {currentLang.code === lang.code && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile Language Picker ────────────────────────────────────────────────────
function MobileLanguagePicker() {
  const { i18n } = useTranslation();
  const [open, setOpen]     = useState(false);
  const [search, setSearch] = useState("");

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  const filtered = languages.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.code.toLowerCase().includes(search.toLowerCase())
  );

  const select = (lang: typeof languages[0]) => {
    i18n.changeLanguage(lang.code);
    setOpen(false); setSearch("");
  };

  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl leading-none" style={emojiStyle}>{currentLang.flag}</span>
          <span>{currentLang.name}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-1 rounded-xl border border-gray-100 bg-white shadow-md"
          >
            <div className="p-2 border-b border-gray-100">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                <Search className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search language..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 text-xs bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <div className="max-h-48 overflow-y-auto py-1">
              {filtered.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => select(lang)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors text-left ${
                    currentLang.code === lang.code
                      ? "bg-orange-50 text-[#FF7300] font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xl leading-none w-6 text-center flex-shrink-0" style={emojiStyle}>{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {currentLang.code === lang.code && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export function Navbar() {
  const router        = useRouter();
  const location      = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]             = useState(false);
  const mobileMenuRef       = useRef<HTMLDivElement>(null);
  const previousOverflow    = useRef<string>("");
  const brandingConfig      = useBranding();
  const branding            = brandingConfig.branding;
  const { t }               = useTranslation();
  const isAuthenticated     = AuthStorage.isAuthenticated();
  const isAdmin             = AuthStorage.isAdmin();

  const navLinks = [
    { href: "/features",     label: t('landing.navbar.features') },
    { href: "/use-cases",    label: t('landing.navbar.useCases') },
    { href: "/pricing",      label: t('landing.navbar.pricing') },
    { href: "/integrations", label: t('landing.navbar.integrations') },
    { href: "/contact",      label: t('landing.navbar.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  const restoreBodyOverflow = useCallback(() => {
    document.body.style.overflow = previousOverflow.current || "unset";
  }, []);
  const lockBodyOverflow = useCallback(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node))
        setIsMobileMenuOpen(false);
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300
        bg-white border-b border-gray-100
        ${isScrolled ? "shadow-sm" : "shadow-none"}
      `}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo Container (Size increased slightly) ── */}
          <motion.a
            href="/"
            className="flex items-center flex-shrink-0"
            style={{ height: '80px' }} // Bumped up from 36px
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            data-testid="link-logo"
            onClick={(e) => { e.preventDefault(); router.push("/"); }}
          >
            <img
              src={branding.logo_url_light || branding.logo_url || "/logo.png"}
              alt={branding.app_name || "Logo"}
              style={{ height: '100%', width: 'auto', maxWidth: '180px', display: 'block' }} // Max-width increased proportionally
              className="object-contain"
              data-testid="img-logo"
            />
          </motion.a>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400 }}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* ── Right side: Language + CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageDropdown />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSignIn}
              className="font-semibold px-6 py-2 rounded-full text-sm text-white transition-all bg-[#FF7300] hover:bg-[#E06500]"
              data-testid="button-nav-signin"
            >
              {t('landing.navbar.login')}
            </motion.button>
          </div>

          {/* ── Mobile hamburger ── */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
            data-testid="button-mobile-menu-open"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-testid="mobile-menu-overlay"
            />
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm h-screen bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              data-testid="mobile-menu"
            >
              <div className="flex flex-col h-full">
                {/* Drawer header with logo */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
                  <div style={{ height: '38px' }} className="flex items-center"> {/* Bumped up from 32px */}
                    <img
                      src={branding.logo_url_light || branding.logo_url || "/logo.png"}
                      alt={branding.app_name || "Logo"}
                      style={{ height: '100%', width: 'auto', maxWidth: '150px', display: 'block' }}
                      className="object-contain"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid="button-mobile-menu-close"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block text-base font-medium py-3 px-4 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-orange-50 transition-all"
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Footer: language + CTA */}
                <div className="p-4 border-t border-gray-100 space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1.5 px-1">Select Language</p>
                    <MobileLanguagePicker />
                  </div>
                  <button
                    className="w-full text-white font-semibold py-3 rounded-xl text-sm bg-[#FF7300] hover:bg-[#E06500] transition-colors"
                    onClick={handleSignIn}
                    data-testid="button-mobile-signin"
                  >
                    {t('landing.navbar.login')}
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