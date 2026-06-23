import { Navbar } from "@/components/Landing/Navbar";
import { ContactSection } from "@/components/Landing/ContactSection";
import { Footer } from "@/components/Landing/Footer";
import { SEOHead } from "@/components/Landing/SEOHead";

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact — Diploy" description="Get in touch with the Diploy team. We are here to help." canonicalUrl="https://diploy.in/contact" />
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
