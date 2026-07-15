import type { Metadata } from "next";
import { AuthSplitPage } from "@/components/Landing/AuthSplitPage";

export const metadata: Metadata = {
  title: { absolute: "Signup — RevoAI" },
  description: "Create your RevoAI account and start building AI voice agents.",
  alternates: { canonical: "https://revoai.co/signup" },
};

export default function SignupPage() {
  return (
    <>
      <AuthSplitPage mode="signup" />
    </>
  );
}
