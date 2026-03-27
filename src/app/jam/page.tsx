import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Jam :: Denver Contact Improv",
  description: "Join us every Monday for our Denver Contact Improv Jam.",
};

const jamNotes = [
  "A jam is a shared space for spontaneous movement through touch, weight, momentum, and attentive listening.",
  "Because the form is open, a little skill and sensitivity go a long way. We strongly encourage classes or series before diving fully into the jam.",
  "Our Monday Jam is community-led by rotating space holders, keeping the room welcoming, dynamic, and grounded in care.",
] as const;

export default function JamPage() {
  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden">
        <Image
          src="/images/featured-jam.jpg"
          alt="Denver Contact Improv jam"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,19,13,0.35),rgba(27,19,13,0.7))]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl items-end px-6 pb-16 pt-32">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">
              Every Monday
            </p>
            <h1
              className="text-5xl font-bold md:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Denver Contact Improv Jam
            </h1>
            <p className="mt-5 text-xl text-white/80">
              6:00pm - 8:00pm at {contactInfo.locationName}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A living laboratory for skill, trust, and play.
            </h2>
            {jamNotes.map((note) => (
              <p key={note} className="text-lg leading-relaxed text-muted-foreground">
                {note}
              </p>
            ))}
          </div>

          <div className="rounded-[2rem] border border-warm/20 bg-card p-8 shadow-[0_24px_80px_rgba(58,37,24,0.08)]">
            <p className="text-xs uppercase tracking-[0.3em] text-warm">
              Jam Details
            </p>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Location:</span>{" "}
                {contactInfo.addressLine1}, {contactInfo.addressLine2}
              </p>
              <p>
                <span className="font-medium text-foreground">Contribution:</span>{" "}
                $10-$20 suggested, no one turned away for lack of funds.
              </p>
              <p>
                <span className="font-medium text-foreground">Updates:</span>{" "}
                Weekly facilitation details are shared through the community
                channel and on Instagram.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/guidelines"
                className="rounded-full bg-warm px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-warm-light"
              >
                Read guidelines
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-warm/50 hover:text-warm"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
