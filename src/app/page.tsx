import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/testimonials";
import { contactInfo } from "@/lib/site-data";
import { imagePath } from "@/lib/paths";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={imagePath("/images/hero-main.jpg")}
            alt="Denver Contact Improv community dancing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <div className="mb-6 animate-fade-in">
            <Link
              href="/events/art-of-living-round-12"
              className="inline-flex max-w-full items-center justify-center rounded-full border border-warm-dark/50 bg-warm-dark px-6 py-3 text-sm font-semibold text-background shadow-[0_16px_40px_rgba(58,37,24,0.28)] transition-all hover:-translate-y-0.5 hover:bg-warm"
            >
              Join us for our next series: Art of Living Round 12
            </Link>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 animate-fade-up"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-foreground">DENVER</span>
          </h1>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-light text-warm mb-8 animate-fade-up"
            style={{
              fontFamily: "var(--font-playfair)",
              animationDelay: "0.1s",
            }}
          >
            Contact Improv
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Beginner-friendly Contact Improvisation classes, weekly jam, and a
            welcoming dance community in Denver, CO.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/events"
              className="px-8 py-3.5 bg-warm text-background font-medium rounded-full hover:bg-warm-light transition-colors"
            >
              Explore Events
            </Link>
            <Link
              href="/jam"
              className="px-8 py-3.5 border border-border/50 text-foreground font-medium rounded-full hover:border-warm/50 hover:text-warm transition-colors"
            >
              Monday Jam
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Through shared movement and physical listening, we explore adaptive
            ways of being in relationship with uncertainty. Contact
            Improvisation offers us a space to practice creative responsiveness,
            collaboration, and embodied resilience in a world that is constantly
            shifting.
          </p>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-24 px-6 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={imagePath("/images/featured-jam.jpg")}
                alt="The Art of Living contact improvisation series"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div>
              <p className="text-warm text-sm tracking-[0.2em] uppercase mb-4">
                Featured Series
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Art of Living
              </h2>
              <h3 className="text-lg text-muted-foreground mb-4">
                Contact Improvisation Series
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Come as you are and enter a space where movement becomes a
                doorway into trust, connection, and belonging. Through contact
                improvisation, we&apos;ll learn to listen, softly and honestly
                to our bodies, our nervous systems, and each other, rooted in
                care and consent. Together we&apos;ll unwind old patterns, grow
                confidence, and rediscover the freedom to move, relate, and be
                fully alive.
              </p>
              <Link
                href="/events/art-of-living-round-12"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-warm text-background font-medium rounded-full hover:bg-warm-light transition-colors"
              >
                Reserve Your Spot
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8H13M9 4L13 8L9 12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Jam */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/50 bg-card/60 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-warm text-sm tracking-[0.25em] uppercase mb-4">
                Weekly Practice
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Monday Jam at {contactInfo.locationName}
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Every Monday from 6:00 to 8:00 PM we gather for a community-led
                jam rooted in listening, consent, and playful rigor. If
                you&apos;re new, start with the jam page and community guidelines
                before stepping in.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/jam"
                className="rounded-[1.5rem] border border-warm/20 bg-background/60 p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-warm">
                  Jam
                </p>
                <p className="mt-3 text-xl font-semibold text-foreground">
                  Logistics, expectations, and what a CI jam is.
                </p>
              </Link>
              <Link
                href="/guidelines"
                className="rounded-[1.5rem] border border-border/50 bg-background/60 p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-warm">
                  Guidelines
                </p>
                <p className="mt-3 text-xl font-semibold text-foreground">
                  Required reading before attending the Monday jam.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Mentorship */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-warm/60 text-sm tracking-[0.3em] uppercase mb-4">
                The Practice of
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2 text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                EMBODIED LISTENING
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mentorship with Michael Bernal
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Deepen your practice through one-on-one guidance. Michael offers
                personalized mentorship for those seeking to explore the depths
                of contact improvisation, somatic awareness, and relational
                intelligence.
              </p>
              <Link
                href="/mentor"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-warm/50 text-warm font-medium rounded-full hover:bg-warm hover:text-background transition-all"
              >
                Explore Mentorship
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src={imagePath("/images/mentorship.jpg")}
                alt="Michael Bernal mentorship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
