import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Možeš koristiti font koji već imaš
import "./globals.css";
import Navbar from "@/components/Navbar"; // Proveri putanju do Navbara
import Footer from "@/components/Footer"; // Proveri putanju do Footera

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metalikum Pro | Lasersko Sečenje Nova Pazova",
  description: "Vrhunska preciznost u obradi metala. Fiber laser sečenje, CNC savijanje i panelne ograde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // scroll-smooth za glatko kretanje, scroll-pt-24 fiksira Navbar preklapanje
    <html lang="sr" className="scroll-smooth scroll-pt-24">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        <Navbar />
        {/* Padding-top ovde osigurava da nijedna stranica ne krene "ispod" navbara */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}