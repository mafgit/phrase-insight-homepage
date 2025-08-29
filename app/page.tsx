import OverviewSection from "@/components/OverviewSection";
import Header from "@/components/Header";
import Script from "next/script";

const extUrl =
  "https://chromewebstore.google.com/detail/jmfekdmpopagjpdnndclpefldgfpgkml?utm_source=item-share-cb?utm_source=landingpage&utm_medium=website&utm_campaign=landing_page";
// const dateModified = new Date().toISOString().slice(0, 10);
const softwareVersion = process.env.NEXT_PUBLIC_EXTENSION_VERSION;
const dateModified = process.env.NEXT_PUBLIC_EXTENSION_DATE_MODIFIED;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PhraseInsight: Expand Vocabulary While Reading",
  alternateName: "PhraseInsight",
  description:
    "A free Chrome extension that transforms how you learn languages online by providing smart context-based translations, word insights, grammar analysis, and real usage examples while reading any web content.",
  url: "https://phraseinsight.vercel.app/",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: extUrl,
  softwareVersion,
  datePublished: "2025-03-22",
  dateModified,
  publisher: {
    "@type": "Person",
    name: "Mohammad Abdullah Farooqui",
    email: "mafishere@gmail.com",
  },
  author: {
    "@type": "Person",
    name: "Mohammad Abdullah Farooqui",
    email: "mafishere@gmail.com",
  },
  featureList: [
    "Smart Context Based Translations",
    "Deep Contextual Analysis",
    "Real Usage Examples",
    "Grammar Breakdowns",
    "Learn While Reading On Web",
    "Immersive Language Learning",
    "No Tab Switching",
    "Build Vocabulary",
    "Multiple AI Models",
    "Multi-language Support",
    "Special Arabic Language Support",
  ],
  requirements: "Chrome Browser",
  installUrl: extUrl,
  applicationSubCategory: "Language Learning Tool",
  keywords: [
    "language learning",
    "vocabulary building",
    "translation",
    "chrome extension",
    "contextual learning",
    "reading comprehension",
    "multilingual",
    "Arabic learning",
    "AI translation",
    "grammar analysis",
    "immersive learning",
    "no tab switching",
  ],
  // inLanguage: ["en", "es", "fr", "de", "ar", "it"],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  isAccessibleForFree: true,
  potentialAction: [
    {
      "@type": "InstallAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: extUrl,
      },
    },
  ],
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does PhraseInsight work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply highlight any word or phrase while reading on any website, then click the button that appears or press Alt+Shift+R to get instant context-based translations, grammar analysis, and usage examples.",
        },
      },
      {
        "@type": "Question",
        name: "Is PhraseInsight free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PhraseInsight is completely free to use. Download it from the Chrome Web Store at no cost.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does PhraseInsight support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PhraseInsight supports multiple languages including English, Spanish, French, German, Italian, Arabic, and more, with special enhanced support for Arabic learning.",
        },
      },
      {
        "@type": "Question",
        name: "What makes PhraseInsight different from other translation tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike basic translation tools, PhraseInsight provides context-based translations that understand the meaning within the story or article you're reading, plus grammar analysis and real usage examples.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div>
        <Header />

        <OverviewSection />
      </div>

      <Script
        id="product-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
