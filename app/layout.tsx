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
  title: "Svi na vagu - Udru�enje za prevenciju gojaznosti | Milka Raicevic",
  description: "Udru�enje 'Svi na vagu' pru�a besplatnu strucnu pomoc, edukaciju o pravilnoj ishrani i merenje telesnog sastava. Osnivac Milka Raicevic, nutricionista i aromaterapeut, vodi vas kroz proces usvajanja zdravih �ivotnih navika.",
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "gojaznost", 
    "prevencija gojaznosti", 
    "pravilna ishrana", 
    "nutricionista", 
    "Milka Raicevic", 
    "merenje telesnog sastava", 
    "zdrave �ivotne navike", 
    "aromatoterapija", 
    "edukacija o zdravlju", 
    "besplatno savetovanje", 
    "udru�enje", 
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
