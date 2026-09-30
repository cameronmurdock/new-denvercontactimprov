import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { sharedOpenGraph } from "@/lib/metadata";
import {
  SITE_URL,
  SOCIAL_IMAGE_PATH,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
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
  // Absolute base for canonical and og URLs emitted by Next.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Denver Contact Improv — Contact Improvisation Dance Classes, Jams & Community in Denver, CO",
    template: "%s :: Denver Contact Improv",
  },
  description:
    "Denver Contact Improv offers beginner-friendly Contact Improvisation (contact improv dance) classes, jams, workshops, and community events in Denver, Colorado. Join a welcoming movement community rooted in connection, belonging, and embodied presence.",
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
    ...sharedOpenGraph,
    title: "Denver Contact Improv — Contact Improvisation Classes & Community",
    description:
      "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, CO. Offering weekly gatherings and immersive experiences rooted in belonging.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    images: [SOCIAL_IMAGE_PATH],
    title: "Denver Contact Improv — Contact Improvisation Classes & Community",
    description:
      "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, CO.",
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
