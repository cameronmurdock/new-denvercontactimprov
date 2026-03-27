import { contactInfo } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(170,108,69,0.22),_transparent_52%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Contact
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reach out with questions, feedback, or curiosity.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Send a message directly here, or use the contact options alongside
            the form if you prefer text or Instagram.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/50 bg-card p-8">
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Send a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Messages from this form are sent to Michael by email.
            </p>

            <form
              action="https://formsubmit.co/michaelbernallifecoach@gmail.com"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Denver Contact Improv inquiry"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-warm/50 focus:ring-2 focus:ring-warm/30"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-warm/50 focus:ring-2 focus:ring-warm/30"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-warm/50 focus:ring-2 focus:ring-warm/30"
                  placeholder="Questions about the jam, class registration, accessibility, or mentorship..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-warm py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
              >
                Send message
              </button>
            </form>
          </div>

          <aside className="rounded-[2rem] border border-warm/25 bg-card/70 p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-warm">
              Direct Contact
            </p>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Instagram:</span>{" "}
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm transition-colors hover:text-warm-light"
                >
                  {contactInfo.instagramHandle}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Text:</span>{" "}
                <a
                  href={`sms:${contactInfo.rawPhone}`}
                  className="text-warm transition-colors hover:text-warm-light"
                >
                  {contactInfo.textNumber}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Venmo:</span>{" "}
                {contactInfo.venmo}
              </p>
              <p>
                <span className="font-medium text-foreground">Location:</span>{" "}
                {contactInfo.addressLine1}, {contactInfo.addressLine2}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
