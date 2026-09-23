import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Astra Concierge Philippines | Your Team on the Ground",
    template: "%s | Astra Concierge Philippines",
  },
  description:
    "Professional local concierge and execution service in the Philippines. Traveling, investing, doing business, or relocating—tell Astra what you need. We'll handle the local part.",
  keywords: [
    "Philippines concierge",
    "local assistance Philippines",
    "business concierge Manila",
    "property assistance Philippines",
    "relocation support Philippines",
  ],
  openGraph: {
    title: "Astra Concierge Philippines",
    description: "Your team on the ground in the Philippines.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
