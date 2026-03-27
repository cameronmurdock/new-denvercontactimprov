import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentorship :: Denver Contact Improv",
  description:
    "Personalized mentorship in Contact Improvisation with Michael Bernal. Embody the art, refine your teaching, and grow through real-world guidance and support.",
};

const included = [
  "3 hours per week for 6 weeks of in-person mentorship with room to extend.",
  "A complimentary place in an ongoing series to observe and learn in real class settings.",
  "Daily support via WhatsApp voice notes for questions, feedback, and integration.",
  "Curated exercises, lesson structures, and guidance for developing your teaching voice.",
] as const;

const forWho = [
  "Dancers and movers ready to deepen their practice",
  "Aspiring or current teachers who want more confidence and clarity",
  "Anyone seeking direct, personalized guidance in Contact Improvisation",
] as const;

export default function MentorPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(170,108,69,0.22),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
              1:1 Mentorship
            </p>
            <h1
              className="text-4xl font-bold text-foreground md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The art of sharing Contact Improvisation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A deeply personalized teacher-training experience with Michael
              Bernal for movers who want to embody the practice more fully and
              learn how to share it with others.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-warm px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-warm-light"
              >
                Inquire now
              </Link>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-warm/50 hover:text-warm"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/50">
            <Image
              src="/images/mentorship.jpg"
              alt="Michael Bernal mentorship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border/50 bg-card p-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-warm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-warm/25 bg-card/70 p-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Who it&apos;s for
            </h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-warm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Sliding scale pricing is available. Reach out via text at{" "}
              {contactInfo.textNumber} or on Instagram to start the
              conversation.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
