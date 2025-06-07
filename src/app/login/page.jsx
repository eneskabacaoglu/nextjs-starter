'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace("/");
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.replace("/");
    });
    return () => listener.subscription.unsubscribe();
  }, [router]);

  return (
    <div
      className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
