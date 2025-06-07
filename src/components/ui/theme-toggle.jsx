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
        "relative w-12.5 h-7 p-x-0.4 rounded-full cursor-pointer transition-colors duration-300 overflow-hidden flex-shrink-0",
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
            "absolute w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 transform",
            isDark 
              ? "translate-x-0.5 bg-zinc-700" 
              : "translate-x-[26px] bg-white"
          )}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-orange-500 " strokeWidth={1.5} />
          )}
        </div>
      </div>
    </button>
  );
}