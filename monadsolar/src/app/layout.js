import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "../../i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "",
    default: "MonadSolar",
    template: "",
  },
  description: "POWERING THE FUTURE WITH SOLAR ENERGY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
