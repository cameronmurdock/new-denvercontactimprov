import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us :: Denver Contact Improv",
  description:
    "Denver Contact Improv is a growing community of movers exploring connection, presence, and play through the living practice of contact improvisation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-8 text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Denver Contact Improv is a growing community of movers exploring
            connection, presence, and play through the living practice of contact
            improvisation.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-1.jpg"
                alt="Denver Contact Improv community gathering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We gather each Monday at WiggelRuhm to share space, listen
                through the body, and discover what movement reveals about
                relationship through touch, weight, and spontaneous exchange.
                Alongside the jam, we offer classes and series to support deeper
                learning and a richer experience, both on and off the dance
                floor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Open to all bodies and all levels, this is a space to arrive as
                you are whether stepping in for the first time or returning home
                to the practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-warm text-sm tracking-[0.2em] uppercase mb-6 text-center">
            How It Began
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground/80 font-light text-center italic">
              We are a living, breathing community rooted in movement, curiosity,
              and connection &mdash; grown from something simple, tender, and
              deeply human.
            </p>

            <div className="w-16 h-px bg-warm/30 mx-auto my-8" />

            <p>
              Founded by Michael Bernal, carrying a quiet but familiar feeling,
              the sense of not quite belonging, of searching for something real.
              He started with a simple intention: to create a space where people
              could return to themselves, where connection wasn&apos;t forced, but
              discovered. In the beginning, it was just one or two people showing
              up, stepping into the unknown together, listening, moving, learning
              how to be.
            </p>

            <p>
              Through contact improvisation, that small circle began to open,
              rooted in nervous system awareness, relational intelligence, felt
              physics, and deep somatic listening. Week by week, bodies gathered,
              trust grew, and something organic began to take shape. What started
              as a quiet offering slowly became a home, a community that now
              holds hundreds of people, each bringing their own story, their own
              curiosity, their own longing to belong.
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-2.jpg"
                alt="Contact improvisation practice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-3.jpg"
                alt="Community dance session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Continued Story */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            A year ago, that growth became something even more alive. Alongside a
            handful of devoted members, the Monday Jam was born &mdash; not as a
            class, but as a shared practice. A space held by many, where each
            week someone new steps forward to guide, to listen, to offer. It
            became a rhythm, a pulse of the community itself &mdash; an
            unfolding, a remembering, together.
          </p>

          <p
            className="text-xl text-foreground/90 font-light text-center py-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Because this is what we are really practicing: remembering how to
            listen. Remembering how to trust. Remembering that belonging is not
            something we earn, but something we allow.
          </p>

          <p>
            This space is shaped by many hands, many bodies, many stories. It is
            imperfect, evolving, and alive. And somehow, that is what makes it
            real.
          </p>

          <p className="text-center text-warm font-medium text-lg pt-4">
            Come as you are. There is a place for you here.
          </p>
        </div>
      </section>

      {/* Contact Michael */}
      <section className="py-24 px-6 bg-card/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact
          </h2>
          <p className="text-muted-foreground mb-2">Denver Contact Improv</p>
          <p className="text-muted-foreground mb-8">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/the.embodied.man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm hover:text-warm-light transition-colors"
            >
              @the.embodied.man
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm text-background font-medium rounded-full hover:bg-warm-light transition-colors"
          >
            Message Michael
          </Link>
        </div>
      </section>
    </>
  );
}
