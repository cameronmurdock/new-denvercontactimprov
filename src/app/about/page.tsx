import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/lib/paths";
import { fetchAboutPage } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "About :: Denver Contact Improv",
  description: "About the instructor Michael Bernal",
};

const storyParagraphs = [
  "Michael Bernal discovered the Denver Contact Improv scene at Ape Co Movement School in April 2023, a community already alive, strong, and full of generosity, providing the perfect roots for this practice to take hold. In that space, something he had not yet named began to grow: a sense of belonging that felt both vulnerable and unwavering.",
  "He carried a quiet ache, a yearning for connection that felt true. He sought to create a space where connection was not forced but discovered in the pauses between breaths, in the way bodies listen to one another. At first, it was just one or two people stepping into the unknown together, learning how to move, trust, and simply be.",
  "Contact improvisation quickly became his passion, teaching him things he could not yet fully understand. The joy in those dances was so rich that it sometimes felt more meaningful than long-term relationships he had known. He wanted to learn how to access that aliveness and share it with the world.",
  "After a 10-day Vipassana retreat, Michael returned softly moved, tears welling from the tender aliveness of interdependence and compassion. He carried with him a cultivated attention, a loving awareness of the world, and the quiet equanimity of meeting life as it is. From that experience, the Art of Living series was born, not as a concept, but as a lived invitation to presence, care, and shared humanity.",
  "He walks this path with gratitude, honoring the pioneers of Contact Improvisation, Nancy Stark Smith, Steve Paxton, Nita Little and all who have kept Buddhist (awakening) practices alive. He also deeply thanks his personal teachers and bows to the seen and unseen forces that continue to guide and inspire him.",
  "Through Contact Improvisation, the circle slowly opened, guided by listening to their own bodies, to each other, and to the quiet rhythms of the room. Week by week, people arrived, bringing their stories, curiosity, and longing to belong.",
  "The Monday Jam emerged through collective effort, co-created by 14 individuals as a shared practice. Today, a devoted group of 10 space holders supports the container, holding the rhythm and unfolding of each jam. From a small offering, a home emerged, a place to move, trust, and belong together.",
  "This is the practice! Remembering how to listen, how to trust, and how belonging is not earned, but allowed.",
  "Shaped by many hands, bodies, and stories, imperfect, evolving, and alive that is what makes it authentic.",
  "Step in as you are. Here, you are seen. Here, you belong.",
];

const michaelParagraphs = [
  "Michael Bernal is a movement teacher and lifelong student devoted to the subtle art of living. With over 15 years of study and teaching across the globe and a parallel decade immersed in Buddhist practice specialized in meditation and archetype/parts work. His offering lives at the intersection of Contact Improvisation, somatics, and deep listening.",
  "Rooted in a deep curiosity for how we relate, Michael explores movement through nervous system regulation, relational intelligence, and what he playfully calls \u201Cfelt physics.\u201D His teaching invites people to slow down just enough to notice: to sense, to listen, and to cultivate the quiet but radical capacities of attention and equanimity. The ability to be with what is, even when what is\u2026 isn\u2019t particularly convenient.",
  "Rather than striving to transcend the messiness of life, Michael\u2019s approach leans toward it. Through the body, he guides students into a more intimate relationship with discomfort, uncertainty, and the ever-shifting terrain of connection.",
  "Power dynamics become something to explore, not avoid, and where missteps are part of the choreography of life. The practice is not only about moving well, but also about the practice of a life well lived.",
  "Known for his thoughtful, intuitive facilitation, Michael creates spaces that are at once rigorous and human, where curiosity is a compass, humor is encouraged, and belonging is something we practice together.",
  "His teaching has been shaped by a wide range of influential mentors in the field of Contact Improvisation, movement and meditation.",
  "After more than a decade-long lull, Michael played a key role in reigniting the Contact Improvisation scene in Denver, helping to foster a renewed sense of community, inquiry, and shared practice.",
  "He remains, above all, a student continually listening for what the body remembers, and what it might be ready to discover next.",
];

export default async function AboutPage() {
  const aboutData = await fetchAboutPage();
  const story: string[] = aboutData?.storyParagraphs ?? storyParagraphs;
  const bio: string[] = aboutData?.michaelParagraphs ?? michaelParagraphs;

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
                {story.map((paragraph, index) => (
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

      {/* Community hands photo */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image
              src={imagePath("/images/about-hands.jpg")}
              alt="Hands reaching up together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
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
                {bio.map((paragraph) => (
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
