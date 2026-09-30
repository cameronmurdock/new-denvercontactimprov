import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page does not exist. Find Contact Improvisation classes, jams, and events in Denver from the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-foreground md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          This page has moved on
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The page you were looking for isn&apos;t here. The classes, jams, and
          community are.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/events"
            className="rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
          >
            Explore Events
          </Link>
          <Link
            href="/"
            className="rounded-full border border-warm/50 px-8 py-3.5 font-medium text-warm transition-all hover:bg-warm hover:text-background"
          >
            Back to the homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
