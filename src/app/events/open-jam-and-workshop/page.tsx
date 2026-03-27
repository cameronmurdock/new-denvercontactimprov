import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Open Jam & Workshop :: Denver Contact Improv",
  description: "Open jam for play and skill building.",
};

export default function OpenJamAndWorkshopPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Community Offering
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Open Jam & Workshop
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Come jam and practice with us. This route existed on the live site
            but not in the rebuild, so the local events experience had no
            landing page for the community’s most consistent offering.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="rounded-[2rem] border border-border/50 bg-card p-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come jam and practice with us.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Expect a skill-building container followed by open dancing. The
              invitation is simple: arrive, listen, build trust, and let
              curiosity move the practice forward.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you are brand new, start with the jam page and community
              guidelines before attending so you understand the values and flow
              of the room.
            </p>
          </article>

          <aside className="rounded-[2rem] border border-warm/25 bg-card/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-warm">
              Details
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Monday evenings, 6:00pm - 8:00pm</p>
              <p>
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </p>
              <p>$10-$20 suggested donation</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/jam"
                className="rounded-full bg-warm px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-warm-light"
              >
                Jam page
              </Link>
              <Link
                href="/guidelines"
                className="rounded-full border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-warm/50 hover:text-warm"
              >
                Guidelines
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
