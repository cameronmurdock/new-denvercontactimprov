import Link from "next/link";
import { contactInfo } from "@/lib/site-data";
import { fetchSiteSettings } from "@/lib/sanity/queries";

const DEFAULT_TAGLINE = "Movement. Connection. Community.";
const DEFAULT_DESCRIPTION =
  "Weekly jams, classes, workshops, and mentorship rooted in belonging, resiliency, and embodied presence.";

export async function Footer() {
  const settings = await fetchSiteSettings();
  const tagline = settings?.footerTagline ?? DEFAULT_TAGLINE;
  const description = settings?.footerDescription ?? DEFAULT_DESCRIPTION;
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-xl font-bold text-warm"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Denver Contact Improv
            </Link>
            <p className="text-sm text-muted-foreground">
              {tagline}
            </p>
            <p className="text-sm text-muted-foreground max-w-sm">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-warm">
              Explore
            </p>
            <Link
              href="/jam"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Monday Jam
            </Link>
            <Link
              href="/events"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Events
            </Link>
            <Link
              href="/mentor"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentorship
            </Link>
            <Link
              href="/guidelines"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Guidelines
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-warm">
              Connect
            </p>
            <p className="text-sm text-muted-foreground">
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
            </p>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram {contactInfo.instagramHandle}
            </a>
            <a
              href={`sms:${contactInfo.rawPhone}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Text {contactInfo.textNumber}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Denver Contact Improv. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            website by{" "}
            <a
              href="https://camalot.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm hover:text-warm-light transition-colors"
            >
              Cameron Ely-Murdock
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
