import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ru">
      <body>
        Navbar
        <main>
        {children}
        </main>
        Footer
      </body>
    </html>
  );
}
