"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className={cn(
        "relative w-14 h-8 rounded-full cursor-pointer transition-colors duration-300 overflow-hidden",
        isDark 
          ? "bg-zinc-800 border border-zinc-700" 
          : "bg-gray-200 border border-gray-300",
        className
      )}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-full h-full flex items-center">
        <div 
          className={cn(
            "absolute w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 transform",
            isDark 
              ? "translate-x-1 bg-zinc-700" 
              : "translate-x-7 bg-white"
          )}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </button>
  );
}