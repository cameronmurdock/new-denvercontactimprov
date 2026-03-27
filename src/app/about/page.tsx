import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About :: Denver Contact Improv",
  description: "About the instructor Michael Bernal",
};

const storyParagraphs = [
  "We are a living, breathing community rooted in movement, curiosity, and connection grown from something simple, tender, and deeply human.",
  "Founded by Michael Bernal, carrying a quiet but familiar feeling, the sense of not quite belonging, of searching for something real. He started with a simple intention: to create a space where people could return to themselves, where connection wasn't forced, but discovered. In the beginning, it was just one or two people showing up, stepping into the unknown together, listening, moving, learning how to be.",
  "Through contact improvisation, that small circle began to open, rooted in nervous system awareness, relational intelligence, felt physics, and deep somatic listening. Week by week, bodies gathered, trust grew, and something organic began to take shape. What started as a quiet offering slowly became a home, a community that now holds hundreds of people, each bringing their own story, their own curiosity, their own longing to belong.",
  "A year ago, that growth became something even more alive. Alongside a handful of devoted members, the Monday Jam was born not as a class, but as a shared practice. A space held by many, where each week someone new steps forward to guide, to listen, to offer. It became a rhythm, a pulse of the community itself an unfolding, a remembering, together.",
  "Because this is what we are really practicing: remembering how to listen. Remembering how to trust. Remembering that belonging is not something we earn, but something we allow.",
  "This space is shaped by many hands, many bodies, many stories. It is imperfect, evolving, and alive. And somehow, that is what makes it real.",
];

const michaelParagraphs = [
  "Michael Bernal is a movement teacher and space holder devoted to the subtle art of living! A path shaped by curiosity, lived experience, and a deep trust in the body's innate intelligence.",
  "His work and interests has taken him across cultures and communities around the world, where he has spent over a decade supporting individuals and groups in reconnecting with their capacity for presence, creativity, and embodied truth.",
  "At the heart of his approach is a simple but powerful orientation: that within each person lives an infinite capacity for love, joy, equanimity, and compassion, waiting to be lived within the finite reality of being human.",
  "A profound heartbreak marked a turning point in his life, initiating a deeply personal journey of transformation. What began as loss became a gateway into a more intimate relationship with himself and a lasting devotion to walking alongside others as they navigate their own thresholds of change.",
  "This experience continues to inform his work, grounding it in humility, compassion, and an unwavering belief in the possibility of feeling true belonging and empowerment.",
  "Michael's teaching lives at the intersection of Contact Improvisation, somatics, and meditation, informed by years of dedicated practice in movement, embodiment, and deep listening.",
  "He also draws from Buddhist studies, IFS, and polyvagal theory as pathways into greater awareness and relational sensitivity.",
  "Known for his intuitive and grounded facilitation, he creates spaces where people are invited to slow down, listen inward, and meet themselves honestly.",
  "His approach does not seek to remove the challenges of life, but to move and be with them. Exploring discomfort, connection, and the intelligence of the nervous system as part of a life fully lived.",
  "He remains, above all, a student, continually listening for what the body remembers, and what it may be ready to discover next.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-warm">
                About
              </p>
              <h1
                className="text-4xl font-bold text-foreground md:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                About Us
              </h1>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Denver Contact Improv
                  </strong>{" "}
                  is a growing community of movers exploring connection,
                  presence, and play through the living practice of contact
                  improvisation.
                </p>
                <p>
                  We gather each Monday at WiggelRuhm to share space, listen
                  through the body, and discover what movement reveals about
                  relationship through touch, weight, and spontaneous exchange.
                  Alongside the jam, we offer classes and series to support
                  deeper learning and a richer experience, both on and off the
                  dance floor.
                </p>
                <p>
                  Open to all bodies and all levels, this is a space to arrive
                  as you are whether stepping in for the first time or returning
                  home to the practice.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
              <Image
                src={imagePath("/images/about-1.jpg")}
                alt="Denver Contact Improv"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-warm text-sm tracking-[0.25em] uppercase">
                Our Story
              </p>
              <div className="space-y-6 leading-relaxed">
                {storyParagraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 4
                        ? "py-2 text-xl font-light text-foreground"
                        : undefined
                    }
                    style={
                      index === 4
                        ? { fontFamily: "var(--font-playfair)" }
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="pt-2 text-lg font-medium text-warm">
                  Come as you are. There is a place for you here.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={imagePath("/images/about-2.jpg")}
                alt="Denver Contact Jam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] order-2 lg:order-1">
              <Image
                src={imagePath("/images/about-3.jpg")}
                alt="Denver Contact Improv Jam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-warm">
                About Michael
              </p>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                {michaelParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm text-muted-foreground">
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/the.embodied.man/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm transition-colors hover:text-warm-light"
                  >
                    the.embodied.man
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
                >
                  Message Denver Contact Improv
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
