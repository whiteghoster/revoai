// @ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useBranding } from "@/components/BrandingProvider";
import { useToast } from "@/hooks/use-toast";

// Simple custom SVG icons matching the minimalist presentation
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AtIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  const brandingConfig = useBranding();
  const branding = brandingConfig.branding;
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our latest updates and tips.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#fdf5ed] text-[#4a4a4a] font-sans antialiased" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Columns Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          
          {/* Brand Presentation Column */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#2d2d2d] tracking-tight">
              {branding.app_name || "RevAI"}
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed max-w-xs font-normal">
              {branding.app_tagline || "Deploy AI calling agents that qualify leads, sync with your CRM, and close deals. All with built-in lead intelligence."}
            </p>
            {/* Round Minimal Social Indicators */}
            <div className="flex gap-2.5 pt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-[#f3e9df] hover:bg-[#ebdcd0] flex items-center justify-center text-[#555] transition-colors">
                <GlobeIcon className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-[#f3e9df] hover:bg-[#ebdcd0] flex items-center justify-center text-[#555] transition-colors">
                <AtIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links Column */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#7a7a7a]">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#555555] hover:text-black transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links Column */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#7a7a7a]">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#555555] hover:text-black transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Stacked Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#7a7a7a]">Contact</h3>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li>
                  <a href={`mailto:${branding.admin_email || "support@revai.co"}`} className="flex items-center gap-2 hover:text-black transition-colors font-medium">
                    <Mail className="h-4 w-4 stroke-[1.75]" />
                    {branding.admin_email || "support@revai.co"}
                  </a>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <MapPin className="h-4 w-4 stroke-[1.75]" />
                  <span>{branding.app_location || "San Francisco, USA"}</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription Block */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2.5 pt-2">
              <p className="text-[11px] font-bold text-[#2d2d2d]">Subscribe to our newsletter</p>
              <div className="flex max-w-xs relative items-center">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 pl-4 pr-12 text-sm bg-[#ebdcd0]/40 border border-transparent rounded-lg focus:outline-none focus:bg-[#ebdcd0]/60 placeholder-[#8a827b] text-black"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 bg-[#ff8800] hover:bg-[#e67a00] text-white rounded-md transition-colors flex items-center justify-center"
                  aria-label="Submit newsletter"
                >
                  <svg className="h-4 w-4 fill-current transform rotate-[-30deg]" viewBox="0 0 24 24">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Flat Bottom Strip Info */}
        <div className="py-8 border-t border-[#ebdcd0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#7a7a7a]">
          <p>© {new Date().getFullYear()} {branding.app_name || "RevAI"}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-black transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;