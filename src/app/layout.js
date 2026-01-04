import { Inter, Sora, Signika_Negative } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "vyrn"; // Changed from ClientToastProvider
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/dltauawkh/image/upload/f_auto,q_auto/v1756402969/OrbitraIcon_kkjmz0.png"
        />
      </head>
      <body
        className={`${signika.variable} ${inter.variable} ${sora.variable} relative`}
      >
        <ToastProvider
          position="top-right"
          swipeDirection="right"
          maxToasts={5}
          layout="stack"
          showCloseButton={true}
          showProgressBar={true}
          color={true}
          toastOptions={{
            duration: 4000,
            className: "custom-toast",
            style: {
              background: "rgba(15, 23, 42, 0.9)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(94, 234, 212, 0.25)",
              borderRadius: "20px",
              padding: "18px 24px",
              color: "#f8fafc",
              fontFamily: "var(--font-signika)",
              fontWeight: 500,
              fontSize: "15px",
              boxShadow: "0 12px 40px rgba(2, 8, 20, 0.5)",
              maxWidth: "440px",
              minWidth: "340px",
              overflow: "hidden",
            },
            success: {
              className: "toast-success",
              icon: "✨",
            },
            error: {
              className: "toast-error",
              icon: "⚡",
            },
            warning: {
              className: "toast-warning",
              icon: "🔔",
            },
            info: {
              className: "toast-info",
              icon: "💡",
            },
          }}
        >
          {/* GLOBAL BACKGROUND SVG */}
          <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="rgba(0,255,255,0.07)" strokeWidth="0.9">
                {[...Array(21)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 50}
                    x2="1000"
                    y2={i * 50}
                  />
                ))}
                {[...Array(21)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 50}
                    y1="0"
                    x2={i * 50}
                    y2="1000"
                  />
                ))}
              </g>
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
        </ToastProvider>
      </body>
    </html>
  );
}
