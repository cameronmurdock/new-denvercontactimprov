import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with Denver Contact Improv",
  description:
    "Contact Denver Contact Improv to ask questions, share feedback, or connect with Michael Bernal about Contact Improvisation classes, jams, and events in Denver, Colorado.",
  alternates: {
    canonical: "https://denvercontactimprov.com/contact/",
  },
  openGraph: {
    title: "Contact Us — Denver Contact Improv",
    description:
      "Get in touch with Denver Contact Improv. Ask questions or share feedback about our Contact Improvisation community.",
    url: "https://denvercontactimprov.com/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
