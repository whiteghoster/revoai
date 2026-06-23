"use client";
import React, { createContext, useContext } from "react";

interface BrandingData {
  app_name: string;
  app_tagline?: string;
  logo_url_dark?: string;
  logo_url?: string;
  logo_url_light?: string;
  social_twitter_url?: string;
  social_linkedin_url?: string;
  social_github_url?: string;
  admin_email?: string;
  contact_email?: string;
  contact_phone?: string;
  app_location?: string;
  favicon_url?: string;
}

interface BrandingConfig {
  companyName: string;
  logoUrl?: string;
  primaryColor?: string;
  branding: BrandingData;
}

const defaultBranding: BrandingConfig = {
  companyName: "Diploy",
  branding: {
    app_name: "Diploy",
    app_tagline: "AI-Powered Voice Agents for Modern Businesses",
    social_twitter_url: "https://twitter.com/diploy",
    social_linkedin_url: "https://linkedin.com/company/diploy",
    admin_email: "hello@diploy.in",
    app_location: "Bengaluru, India",
  },
};

const BrandingContext = createContext<BrandingConfig>(defaultBranding);

export function BrandingProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: BrandingConfig;
}) {
  return (
    <BrandingContext.Provider value={config ?? defaultBranding}>
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  return useContext(BrandingContext);
}
