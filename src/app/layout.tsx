import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BrandingProvider } from "@/components/BrandingProvider";
import I18nProvider from "@/components/I18nProvider";
import QueryProvider from "@/components/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Diploy — AI-Powered Voice Agent Platform",
    template: "%s | Diploy",
  },
  description:
    "Automate sales, support, and scheduling with intelligent AI voice agents that sound human. Trusted by 500+ businesses.",
  keywords: ["AI voice agent", "sales automation", "customer support AI", "appointment scheduling"],
  authors: [{ name: "Diploy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://diploy.in",
    siteName: "Diploy",
    title: "Diploy — AI-Powered Voice Agent Platform",
    description: "Automate sales, support, and scheduling with intelligent AI voice agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diploy — AI-Powered Voice Agent Platform",
    description: "Automate sales, support, and scheduling with intelligent AI voice agents.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <QueryProvider>
          <I18nProvider>
            <BrandingProvider>
              {children}
            </BrandingProvider>
          </I18nProvider>
        </QueryProvider>
      </body>
    </html>
  );
}