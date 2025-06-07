"use client";

import { useEffect, useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider";

export function ThemeWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering a simple div until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
