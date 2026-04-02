import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "The Art of Living: Durango CI Intensive :: Denver Contact Improv",
  description:
    "A Contact Improvisation Intensive with Michael Bernal. April 19, 2026. Sunday 10 am - 6 pm. Smiley Building Studio 208, Durango, CO.",
};

export default function EventPage() {
  return (
    <>
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative aspect-[21/9] max-h-[500px] w-full">
          <Image
            src={imagePath("/images/event-banner.jpg")}
            alt="The Art of Living: Durango CI Intensive"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
      </section>

      <section className="px-6 pb-16 -mt-24 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <p className="text-warm text-sm tracking-[0.2em] uppercase mb-4">
              Workshop
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Art of Living: Durango CI Intensive
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A Contact Improvisation Intensive with Michael Bernal
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Date
                </p>
                <p className="text-sm font-medium text-foreground">
                  April 19, 2026
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Time
                </p>
                <p className="text-sm font-medium text-foreground">
                  Sunday 10 am - 6 pm (1-3 pm break)
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-sm font-medium text-foreground">
                  Smiley Building Studio 208 Durango, CO
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Instructor
                </p>
                <p className="text-sm font-medium text-foreground">
                  Michael Bernal
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                In this intensive we will utilize the interplay between solo
                &amp; partner (ensemble) practices &amp; games. Learning to self
                and co-regulate our nervous systems. Growing trust, listening
                &amp; care for ourselves &amp; each other. We will experience
                how to thrive with the inevitable hardships of life. Learn the
                art of consent. Cultivate our attention &amp; equanimity.
                Enhance our social &amp; physical interactions for genuine
                heartfelt connections. We will do this through the lens of
                contact improvisation via felt physics, relational intelligence
                &amp; somatic self-observation. This will allow you to break
                habit patterns that no longer serve you. Allow a sense of
                belonging (interbeing). Cultivate confidence in your
                body&apos;s capacity to move &amp; improvise. Create a practice
                that enriches your life &amp; helps you develop your mind-body
                capacity for true empowerment &amp; freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30">
        <div className="mx-auto max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Registration
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-6 border border-border/50 rounded-2xl bg-card relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-bl-xl">
                SOLD OUT
              </div>
              <p className="text-sm text-muted-foreground mb-1">Early Bird</p>
              <p className="text-3xl font-bold text-foreground mb-1">$144</p>
              <p className="text-xs text-muted-foreground">
                First 5 to register
              </p>
            </div>

            <div className="p-6 border border-warm/30 rounded-2xl bg-card ring-1 ring-warm/20">
              <p className="text-sm text-warm mb-1">Regular Registration</p>
              <p className="text-3xl font-bold text-foreground mb-1">$222</p>
              <p className="text-xs text-muted-foreground">Open enrollment</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="text-xs">
              * Registration may be transferred, no refunds
            </p>
            <p>
              <span className="text-foreground font-medium">
                Educator Discount Available:
              </span>{" "}
              Special pricing for professional dancers, artists, and teachers.
            </p>
            <p>
              <span className="text-foreground font-medium">
                Sliding Scale Available:
              </span>{" "}
              Our pricing is community-supported. When you pay the full price or
              more, you help make it possible for someone else to attend at a
              deeply discounted rate.
            </p>
            <p className="italic">
              If cost is a barrier, simply ask, and you shall receive! We&apos;re
              happy to offer sliding scale support so everyone who wants to be
              here can join.
            </p>
          </div>

          <div className="mt-10 p-8 bg-card border border-border/50 rounded-2xl text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              To Register
            </h3>
            <p className="text-muted-foreground mb-2">
              Venmo:{" "}
              <span className="text-warm font-medium">
                @Michael-Bernal-333
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
