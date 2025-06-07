"use client";

import { useState, useEffect, createContext, useContext } from "react";

// Create the context
export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [theme, setThemeState] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Set the theme on initial load
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    const savedTheme = localStorage.getItem("theme") || defaultTheme;
    setThemeState(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setMounted(true);
  }, [defaultTheme]);

  // Update localStorage and class when theme changes
  const setTheme = (newTheme) => {
    if (typeof window === 'undefined') return;
    
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Don't render anything until we've set the theme on the client
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
