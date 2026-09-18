import { Inter, Noto_Serif, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "lowfareclick.com | Premium flights and curated travel",
    template: "%s | lowfareclick.com",
  },
  description:
    "Search flights, compare fares, and plan your next journey with premium travel guidance and flexible booking tools.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "lowfareclick.com",
    description: "Premium flights and curated travel experiences.",
    type: "website",
    siteName: "lowfareclick.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "lowfareclick.com",
    description: "Premium flights and curated travel experiences.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable} ${publicSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
