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
  companyName: "RevoAI",
  primaryColor: "#FF7300",
  branding: {
    app_name: "RevoAI",
    app_tagline: "AI voice agents for sales, support, and scheduling automation.",
    social_twitter_url: "https://twitter.com/revoai",
    social_linkedin_url: "https://linkedin.com/company/revoai",
    admin_email: "hello@revoai.co",
    contact_email: "hello@revoai.co",
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
