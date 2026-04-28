import type { Metadata } from "next";
import { DM_Sans as DMSans } from "next/font/google";
import "./globals.css";

const dmSans = DMSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

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
      <body className={`${dmSans.className} bg-background text-white font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
