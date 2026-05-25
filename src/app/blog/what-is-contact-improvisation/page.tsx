import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What is Contact Improvisation? A Beginner\u2019s Guide to Contact Improv in Denver",
  description:
    "Contact Improvisation, often called Contact Improv or CI, is a movement practice rooted in listening, touch, improvisation, and shared physical awareness. Learn what to expect at classes and jams in Denver, Colorado.",
  alternates: {
    canonical: "https://denvercontactimprov.com/blog/what-is-contact-improvisation/",
  },
  openGraph: {
    title: "What is Contact Improvisation? A Beginner\u2019s Guide",
    description:
      "Contact Improvisation is a movement practice rooted in listening, touch, and shared physical awareness. Learn what to expect at classes and jams in Denver.",
    url: "https://denvercontactimprov.com/blog/what-is-contact-improvisation/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What is Contact Improvisation? A Beginner\u2019s Guide to Contact Improv in Denver",
  description:
    "Contact Improvisation, often called Contact Improv or CI, is a movement practice rooted in listening, touch, improvisation, and shared physical awareness.",
  author: {
    "@type": "Person",
    name: "Michael Bernal",
  },
  publisher: {
    "@type": "Organization",
    name: "Denver Contact Improv",
    url: "https://denvercontactimprov.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://denvercontactimprov.com/blog/what-is-contact-improvisation/",
  },
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-warm hover:text-warm-light transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 8H3M7 4L3 8L7 12" />
            </svg>
            Back to Blog
          </Link>
          <h1
            className="text-3xl font-bold text-foreground md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What is Contact Improvisation? A Beginner&apos;s Guide to Contact
            Improv in Denver
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <article className="mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            If you&apos;ve heard the words &ldquo;Contact Improvisation&rdquo;
            and felt curious, intimidated, inspired, or confused you are not
            alone.
          </p>

          <p>
            Contact Improvisation, often called Contact Improv or CI, is a
            movement practice rooted in listening, touch, improvisation, and
            shared physical awareness. Rather than memorizing choreography,
            participants explore spontaneous movement together through
            weight-sharing, momentum, sensation, and presence.
          </p>

          <p>
            Some people experience it as a dance form. Others experience it as
            meditation, communication, therapy, play, community, or even a way
            of reconnecting to themselves.
          </p>

          <p>
            At Denver Contact Improv, we welcome complete beginners alongside
            longtime practitioners. You do not need dance experience,
            flexibility, or any specific body type to participate.
          </p>

          <h2
            className="text-2xl font-bold text-foreground md:text-3xl pt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Happens in a Contact Improv Class?
          </h2>

          <p>Classes often begin with guided exercises that explore:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>body awareness</li>
            <li>balance</li>
            <li>listening</li>
            <li>touch</li>
            <li>rolling point of contact</li>
            <li>weight-sharing</li>
            <li>consent and communication</li>
            <li>improvisational movement</li>
          </ul>

          <p>
            Rather than trying to &ldquo;perform,&rdquo; the practice invites
            curiosity and presence. Many people are surprised to discover how
            much Contact Improvisation is about listening rather than &ldquo;doing
            it right.&rdquo;
          </p>

          <h2
            className="text-2xl font-bold text-foreground md:text-3xl pt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What is a Contact Improv Jam?
          </h2>

          <p>
            A Contact Improvisation jam is a shared space for spontaneous
            movement rooted in touch, listening, weight-sharing, and presence.
            There&apos;s no choreography or performance, just real-time
            exploration and connection through movement.
          </p>

          <p>
            Because the form is so open, it also requires skill, sensitivity,
            and awareness. Knowing how to share weight safely, communicate
            boundaries, and listen through the body helps create a safer and
            more enjoyable experience for everyone.
          </p>

          <p>
            For this reason, we strongly encourage attending a few classes or a
            series before joining a jam. Classes provide foundational skills in
            alignment, momentum, consent, communication, and embodied listening.
          </p>

          <p>
            A jam then becomes a living laboratory, a space to explore,
            integrate, play, and deepen your practice through direct experience
            with others.
          </p>

          <h2
            className="text-2xl font-bold text-foreground md:text-3xl pt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Is Contact Improvisation Beginner Friendly?
          </h2>

          <p>Yes.</p>

          <p>
            Many people in Denver first discover Contact Improvisation because
            they are searching for:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>authentic community</li>
            <li>embodiment practices</li>
            <li>creativity</li>
            <li>healing</li>
            <li>emotional expression</li>
            <li>nervous system regulation</li>
            <li>movement exploration</li>
            <li>connection outside traditional social structures</li>
          </ul>

          <p>You are welcome exactly as you are.</p>

          <h2
            className="text-2xl font-bold text-foreground md:text-3xl pt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why People Fall in Love with Contact Improv
          </h2>

          <p>
            Contact Improvisation invites something increasingly rare in modern
            life: presence. It asks us to slow down enough to listen. To feel.
            To respond rather than control. To stay connected even in moments of
            uncertainty.
          </p>

          <p>
            For many people, the practice becomes more than dance. It becomes a
            way of relating to life itself.
          </p>

          <h2
            className="text-2xl font-bold text-foreground md:text-3xl pt-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Denver Contact Improv Community
          </h2>

          <p>
            Denver has a growing Contact Improvisation community with classes,
            jams, workshops, and movement gatherings happening throughout the
            city. Whether you are completely new or have years of experience, we
            invite you to explore the practice with us.
          </p>

          <p>
            You can view upcoming classes, jams, and beginner offerings on our{" "}
            <Link
              href="/events"
              className="text-warm hover:text-warm-light transition-colors"
            >
              events page
            </Link>
            .
          </p>
        </article>
      </section>
    </>
  );
}
