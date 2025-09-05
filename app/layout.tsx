import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Svi na vagu - Udruženje za prevenciju gojaznosti | Milka Raičević",
  description: "Udruženje 'Svi na vagu' pruža besplatnu stručnu pomoć, edukaciju o pravilnoj ishrani i merenje telesnog sastava. Osnivač Milka Raičević, nutricionista i aromaterapeut, vodi vas kroz proces usvajanja zdravih životnih navika.",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "gojaznost", 
    "prevencija gojaznosti", 
    "pravilna ishrana", 
    "nutricionista", 
    "Milka Raičević", 
    "merenje telesnog sastava", 
    "zdrave životne navike", 
    "aromatoterapija", 
    "edukacija o zdravlju", 
    "besplatno savetovanje", 
    "udruženje", 
    "zdravlje", 
    "ishrana", 
    "dijeta"
  ],
  alternates: {
    canonical: "https://www.svinavagu.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={${geistSans.variable}  antialiased text-muted-foreground bg-muted  text-lg md:text-xl}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
