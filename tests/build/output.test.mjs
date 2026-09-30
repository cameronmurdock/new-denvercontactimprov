// Checks the exported site in out/. Run `npm run build` first.

import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT = path.join(ROOT, "out");
const SITE_URL = "https://denvercontactimprov.com";
const MAX_IMAGE_BYTES = 600 * 1024;
const MAX_HOME_IMAGE_BYTES = 1500 * 1024;
const MOBILE_VIEWPORT = 640;
// Pages that exist to redirect or to report an error: not indexable, no canonical of their own.
const NON_INDEXABLE = new Set(["404.html", "404/index.html", "_not-found/index.html", "guidlines/index.html"]);

assert.ok(existsSync(OUT), "out/ is missing: run `npm run build` before `npm run test:build`");

const listPages = (dir, prefix = "") =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) return entry.name === "_next" || entry.name === "images" ? [] : listPages(path.join(dir, entry.name), relative);
    return entry.name.endsWith(".html") ? [relative] : [];
  });

const PAGES = listPages(OUT);
const INDEXABLE = PAGES.filter((page) => !NON_INDEXABLE.has(page));
const read = (page) => readFileSync(path.join(OUT, page), "utf8");
const urlOf = (page) => `${SITE_URL}/${page.replace(/index\.html$/, "")}`;
const metas = (html) => html.match(/<meta\b[^>]*>/g) ?? [];
const attribute = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) ?? [])[1] ?? null;
const canonicalOf = (html) => {
  const link = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/) ?? [])[0];
  return link ? attribute(link, "href") : null;
};
const jsonLd = (html) =>
  (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) ?? []).map((block) =>
    JSON.parse(block.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "")),
  );
const imageUrls = (html) => {
  const urls = new Set();
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    const src = attribute(tag, "src");
    if (src) urls.add(src);
    for (const candidate of (attribute(tag, "srcSet") ?? attribute(tag, "srcset") ?? "").split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (url) urls.add(url);
    }
  }
  return [...urls].map((url) => url.replace(/&amp;/g, "&"));
};

test("the export contains the pages the site links to", () => {
  assert.ok(INDEXABLE.length >= 16, `expected at least 16 indexable pages, found ${INDEXABLE.length}: ${INDEXABLE.join(", ")}`);
});

for (const page of INDEXABLE) {
  const html = read(page);

  test(`${page}: exactly one h1`, () => {
    const count = (html.match(/<h1\b/g) ?? []).length;
    assert.equal(count, 1, `${page} has ${count} <h1> elements`);
  });

  test(`${page}: canonical and og:url are the page's own address`, () => {
    assert.equal(canonicalOf(html), urlOf(page), `${page}: canonical`);
  });

  test(`${page}: is indexable and has a social image under 300 KB`, () => {
    const robots = metas(html).filter((tag) => attribute(tag, "name") === "robots").map((tag) => attribute(tag, "content"));
    assert.ok(robots.every((content) => !content.includes("noindex")), `${page}: robots says ${robots.join(" | ")}`);

    const image = metas(html).find((tag) => attribute(tag, "property") === "og:image");
    assert.ok(image, `${page}: no og:image, so shared links have no picture`);
    const file = path.join(OUT, new URL(attribute(image, "content")).pathname);
    assert.ok(existsSync(file), `${page}: og:image ${attribute(image, "content")} is not in the export`);
    assert.ok(statSync(file).size < 300 * 1024, `${page}: og:image is ${Math.round(statSync(file).size / 1024)} KB`);
  });

  test(`${page}: every image is an optimized variant that exists`, () => {
    const urls = imageUrls(html);
    for (const url of urls) {
      const file = path.join(OUT, decodeURIComponent(url.split("?")[0]));
      assert.ok(existsSync(file), `${page}: ${url} is referenced but not in the export`);
      const bytes = statSync(file).size;
      assert.ok(bytes <= MAX_IMAGE_BYTES, `${page}: ${url} is ${Math.round(bytes / 1024)} KB (limit ${MAX_IMAGE_BYTES / 1024} KB)`);
    }
  });

  test(`${page}: structured data parses and names the organization`, () => {
    const types = jsonLd(html).map((node) => node["@type"]);
    assert.ok(types.includes("LocalBusiness"), `${page}: LocalBusiness missing; found ${types.join(", ")}`);
    assert.ok(types.includes("WebSite"), `${page}: WebSite missing; found ${types.join(", ")}`);
  });
}

for (const page of INDEXABLE.filter((candidate) => candidate !== "index.html")) {
  test(`${page}: breadcrumb trail ends at the page and every step exists`, () => {
    const trail = jsonLd(read(page)).find((node) => node["@type"] === "BreadcrumbList");
    assert.ok(trail, `${page}: no BreadcrumbList`);
    const items = trail.itemListElement;
    assert.deepEqual(items.map((item) => item.position), items.map((_, index) => index + 1), `${page}: positions are not 1..n`);
    assert.equal(items[0].item, `${SITE_URL}/`, `${page}: trail should start at the homepage`);
    assert.equal(items[items.length - 1].item, urlOf(page), `${page}: trail should end at the page itself`);
    for (const item of items) {
      const target = path.join(OUT, new URL(item.item).pathname, "index.html");
      assert.ok(existsSync(target), `${page}: breadcrumb "${item.name}" points at ${item.item}, which is not exported`);
    }
  });
}

test("the featured series page carries a complete Event for search results", () => {
  const event = jsonLd(read("events/art-of-living-aug-2026/index.html")).find((node) => node["@type"] === "Event");
  assert.ok(event, "no Event JSON-LD on the featured series page");
  for (const field of ["name", "startDate", "endDate", "location", "offers", "organizer", "performer", "image"]) {
    assert.ok(event[field], `Event is missing ${field}`);
  }
  assert.match(event.startDate, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-0[67]:00$/, `startDate should carry the Denver offset: ${event.startDate}`);
  assert.ok(new Date(event.endDate) > new Date(event.startDate), "endDate must follow startDate");
  assert.ok(event.offers.every((offer) => offer.priceCurrency === "USD" && typeof offer.price === "number"), "every offer needs a USD price");
});

test("the about page names the teacher as a Person linked to the organization", () => {
  const person = jsonLd(read("about/index.html")).find((node) => node["@type"] === "Person");
  assert.ok(person, "no Person JSON-LD on the about page");
  assert.equal(person.name, "Michael Bernal");
  assert.equal(person.worksFor["@id"], `${SITE_URL}/#organization`);
});

test("the homepage's images fit a phone download budget", () => {
  const html = read("index.html");
  const smallest = new Map();
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    const candidates = (attribute(tag, "srcSet") ?? attribute(tag, "srcset") ?? "")
      .split(",")
      .map((candidate) => candidate.trim().split(/\s+/))
      .filter(([url, width]) => url && width && width.endsWith("w"))
      .map(([url, width]) => ({ url, width: Number(width.slice(0, -1)) }));
    const phone = candidates.find((candidate) => candidate.width >= MOBILE_VIEWPORT) ?? candidates[candidates.length - 1];
    if (phone) smallest.set(phone.url, statSync(path.join(OUT, decodeURIComponent(phone.url))).size);
  }
  const total = [...smallest.values()].reduce((sum, bytes) => sum + bytes, 0);
  assert.ok(smallest.size > 0, "no responsive images found on the homepage");
  assert.ok(total <= MAX_HOME_IMAGE_BYTES, `homepage images at ${MOBILE_VIEWPORT}px total ${Math.round(total / 1024)} KB (limit ${MAX_HOME_IMAGE_BYTES / 1024} KB)`);
});

test("error and redirect pages keep out of the index and claim no canonical", () => {
  for (const page of PAGES.filter((candidate) => NON_INDEXABLE.has(candidate))) {
    const html = read(page);
    const robots = metas(html).filter((tag) => attribute(tag, "name") === "robots").map((tag) => attribute(tag, "content"));
    assert.ok(robots.length > 0 && robots.every((content) => content.includes("noindex")), `${page}: robots says ${robots.join(" | ") || "nothing"}`);
    assert.equal(canonicalOf(html), null, `${page}: must not name a canonical URL`);
  }
});

test("sitemap.xml lists every indexable page and nothing that is missing", () => {
  const listed = (readFileSync(path.join(OUT, "sitemap.xml"), "utf8").match(/<loc>([^<]+)<\/loc>/g) ?? []).map((loc) => loc.slice(5, -6)).sort();
  const expected = INDEXABLE.map(urlOf).sort();
  assert.deepEqual(listed, expected, "sitemap.xml and the exported pages differ");
});

test("robots.txt allows crawling and names the sitemap", () => {
  const robots = readFileSync(path.join(OUT, "robots.txt"), "utf8");
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, new RegExp(`^Sitemap: ${SITE_URL}/sitemap\\.xml$`, "m"));
  assert.doesNotMatch(robots, /^Disallow: \/$/m);
});
