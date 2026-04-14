import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "1st Anniversary Jam :: Denver Contact Improv",
  description:
    "Denver Contact Improv 1st Anniversary Jam. Monday April 27, 2026. 5:30 PM - 8:30 PM. Special guests Matthew & Siri Cavanna. Live music by Skozi.b & Shluke.",
};

export default function EventPage() {
  return (
    <>
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative aspect-[21/9] max-h-[500px] w-full">
          <Image
            src={imagePath("/images/anniversary-jam-flyer.jpg")}
            alt="Denver Contact Improv 1st Anniversary Jam"
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
              Community Event
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              1st Anniversary Jam
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Denver Contact Improv celebrates one year!
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Date
                </p>
                <p className="text-sm font-medium text-foreground">
                  Monday, April 27, 2026
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Time
                </p>
                <p className="text-sm font-medium text-foreground">
                  5:30 PM &ndash; 8:30 PM
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-sm font-medium text-foreground">
                  The Wiggelruhm, 125 South Sherman Street, Denver, CO 80209
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Capacity
                </p>
                <p className="text-sm font-medium text-foreground">
                  Max 40 people
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Special Guests:</span>{" "}
                Matthew &amp; Siri Cavanna from Denver Ecstatic Dance
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Live Music:</span>{" "}
                Skozi.b &amp; Shluke
              </p>
            </div>

            <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
              <p className="text-sm font-medium text-foreground mb-3">Schedule</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground font-medium">5:30 PM &ndash; 6 PM</span> &mdash; Open Reception</p>
                <p><span className="text-foreground font-medium">6 PM &ndash; 7 PM</span> &mdash; Class</p>
                <p><span className="text-foreground font-medium">7 PM &ndash; 8:30 PM</span> &mdash; Open Jam</p>
              </div>
            </div>

            <div className="mt-8 prose prose-invert max-w-none">
              <p className="text-sm font-medium text-foreground mb-2">About The Class</p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;ll begin with a guided warm-up and introduction to Contact
                Improvisation, led by Matthew Cavanna and Siri Cavanna. Drawing
                from decades of experience in somatic movement and CI, the class
                explores touch, weight-sharing, and embodied awareness. Open to
                all levels.
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
            Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-6 border border-warm/30 rounded-2xl bg-card ring-1 ring-warm/20">
              <p className="text-sm text-warm mb-1">Class &amp; Jam</p>
              <p className="text-3xl font-bold text-foreground mb-1">$25</p>
              <p className="text-xs text-muted-foreground">Full evening</p>
            </div>

            <div className="p-6 border border-border/50 rounded-2xl bg-card">
              <p className="text-sm text-muted-foreground mb-1">Jam Only</p>
              <p className="text-3xl font-bold text-foreground mb-1">$15</p>
              <p className="text-xs text-muted-foreground">7 PM &ndash; 8:30 PM</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="italic">
              *No one will be turned away for lack of funds
            </p>
          </div>

          <div className="mt-10 p-8 bg-card border border-border/50 rounded-2xl text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              To Register
            </h3>
            <p className="text-muted-foreground mb-2">
              Venmo:{" "}
              <span className="text-warm font-medium">@JacobByers</span>
            </p>
            <p className="text-muted-foreground mb-2">
              For more info text{" "}
              <a
                href="sms:6025491338"
                className="text-warm hover:text-warm-light transition-colors"
              >
                602-549-1338
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Flyer */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-md">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imagePath("/images/anniversary-jam-flyer.jpg")}
              alt="1st Anniversary Jam flyer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
