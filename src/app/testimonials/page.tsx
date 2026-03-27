import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";

const TESTIMONIALS = [
  {
    name: "Brooke Alexander",
    image: imagePath("/images/testimonial-brooke.jpg"),
    text: "Michael Bernal is a rare kind of human and facilitator. Every class feels like a return to what matters: presence, connection, and curiosity.",
  },
  {
    name: "Amy Longe",
    image: imagePath("/images/testimonial-amy.jpg"),
    text: "Michael is extremely present and attentive, creating a safe space to explore CI. I always leave energized and grateful.",
  },
  {
    name: "Gabrielle Hillis",
    image: imagePath("/images/testimonial-gabrielle.jpg"),
    text: "These classes feel like laboratory spaces where curiosity, experimentation, and real learning are welcomed and supported.",
  },
  {
    name: "Ashley Stenger",
    image: imagePath("/images/testimonial-ashley.jpg"),
    text: "I was so nervous my first class, but the community and Michael made me feel welcome, supported, and safe to explore.",
  },
  {
    name: "Karina Okoren",
    image: imagePath("/images/testimonial-karina.jpg"),
    text: "It is rare in the dance community to find such a great blend of freedom and structure in a class. Truly recommend.",
  },
  {
    name: "Matt Koch",
    image: imagePath("/images/testimonial-matt.jpg"),
    text: "Finding Contact Improv through Michael's teaching has made a real impact on my confidence, ease, and daily social life.",
  },
] as const;

export const metadata: Metadata = {
  title: "Testimonials :: Denver Contact Improv",
  description:
    "Read testimonials from dancers and community members sharing their experiences with Denver Contact Improv classes, jams, and events.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Testimonials
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What people are saying.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-border/50 bg-card/70 p-7"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-warm/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-warm">
                  {testimonial.name}
                </p>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
