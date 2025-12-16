import { Inter, Sora, Signika_Negative } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { i } from "framer-motion/client";

// Load Signika Negative
const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-signika",
});

// Other fonts (if you still want them available)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: "Orbitra",
  description: "Luxury Tech Innovation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/dltauawkh/image/upload/f_auto,q_auto/v1756402969/OrbitraIcon_kkjmz0.png"
        />
        {/* You can also add other meta tags here if needed */}
      </head>
      <body
        className={`
          ${signika.variable} 
          ${inter.variable} 
          ${sora.variable} 
          relative
        `}
      >
        {/* GLOBAL BACKGROUND SVG */}
        <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* GRID LINES */}
            <g stroke="rgba(0,255,255,0.07)" strokeWidth="0.9">
              {[...Array(21)].map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />
              ))}

              {[...Array(21)].map((_, i) => (
                <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="1000" />
              ))}
            </g>

            {/* DOTS */}
            <g fill="rgba(0,255,255,0.18)">
              {[...Array(21)].map((_, row) =>
                [...Array(21)].map((_, col) => (
                  <circle
                    key={`dot-${row}-${col}`}
                    cx={col * 50}
                    cy={row * 50}
                    r="1.6"
                  />
                ))
              )}
            </g>
          </svg>
        </div>

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
