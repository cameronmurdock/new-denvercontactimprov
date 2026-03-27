import type { Metadata } from "next";
import { guidelineSections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Guidelines :: Denver Contact Improv",
  description:
    "Explore the values and guidelines of Denver Contact Improv, including consent, safety, inclusion, and collective care.",
};

export default function GuidelinesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Community Guidelines
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Consent, clarity, and collective care.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The live site treats these guidelines as required reading before
            attending a jam. This page restores that entry point locally and
            keeps the expectations visible and easy to reference.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {guidelineSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-border/50 bg-card/70 p-6"
            >
              <h2
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {section.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
