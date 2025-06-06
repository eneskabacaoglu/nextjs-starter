import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";


export const metadata = {
  title: "Blend - Do it all",
  description: "Blend - Do it all",
};

export default function RootLayout({ children }) {
  // Place ThemeToggle at top right, and connect it to theme switching
  return (
    <html lang="en">
      <body>
        <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 100 }}>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
