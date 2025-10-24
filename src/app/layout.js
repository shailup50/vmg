import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "VMG",
  description: "VMG Active is a new venture born from VMG Pharmaceuticals Pvt Ltd legacy of trust and quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`  ${poppins.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
