import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PixlAI — AI Photo Enhancement App',
  description: 'Restore old photos, remove backgrounds, and enhance image quality with AI. Launching on Google Play Store.',
  openGraph: {
    title: 'PixlAI — AI Photo Enhancement App',
    description: 'Restore old photos, remove backgrounds, and enhance image quality with AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased overflow-x-hidden`}>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
