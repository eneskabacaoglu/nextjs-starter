import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata = {
  title: "Blend - Do it all",
  description: "Blend - Do it all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 100 }}>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
