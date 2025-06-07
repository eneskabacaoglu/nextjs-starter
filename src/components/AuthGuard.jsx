"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
      if (!session) router.replace("/login");
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setLoading(false);
      if (!session) router.replace("/login");
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) return null;
  if (!isAuthenticated) return null;
  return children;
} 