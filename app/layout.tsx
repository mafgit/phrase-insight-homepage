import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const title = "PhraseInsight: Expand Vocabulary While Reading";
const description =
  "Seamlessly learn languages for FREE with this extension by expanding vocabulary and understanding contextual meanings while reading on web.";
const extUrl =
  "https://chromewebstore.google.com/detail/jmfekdmpopagjpdnndclpefldgfpgkml?utm_source=item-share-cb";
const url = "http://localhost:3000"; // todo: vercel

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "vocabulary",
    "translation",
    "arabic",
    "extension",
    "language",
    "learn",
    "read",
  ],
  authors: [
    {
      name: "M. Abdullah Farooqui",
      url: "https://www.linkedin.com/in/muhammad-abdullah-farooqui-24754b27a/",
    },
  ],
  icons: {
    icon: "/icon32.png",
    shortcut: "/icon96.png",
    apple: "/icon180.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "PhraseInsight",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${url}/og-image.png`,
        alt: "PhraseInsight",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
