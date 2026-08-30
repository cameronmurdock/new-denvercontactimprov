import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";
import { fetchJamPage } from "@/lib/sanity/queries";

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
  const jamData = await fetchJamPage();
  const intro: string[] = jamData?.introParagraphs ?? introParagraphs;

  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden">
        <Image
          src={imagePath("/images/featured-jam.jpg")}
          alt="Denver Contact Jam group"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,17,12,0.3),rgba(24,17,12,0.7))]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl items-end px-6 pb-16 pt-32">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">
              Every Monday
            </p>
            <h1
              className="text-5xl font-bold md:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Denver Contact Jam
            </h1>
            <p className="mt-5 text-xl text-white/85">Every Monday 6:00 - 8:00 PM</p>
          </div>
        </div>
      </section>

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
