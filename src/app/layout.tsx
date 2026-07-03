import type { Metadata } from "next";
import "./globals.css";
import { BrandingProvider } from "@/components/BrandingProvider";
import I18nProvider from "@/components/I18nProvider";
import QueryProvider from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: {
    default: "RevoAI — AI-Powered Voice Agent Platform",
    template: "%s | RevoAI",
  },
  description:
    "Automate sales, support, and scheduling with intelligent AI voice agents that sound human. Trusted by 500+ businesses.",
  keywords: ["AI voice agent", "sales automation", "customer support AI", "appointment scheduling"],
  authors: [{ name: "RevoAI" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://revoai.co",
    siteName: "RevoAI",
    title: "RevoAI — AI-Powered Voice Agent Platform",
    description: "Automate sales, support, and scheduling with intelligent AI voice agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevoAI — AI-Powered Voice Agent Platform",
    description: "Automate sales, support, and scheduling with intelligent AI voice agents.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" suppressHydrationWarning>
        <QueryProvider>
          <I18nProvider>
            <BrandingProvider>{children}</BrandingProvider>
          </I18nProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
