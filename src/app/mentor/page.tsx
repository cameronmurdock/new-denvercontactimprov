import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/site-data";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Mentorship :: Denver Contact Improv",
  description:
    "Personalized mentorship in Contact Improvisation with Michael Bernal. Embody the art, refine your teaching, and grow through real-world guidance and support.",
};

const included = [
  "In-Person Mentorship: 3 hours per week for 6 weeks (18 hours total), with the flexibility to extend—and you're welcome to bring a friend or loved one along.",
  "Real-World Teaching Experience: Receive a complimentary place in my ongoing 5–6 week series, with the opportunity to shadow, observe, and engage in real class settings as part of your learning journey (12 hours)",
  "Ongoing Support: Daily access to me via WhatsApp voice notes for questions, feedback, and real-time guidance",
] as const;

const alsoIncluded = [
  "Foundations & Practice: Deepen your understanding of the core principles and embodied techniques of Contact Improvisation",
  "How to Learn, How to Teach: Explore effective methods for refining your personal practice and developing your unique teaching voice",
  "Teaching Resources: Full access to curated lesson plans, exercises, and weekly session summaries throughout the mentorship.",
] as const;

const forWho = [
  "Dancers and movers ready to expand and refine their practice",
  "Aspiring or current teachers who want to share Contact Improvisation with confidence and clarity",
  "Anyone seeking personalized guidance in developing both skill and teaching artistry",
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
              The Art of sharing Contact Improvisation
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              A 1:1 Mentorship in Teaching CI
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A deeply personalized, immersive teacher training designed to help
              you embody the art of Contact Improvisation and confidently share
              it with others.
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
              src={imagePath("/images/mentorship.jpg")}
              alt="Michael Bernal mentorship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-border/50 bg-card p-8">
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-border/50 bg-card p-8">
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                What else is included
              </h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {alsoIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-warm/25 bg-card/70 p-8">
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Who Is This For?
              </h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {forWho.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-warm" />
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
                Investment
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sliding scale: send a message if interested via text{" "}
                {contactInfo.textNumber} or Instagram{" "}
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm transition-colors hover:text-warm-light"
                >
                  {contactInfo.instagramHandle}
                </a>
              </p>
              <p className="mt-4 text-muted-foreground">
                Payment can be divided into 2 or 3 installments.
              </p>
            </article>
          </div>

          <article className="rounded-[2rem] border border-border/50 bg-card p-8 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              This mentorship is designed to be an intimate, transformative, and
              highly tailored experience! Meeting you exactly where you are and
              supporting your growth as both a practitioner and a teacher.
            </p>
            <p className="mt-4 text-lg font-medium text-warm">
              I look forward to growing together!
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
