import { sanityClient } from "./client";

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  tagline,
  description,
  footerTagline,
  footerDescription
}`;

const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  descriptionParagraphs
}`;

const ABOUT_STORY_QUERY = `*[_type == "aboutPage"][0]{
  storyParagraphs,
  storyClosing,
  michaelParagraphs
}`;

const JAM_PAGE_QUERY = `*[_type == "jamPage"][0]{
  introParagraphs,
  jamParagraphs
}`;

const EVENTS_QUERY = `*[_type == "event"] | order(startDate desc){
  _id,
  title,
  slug,
  subtitle,
  eventType,
  startDate,
  endDate,
  timeString,
  location,
  image,
  description,
  pricing,
  featured,
  soldOut,
  cta
}`;

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  name,
  text,
  image
}`;

export async function fetchSiteSettings() {
  try {
    return await sanityClient.fetch(SITE_SETTINGS_QUERY);
  } catch {
    return null;
  }
}

export async function fetchHomePage() {
  try {
    return await sanityClient.fetch(HOME_PAGE_QUERY);
  } catch {
    return null;
  }
}

export async function fetchAboutPage() {
  try {
    return await sanityClient.fetch(ABOUT_STORY_QUERY);
  } catch {
    return null;
  }
}

export async function fetchJamPage() {
  try {
    return await sanityClient.fetch(JAM_PAGE_QUERY);
  } catch {
    return null;
  }
}

export async function fetchEvents() {
  try {
    return await sanityClient.fetch(EVENTS_QUERY);
  } catch {
    return null;
  }
}

export async function fetchTestimonials() {
  try {
    return await sanityClient.fetch(TESTIMONIALS_QUERY);
  } catch {
    return null;
  }
}
