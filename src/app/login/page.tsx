import type { Metadata } from "next";
import { AuthSplitPage } from "@/components/Landing/AuthSplitPage";

export const metadata: Metadata = {
  title: { absolute: "Login — RevoAI" },
  description: "Login to your RevoAI dashboard.",
  alternates: { canonical: "https://revoai.co/login" },
};

export default function LoginPage() {
  return (
    <>
      <AuthSplitPage mode="login" />
    </>
  );
}
