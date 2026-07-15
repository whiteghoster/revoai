// @ts-nocheck
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, User, Building2, ShieldCheck, Sparkles, ChevronLeft } from "lucide-react";
import { useBranding } from "@/components/BrandingProvider";
import { AuthStorage } from "@/lib/auth-storage";
import { ParallaxLayer } from "@/components/Landing/ParallaxLayer";

interface AuthSplitPageProps {
  mode: "login" | "signup";
}

const authImage = "/ai_voice_technology__2f3b67da.jpg";

export function AuthSplitPage({ mode }: AuthSplitPageProps) {
  const router = useRouter();
  const { branding } = useBranding();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    acceptedTerms: false,
  });

  const isLogin = mode === "login";
  const title = isLogin ? "Welcome back" : "Create your account";
  const subtitle = isLogin
    ? "Login to manage your AI voice agents, campaigns, contacts, and call automation flows."
    : "Start building AI voice agents for sales, support, appointments, and customer conversations.";

  const update = (key: string, value: string | boolean) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, company: form.company, email: form.email, password: form.password, acceptedTerms: form.acceptedTerms };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || data.message || "Authentication service is not connected yet.");

      if (isLogin && data.token) {
        AuthStorage.setAuthData(data.token, data.user, data.refreshToken, data.expiresIn);
        window.location.href = data.user?.role === "admin" ? "/admin" : "/app";
        return;
      }

      setMessage(isLogin ? "Login successful." : "Account created successfully. You can login now.");
      if (!isLogin) setTimeout(() => router.push("/login"), 700);
    } catch (error: any) {
      setMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f6ef] text-[#1E1B18]">
      {/* Mobile Back Button */}
      <div className="absolute left-4 top-4 z-50 block lg:hidden">
        <Link href="/" className="inline-flex items-center gap-1.5 rounded-full border border-[#E6E2D8] bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#1E1B18] shadow-sm backdrop-blur-md transition hover:bg-white">
          <ChevronLeft className="h-3.5 w-3.5" />
          Back
        </Link>
      </div>

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side: Dynamic Sidebar Graphic */}
        <aside className="relative hidden min-h-screen overflow-hidden lg:block">
          <ParallaxLayer speed={46} scale={[1.06, 1]} className="absolute inset-0">
            <img src={authImage} alt="AI voice automation dashboard" className="h-screen w-full object-cover" />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E1B18]/70 via-[#1E1B18]/30 to-[#FF7300]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_82%_74%,rgba(164,245,183,0.25),transparent_24%)]" />

          <Link href="/" className="absolute left-8 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="absolute bottom-10 left-10 right-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg rounded-[34px] border border-white/25 bg-white/15 p-7 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-[#A4F5B7]" />
                Premium AI Voice Platform
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white">Scale calls with a modern AI voice workspace.</h1>
              <p className="mt-4 text-sm font-medium leading-relaxed text-white/80">Automate sales, support, reminders, and appointment booking with human-like AI agents.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {["24/7 Calls", "10k+ Req/day", "No-code"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-xs font-black backdrop-blur-md">{item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </aside>

        {/* Right Side: Form */}
        <section className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-12">
          <div className="absolute left-8 top-8 hidden h-24 w-24 rounded-full bg-[#A4F5B7]/40 blur-2xl sm:block" />
          <div className="absolute right-8 bottom-8 hidden h-32 w-32 rounded-full bg-[#FFAA73]/40 blur-2xl sm:block" />

          <div className="relative w-full max-w-md mt-6 lg:mt-0">
            <div className="mb-6 flex justify-center lg:hidden">
              <Link href="/" className="inline-flex items-center gap-3">
                <img src={branding.logo_url_light || branding.logo_url || "/logo.png"} alt={branding.app_name || "RevoAI"} className="h-9 w-auto" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] border border-[#E6E2D8] bg-white/90 p-5 shadow-[0_28px_90px_rgba(30,27,24,0.10)] backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6">
                <span className="inline-flex rounded-full border border-[#FFD4B3] bg-[#FFF0E6] px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#FF7300]">
                  {isLogin ? "Login" : "Signup"}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-[#1E1B18]">{title}</h2>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-[#655E56]">{subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-black text-[#1E1B18]">Full name</span>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C857D] z-10" />
                        <input className="auth-input w-full !pl-12" required placeholder="John Smith" value={form.name} onChange={(e) => update("name", e.target.value)} />
                      </div>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-black text-[#1E1B18]">Company</span>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C857D] z-10" />
                        <input className="auth-input w-full !pl-12" placeholder="Your company" value={form.company} onChange={(e) => update("company", e.target.value)} />
                      </div>
                    </label>
                  </>
                )}

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#1E1B18]">Email address</span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C857D] z-10" />
                    <input className="auth-input w-full !pl-12" type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-black text-[#1E1B18]">Password</span>
                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C857D] z-10" />
                    <input className="auth-input w-full !pl-12 !pr-12" type={showPassword ? "text" : "password"} required placeholder="••••••••" value={form.password} onChange={(e) => update("password", e.target.value)} />
                    <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C857D] hover:text-[#FF7300] z-10" aria-label="Toggle password visibility">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </label>

                <div className="flex items-center justify-between gap-3 text-xs font-bold text-[#655E56]">
                  {isLogin ? (
                    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                      <input type="checkbox" className="h-4 w-4 accent-[#FF7300] rounded border-gray-300" />
                      <span>Remember me</span>
                    </label>
                  ) : (
                    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                      <input type="checkbox" className="h-4 w-4 accent-[#FF7300] rounded border-gray-300" checked={form.acceptedTerms} onChange={(e) => update("acceptedTerms", e.target.checked)} required />
                      <span>I accept terms</span>
                    </label>
                  )}
                  {isLogin && <button type="button" className="text-[#FF7300] hover:text-[#E66500]">Forgot password?</button>}
                </div>

                {message && (
                  <p className="rounded-2xl border border-[#E6E2D8] bg-[#f6f6ef] px-4 py-3 text-xs font-bold text-[#655E56]">{message}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  disabled={isSubmitting}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7300] px-5 py-3.5 text-sm font-black text-white shadow-[0_16px_35px_rgba(255,115,0,0.22)] hover:bg-[#E66500] disabled:opacity-70 transition-colors"
                >
                  {isSubmitting ? "Please wait..." : isLogin ? "Login to dashboard" : "Create account"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>

              <p className="mt-6 text-center text-sm font-semibold text-[#655E56]">
                {isLogin ? "New to RevoAI?" : "Already have an account?"}{" "}
                <Link href={isLogin ? "/signup" : "/login"} className="font-black text-[#FF7300] hover:text-[#E66500]">
                  {isLogin ? "Create account" : "Login"}
                </Link>
              </p>
            </motion.div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-[#655E56]">
              <ShieldCheck className="h-4 w-4 text-[#008A1A]" />
              Secure access with RevoAI brand palette
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthSplitPage;