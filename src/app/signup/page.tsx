import { SEOHead } from "@/components/Landing/SEOHead";
import { AuthSplitPage } from "@/components/Landing/AuthSplitPage";

export default function SignupPage() {
  return (
    <>
      <SEOHead title="Signup — RevoAI" description="Create your RevoAI account and start building AI voice agents." canonicalUrl="https://revoai.co/signup" />
      <AuthSplitPage mode="signup" />
    </>
  );
}
