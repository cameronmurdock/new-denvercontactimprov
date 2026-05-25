import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Contact Improvisation",
  description:
    "Frequently asked questions about Contact Improvisation, Denver Contact Improv classes, jams, and community events. What to wear, how to get started, and more.",
  alternates: {
    canonical: "https://denvercontactimprov.com/faq/",
  },
  openGraph: {
    title: "FAQ — Denver Contact Improv",
    description:
      "Frequently asked questions about Contact Improvisation classes, jams, and community events in Denver.",
    url: "https://denvercontactimprov.com/faq/",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is a Contact Improvisation Jam?",
    answer:
      "Some people dance continuously, others rest, observe, or move in and out of the space. Jams can include silence, live music, guided scores, and community connection.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable clothing you can move freely in. Long sleeves and pants are often recommended to support sliding and skin comfort while dancing.",
  },
  {
    question: "Is Contact Improvisation safe?",
    answer:
      "We strive to create a culture of consent, listening, communication, and care. Participants are always encouraged to move at their own pace, honor boundaries, and prioritize personal and collective safety.",
  },
  {
    question: "Is Contact Improv only for dancers?",
    answer:
      "Not at all. Many people come to Contact Improvisation for community, creativity, healing, embodiment, play, emotional expression, or curiosity, not because they identify as dancers.",
  },
  {
    question: "Where are your classes located?",
    answer:
      "Denver Contact Improv offers classes, jams, workshops, and community events in Denver, Colorado. Check our events page for current locations and upcoming offerings.",
  },
  {
    question: "Can beginners attend jams?",
    answer:
      "Yes. Beginners are welcome at both classes and jams. Taking a class or series beforehand can help people feel more comfortable entering the practice.",
  },
  {
    question: "What are the benefits of Contact Improvisation?",
    answer:
      "People often experience increased body awareness, creativity, confidence, emotional presence, communication skills, playfulness, and a deeper sense of connection to themselves and others.",
  },
  {
    question: "How do I get started?",
    answer:
      "The best way to begin is by attending a beginner-friendly series which you can find in the events page. You can also explore our blog and introductory resources to learn more about the practice.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            FAQ
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about Contact Improvisation and Denver
            Contact Improv.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.75rem] border border-border/50 bg-card/70 p-6"
            >
              <h2
                className="text-xl font-bold text-foreground md:text-2xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.question}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
