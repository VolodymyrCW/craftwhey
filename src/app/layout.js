import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Inter_Tight } from "next/font/google";
import "./globals.scss";
import { SiteProvider } from "@/context/siteContext";

const interTight = Inter_Tight({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--finterTight",
});

export const metadata = {
  title: "Craft Whey",
  description: "Sport food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={interTight.variable}>
      <body style={{ overflowX: "hidden" }}>
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}

// src/components/Footer/Footer.jsx
