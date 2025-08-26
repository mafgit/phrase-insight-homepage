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
const shortTitle = "PhraseInsight";
const description =
  "Seamlessly learn languages for FREE with this extension by expanding vocabulary and understanding contextual meanings while reading on web.";
const url = "https://phrase-insight.vercel.app/";
const author = "Mohammad Abdullah Farooqui";

export const metadata: Metadata = {
  title,
  description,
  publisher: author,
  keywords: [
    "vocabulary",
    "chrome extension",
    "vocabulary builder",
    "language tool",
    "contextual translation",
    "translation",
    "free language learning",
    "word meaning",
    "no tab switching",
    "immersive language learning",
    "extension",
    "language",
    "learn",
    "phrase insight",
    "read",
    "arabic",
  ],
  authors: [
    {
      name: author,
      url: "https://www.linkedin.com/in/muhammad-abdullah-farooqui-24754b27a/",
    },
  ],
  icons: {
    icon: "/icon32.png",
    shortcut: "/icon96.png",
    apple: "/icon180.png",
  },
  verification: {
    google: "xpqu-T356oUwoaUQpb0Ih0lJO9lXlaQPkKXo5Kw-MkY",
  },
  applicationName: shortTitle,
  category: "Education",
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
    siteName: shortTitle,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${url}/og-image.png`,
        alt: shortTitle,
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
