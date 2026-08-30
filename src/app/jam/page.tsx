import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Improv Jam — Weekly Contact Improvisation Jam in Denver",
  description:
    "Join Denver Contact Improv for our weekly Contact Improvisation jam. A shared space for spontaneous movement, weight-sharing, and community connection in Denver, Colorado.",
  alternates: {
    canonical: "https://denvercontactimprov.com/jam/",
  },
  openGraph: {
    title: "Contact Improv Jam — Denver Contact Improv",
    description:
      "Weekly Contact Improvisation jam in Denver. A shared space for spontaneous movement and community connection.",
    url: "https://denvercontactimprov.com/jam/",
  },
};

const introParagraphs = [
  "A contact improvisation jam is a shared space for spontaneous movement, where dancers connect through touch, weight, and momentum. There's no choreography or performance just real-time exploration, where a simple point of contact can evolve into something playful, dynamic, or deeply attentive. It's a practice rooted in listening, presence, and mutual awareness.",
  "Because the form is so open, it also asks for a certain level of skill and sensitivity. Knowing how to share weight safely, how to fall and recover, how to give and receive touch with clarity, and how to read another person's physical cues makes the experience more enjoyable for everyone.",
  "This is why we strongly encourage attending at least a few classes or series before joining a jam. Classes provide a foundation: they introduce the principles of alignment, momentum, and listening through the body, while also creating a space to practice boundaries, consent, and communication.",
  "A jam is also a kind of living laboratory, a space to explore, test, and integrate what you've learned in class. Without the structure of exercises or instruction, you're free to follow your curiosity, discover new possibilities, and deepen your understanding through direct experience.",
  "With that groundwork in place, a jam becomes something truly special! A space where you can relax into the unknown, trust your body and your partners, and discover the joy of movement as a shared, unfolding experience.",
];

export default async function JamPage() {
  const intro: string[] = introParagraphs;

  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2
            className="text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What is a contact improvisation jam?
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
