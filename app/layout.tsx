import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "CraftedSpace | Custom Cabinets & Woodwork · Burlington, ON",
  description:
    "Custom kitchen cabinets, pantries, furniture repair, woodwork, and flat-pack assembly. Serving Burlington, Oakville, Hamilton & the GTA. It's all about your vision and our craft.",
  keywords:
    "custom cabinets Burlington, kitchen cabinets Ontario, furniture assembly GTA, woodwork Burlington, pantry installation, furniture repair",
  openGraph: {
    title: "CraftedSpace | Custom Cabinets & Woodwork",
    description: "It's all about your vision and our craft.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}