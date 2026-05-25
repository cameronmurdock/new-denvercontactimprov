import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Denver Contact Improv — Contact Improvisation Classes, Jams & Community in Denver, CO",
    template: "%s :: Denver Contact Improv",
  },
  description:
    "Denver Contact Improv offers beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, Colorado. Join our welcoming movement community rooted in connection, belonging, and embodied presence.",
  keywords: [
    "contact improvisation",
    "contact improv",
    "CI",
    "Denver contact improv",
    "Denver contact improvisation",
    "contact improv Denver",
    "contact improvisation Denver",
    "contact improv classes Denver",
    "contact improv jam Denver",
    "dance classes Denver",
    "movement classes Denver",
    "embodiment practice Denver",
    "community dance Denver",
    "beginner contact improv",
    "Michael Bernal",
    "Art of Living series",
    "Denver dance community",
    "somatic movement Denver",
    "improvisation dance Denver",
    "weight sharing dance",
    "contact dance Denver Colorado",
  ],
  openGraph: {
    title: "Denver Contact Improv — Contact Improvisation Classes & Community",
    description:
      "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, CO. Offering weekly gatherings and immersive experiences rooted in belonging.",
    url: "https://denvercontactimprov.com",
    siteName: "Denver Contact Improv",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denver Contact Improv — Contact Improvisation Classes & Community",
    description:
      "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, CO.",
  },
  alternates: {
    canonical: "https://denvercontactimprov.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Denver Contact Improv",
              description:
                "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, Colorado.",
              url: "https://denvercontactimprov.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.instagram.com/denvercontactimprov",
              ],
              areaServed: {
                "@type": "City",
                name: "Denver",
              },
              keywords:
                "contact improvisation, contact improv, dance classes, jams, workshops, Denver, Colorado",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Denver Contact Improv",
              url: "https://denvercontactimprov.com",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
