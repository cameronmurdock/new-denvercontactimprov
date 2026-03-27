"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { contactInfo } from "@/lib/site-data";

function buildMailtoUrl(subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:?${params.toString()}`;
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => message.trim().length > 0, [message]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("opening");

    const details = [
      `Name: ${name || "Anonymous"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message.trim(),
      "",
      `Instagram: ${contactInfo.instagramHandle}`,
      `Text: ${contactInfo.textNumber}`,
    ].join("\n");

    window.location.href = buildMailtoUrl(
      "Denver Contact Improv inquiry",
      details
    );

    window.setTimeout(() => setStatus("idle"), 800);
  }

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
            The previous local form only faked a success state. This version
            opens a real outbound message flow and also exposes direct contact
            options so people are not blocked if mail isn&apos;t configured.
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
              This opens your default mail app with the message prefilled.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-warm/50 focus:ring-2 focus:ring-warm/30"
                  placeholder="Optional"
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
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-warm/50 focus:ring-2 focus:ring-warm/30"
                  placeholder="Questions about the jam, class registration, accessibility, or mentorship..."
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit || status === "opening"}
                className="w-full rounded-xl bg-warm py-3.5 font-medium text-background transition-colors hover:bg-warm-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "opening" ? "Opening mail app..." : "Open message draft"}
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
