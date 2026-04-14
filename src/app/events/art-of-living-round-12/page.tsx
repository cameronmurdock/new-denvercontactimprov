import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Art of Living Round 12 :: Denver Contact Improv",
  description:
    "A Four-Week Contact Improvisation Series with Michael Bernal. April 22 - May 13, 2026. Wednesdays 6:15pm - 8:45pm.",
};

const EVENT_TESTIMONIALS = [
  {
    name: "Brooke Alexander",
    image: imagePath("/images/testimonial-brooke.jpg"),
    text: "Michael Bernal is a rare kind of human and facilitator! One who effortlessly invites in a deep return to the body, while also invoking the wisdom of play, connection, and collaboration. In his contact improv series, the Art of Living, Michael holds a space for both physical and emotional contact to be explored. His skill as a teacher lies not only in his deep knowledge of contact improv and embodiment, but also in his capacity to hold a space where vulnerability and joy can co-exist. Every class with Michael feels like a return to what matters: presence, connection, and curiosity. He weaves technical guidance with intuitive emergence, creating openings for both beginners and seasoned movers to explore their own edges with care and courage. This work reminds us that being in true & meaningful contact with one another is one of the most natural and necessary acts of being alive. What emerges in his sessions is more than just movement - it's community, it's trust, it's the art of living!",
  },
  {
    name: "Nick",
    image: imagePath("/images/testimonial-nick.jpg"),
    text: "Michael's Art of Living series has been one of the most unique and special experiences of my life. I am so grateful for the connection, awareness, joy, laughter, and tears I have found here, and for the beautiful souls who co-create this truly magical and supportive space!",
  },
  {
    name: "Ashley Stenger",
    image: imagePath("/images/testimonial-ashley.jpg"),
    text: "I have been in the dance world for many years, but just recently got introduced to contact improv. I was so nervous my first class, but the community and Michael made me feel so welcome. Emotions are talked about, there is support in every class if needed, and autonomy is first priority. I was pleasantly surprised at how I was able to do \"edgy\" things for the first time in a while, like contact dancing with a partner. Most of my dance experience is solo, in community, but not partners. I have explored new edges of creativity, trust, surrender, and some pretty cool things my body can do, even more cool with the help from others!\nI highly recommend signing up for and being in the same room as Michael, such a special and beautifully grounded facilitator in a space that can be so ungrounding and intimidating",
  },
  {
    name: "Gabrielle Hillis",
    image: imagePath("/images/testimonial-gabrielle.jpg"),
    text: "For me, what is so enthralling and addictive about Michael's CI series is that they feel like laboratory spaces—places where we get to be true students of this sport, students of this art form. I was a highly competitive athlete for most of my life, and when I retired, I experienced an identity and purpose crisis. I deeply missed the mind-body connection required to excel in sport. Michael's classes have become that place for me again. I feel nourished, accomplished, fulfilled, and grounded when I am a student of contact improv, a student of my own body and mind, and a student of others. It is a brilliant and safe space curated for curiosity—where questions are welcomed, experiments unfold, and new concepts are continuously uncovered. Thank you, thank you, thank you for creating and holding this recurring space where mind meets body and body meets mind and we all learn together!",
  },
  {
    name: "Karina Okoren",
    image: imagePath("/images/testimonial-karina.jpg"),
    text: "Hello! Just wanted to get on and share about my experience in the CI series with Michael. I'm a dance teacher and dancer and was amazed by Michael's wealth of knowledge paired with passion and kindness. It is rare in the dance community to find such a great blend of freedom and structure in a class. His series was seriously a highlight of my year last year and recommend it anyone and everyone! The community is so welcoming and warm and truly a no pressure learning environment where it feels safe and fun. I felt like it was a dose of therapy each week and practice life principles in a physical and relational way. Truly recommend!!!!\nCan't wait to do it again!!",
  },
] as const;

export default function EventPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative aspect-[21/9] max-h-[500px] w-full">
          <Image
            src={imagePath("/images/event-banner.jpg")}
            alt="Art of Living Round 12"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
      </section>

      {/* Event Info */}
      <section className="px-6 pb-16 -mt-24 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <p className="text-warm text-sm tracking-[0.2em] uppercase mb-4">
              Upcoming Series
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Art of Living Round 12
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A Four-Week Contact Improvisation Series with Michael Bernal
            </p>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Dates
                </p>
                <p className="text-sm font-medium text-foreground">
                  April 22 &ndash; May 13, 2026
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Time
                </p>
                <p className="text-sm font-medium text-foreground">
                  Wednesdays 6:15pm &ndash; 8:45pm
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-sm font-medium text-foreground">
                  125 South Sherman Street
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

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                In this series we will utilize the interplay between solo &
                partner (ensemble) practices & games. Learning to self and
                co-regulate our nervous systems. Growing trust, listening & care
                for ourselves & each other. We will experience how to thrive
                with the inevitable hardships of life. Learn the art of consent.
                Cultivate our attention & equanimity. Enhance our social &
                physical interactions for genuine heartfelt connections. We will
                do this through the lens of contact improvisation via felt
                physics, relational intelligence & somatic self-observation. This
                will allow you to break habit patterns that no longer serve you.
                Allow a sense of belonging (interbeing). Cultivate confidence in
                your body&apos;s capacity to move & improvise. Create a practice
                that enriches your life & helps you develop your mind-body
                capacity for true empowerment & freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              <p className="text-3xl font-bold text-foreground mb-1">$222</p>
              <p className="text-xs text-muted-foreground">
                First 5 to register
              </p>
            </div>

            <div className="p-6 border border-warm/30 rounded-2xl bg-card ring-1 ring-warm/20">
              <p className="text-sm text-warm mb-1">Regular Registration</p>
              <p className="text-3xl font-bold text-foreground mb-1">$333</p>
              <p className="text-xs text-muted-foreground">Open enrollment</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
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
            <p className="text-xs">
              Registration may be transferred, no refunds.
            </p>
          </div>

          {/* Registration Method */}
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
            <div className="relative w-64 mx-auto aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={imagePath("/images/venmo-qr.jpg")}
                alt="Venmo QR code for Michael Bernal"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Testimonials */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-16 text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {EVENT_TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 bg-card border border-border/30 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-warm/20">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <p className="text-sm font-semibold text-warm">{t.name}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flyer */}
      <section className="py-16 px-6 bg-card/30">
        <div className="mx-auto max-w-md">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imagePath("/images/art-of-living-flyer.jpg")}
              alt="Art of Living Round 11 flyer"
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
