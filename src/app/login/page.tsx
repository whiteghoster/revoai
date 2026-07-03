import { SEOHead } from "@/components/Landing/SEOHead";
import { AuthSplitPage } from "@/components/Landing/AuthSplitPage";

export default function LoginPage() {
  return (
    <>
      <SEOHead title="Login — RevoAI" description="Login to your RevoAI dashboard." canonicalUrl="https://revoai.co/login" />
      <AuthSplitPage mode="login" />
    </>
  );
}
