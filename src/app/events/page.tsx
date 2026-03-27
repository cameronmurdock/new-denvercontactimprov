import type { Metadata } from "next";
import Link from "next/link";
import { upcomingEvents } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Events :: Denver Contact Improv",
  description:
    "Upcoming classes, workshops, jams, and immersive offerings from Denver Contact Improv.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(170,108,69,0.22),_transparent_48%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Events
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Weekly practice, immersive series, and community gatherings.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore current classes, workshops, and community gatherings in the
            Denver Contact Improv orbit.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article
              key={event.slug}
              className={`rounded-[2rem] border p-8 ${
                event.featured
                  ? "border-warm/30 bg-card shadow-[0_24px_80px_rgba(58,37,24,0.08)]"
                  : "border-border/60 bg-card/60"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-warm/80">
                {event.featured ? "Featured" : "Community Offering"}
              </p>
              <h2
                className="mt-4 text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {event.title}
              </h2>
              <p className="mt-2 text-lg text-foreground/75">{event.subtitle}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {event.dates}
              </p>
              <p className="mt-2 text-muted-foreground">{event.schedule}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              <Link
                href={`/events/${event.slug}`}
                className="mt-8 inline-flex rounded-full bg-warm px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-warm-light"
              >
                {event.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
