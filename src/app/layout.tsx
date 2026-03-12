import type { Metadata } from "next";
import { Alegreya, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velociraptor Events - Premium Animatronic Dinosaur Rentals",
  description: "Bring the Jurassic Experience to your event with our 13ft animatronic Velociraptor dinosaur. Perfect for parties, corporate events, festivals, and more.",
  keywords: "velociraptor, dinosaur, event rental, animatronic, party entertainment",
  icons: {
    icon: "/WhatsApp_Image_2026-03-11_at_10.04.03_PM-removebg-preview.png",
    shortcut: "/WhatsApp_Image_2026-03-11_at_10.04.03_PM-removebg-preview.png",
    apple: "/WhatsApp_Image_2026-03-11_at_10.04.03_PM-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${alegreya.variable} bg-dino-tan text-gray-800 overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
