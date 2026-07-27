import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "../index.css";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingButton from "../components/FloatingButton";
import RevealController from "../components/RevealController";

// Self-hosted, optimized fonts (no render-blocking Google request, no layout
// shift). Exposed as CSS variables consumed by the design tokens in index.css.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  title: "GSIA — Global Source Industrial Automation",
  description:
    "Global Source Industrial Automation — electrical control panels, WECON automation hardware, and industrial automation training in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <div className="app">
          <Navbar />
          <RevealController />
          {children}
          <Footer />
          <FloatingButton />
        </div>
      </body>
    </html>
  );
}
