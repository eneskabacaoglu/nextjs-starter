import "./globals.css";

export const metadata = {
  title: "Blend - Do it all",
  description: "Blend - Do it all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
