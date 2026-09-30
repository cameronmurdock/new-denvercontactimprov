import imageVariants from "../../image-variants.config.json";
import manifest from "./image-manifest.json";

export const SITE_URL = "https://denvercontactimprov.com";
export const SITE_NAME = "Denver Contact Improv";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const TEACHER_ID = `${SITE_URL}/about/#michael-bernal`;
export const EVENT_TIME_ZONE_OFFSET = "-06:00";
const INSTAGRAM_URL = "https://www.instagram.com/denvercontactimprov";
// The 1200x630 share image the optimizer builds; its source photo if that build was skipped.
export const SOCIAL_IMAGE_PATH: string =
  manifest.socialImage ?? `${imageVariants.publicSourcePrefix}/${imageVariants.openGraph.source}`;

const SCHEMA_CONTEXT = "https://schema.org";
const HOME_CRUMB = { name: "Home", path: "/" } as const;

export type Crumb = {
  name: string;
  /** Site-relative path with its trailing slash, e.g. "/events/". */
  path: string;
};

/** The trail from the homepage to a page. Home is added; pass the rest in order. */
export function breadcrumbList(trail: readonly Crumb[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: [HOME_CRUMB, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export const organizationSchema = {
  "@context": SCHEMA_CONTEXT,
  "@type": "LocalBusiness",
  "@id": ORGANIZATION_ID,
  additionalType: "https://schema.org/DanceGroup",
  name: SITE_NAME,
  alternateName: ["DCI", "Denver Contact Improvisation"],
  description:
    "Beginner-friendly Contact Improvisation (contact improv dance) classes, jams, workshops, and community events in Denver, Colorado.",
  knowsAbout: ["Contact Improvisation", "contact improv", "improvisational dance", "somatic movement", "embodiment practice"],
  url: SITE_URL,
  image: `${SITE_URL}${SOCIAL_IMAGE_PATH}`,
  founder: { "@id": TEACHER_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denver",
    addressRegion: "CO",
    addressCountry: "US",
  },
  sameAs: [INSTAGRAM_URL],
  areaServed: {
    "@type": "City",
    name: "Denver",
  },
  keywords:
    "contact improvisation, contact improv, dance classes, jams, workshops, Denver, Colorado",
} as const;

export const websiteSchema = {
  "@context": SCHEMA_CONTEXT,
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@id": ORGANIZATION_ID },
} as const;

export const teacherSchema = {
  "@context": SCHEMA_CONTEXT,
  "@type": "Person",
  "@id": TEACHER_ID,
  name: "Michael Bernal",
  jobTitle: "Contact Improvisation teacher and facilitator",
  url: `${SITE_URL}/about/`,
  worksFor: { "@id": ORGANIZATION_ID },
  sameAs: [INSTAGRAM_URL],
  knowsAbout: ["Contact Improvisation", "embodied listening", "somatic movement"],
} as const;

export type ScheduledEvent = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** ISO 8601 with the Denver offset, e.g. "2026-09-09T18:15:00-06:00". */
  startDate: string;
  endDate: string;
  venue: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  offers: readonly { name: string; price: number; soldOut: boolean }[];
};

/** A class series as Google's event results expect it. Only events with real dates get this. */
export function eventSchema(event: ScheduledEvent) {
  const url = `${SITE_URL}/events/${event.slug}/`;
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Event",
    "@id": `${url}#event`,
    name: `${event.title}: ${event.subtitle}`,
    description: event.description,
    url,
    image: `${SITE_URL}${SOCIAL_IMAGE_PATH}`,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venue.streetAddress,
        addressLocality: event.venue.addressLocality,
        addressRegion: event.venue.addressRegion,
        postalCode: event.venue.postalCode,
        addressCountry: "US",
      },
    },
    organizer: { "@id": ORGANIZATION_ID },
    performer: { "@id": TEACHER_ID },
    offers: event.offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: "USD",
      url,
      availability: offer.soldOut ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
    })),
  };
}
