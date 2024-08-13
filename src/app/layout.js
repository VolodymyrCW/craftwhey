import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Inter_Tight } from "next/font/google";
import "./globals.scss";
import { SiteProvider } from "@/context/siteContext";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          pauseOnHover
          theme="colored"
        // transition:Bounce
        />
      </body>
    </html>
  );
}

// src/components/Footer/Footer.jsx
