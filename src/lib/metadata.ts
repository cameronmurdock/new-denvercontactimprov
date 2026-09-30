import { SITE_NAME, SOCIAL_IMAGE_PATH } from "@/lib/structured-data";

const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

/**
 * The Open Graph fields every page shares. Next replaces a page's `openGraph`
 * wholesale instead of merging it with the layout's, so a page that sets its
 * own title and description must spread this in or it loses its share image.
 */
export const sharedOpenGraph = {
  siteName: SITE_NAME,
  locale: "en_US",
  type: "website" as const,
  images: [
    {
      url: SOCIAL_IMAGE_PATH,
      width: SOCIAL_IMAGE_WIDTH,
      height: SOCIAL_IMAGE_HEIGHT,
      alt: "Contact Improvisation in Denver, Colorado",
    },
  ],
};
