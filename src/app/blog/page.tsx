import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Articles About Contact Improvisation in Denver",
  description:
    "Explore articles about Contact Improvisation, movement practices, and the Denver Contact Improv community. Guides for beginners and experienced practitioners.",
  alternates: {
    canonical: "https://denvercontactimprov.com/blog/",
  },
  openGraph: {
    title: "Blog — Denver Contact Improv",
    description:
      "Articles about Contact Improvisation, movement practices, and the Denver Contact Improv community.",
    url: "https://denvercontactimprov.com/blog/",
  },
};

const BLOG_POSTS = [
  {
    slug: "what-is-contact-improvisation",
    title:
      "What is Contact Improvisation? A Beginner\u2019s Guide to Contact Improv in Denver",
    excerpt:
      "Contact Improvisation, often called Contact Improv or CI, is a movement practice rooted in listening, touch, improvisation, and shared physical awareness. Rather than memorizing choreography, participants explore spontaneous movement together through weight-sharing, momentum, sensation, and presence.",
  },
] as const;

export default function BlogPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Blog
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From the Practice
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Articles about Contact Improvisation, movement practices, and
            the Denver Contact Improv community.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-[1.75rem] border border-border/50 bg-card/70 p-8 transition-all hover:border-warm/30 hover:shadow-lg"
            >
              <h2
                className="text-2xl font-bold text-foreground md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {post.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-warm">
                Read more
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
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
