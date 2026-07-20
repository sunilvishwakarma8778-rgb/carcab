import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.carcabbooking.com";
const defaultImage = "https://www.carcabbooking.com/assets/ccb.png";
const defaultImageAlt = "Car Cab Booking Gorakhpur logo";

const seoByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title:
      "Car Cab Booking Gorakhpur | Taxi Service, Cab Booking & Car Rental 24/7",
    description:
      "Book 24/7 taxi service, cab booking and car rental in Gorakhpur for local rides, airport pickup, railway pickup, sightseeing and outstation trips.",
  },
  "/destinations": {
    title:
      "Cab Destinations from Gorakhpur | Nepal, Banaras, Ayodhya & Kushinagar Taxi",
    description:
      "Book outstation cab routes from Gorakhpur to Nepal, Pokhara, Banaras, Ayodhya, Kushinagar, Lucknow, Sonauli and nearby destinations.",
  },
  "/packages": {
    title:
      "Cab Booking Packages Gorakhpur | Sedan, SUV, Innova & Traveller Rental",
    description:
      "Choose affordable cab booking packages in Gorakhpur with sedan, SUV, Innova, Ertiga, Scorpio and tempo traveller options for local and outstation travel.",
  },
  "/contact": {
    title: "Contact Car Cab Booking Gorakhpur | Call for 24/7 Taxi Service",
    description:
      "Contact Car Cab Booking in Gorakhpur for local taxi, airport pickup, railway station pickup, car rental and outstation cab booking.",
  },
};

function upsertMeta(selector: string, create: () => HTMLMetaElement, value: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = create();
    document.head.appendChild(meta);
  }

  meta.content = value;
}

export function Seo() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const seo = seoByPath[location.pathname] ?? seoByPath["/"];
    const canonicalUrl = `${siteUrl}${location.pathname === "/" ? "/" : location.pathname}`;

    document.title = seo.title;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "description";
        return meta;
      },
      seo.description
    );

    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      seo.title
    );

    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      seo.description
    );

    upsertMeta(
      'meta[property="og:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image");
        return meta;
      },
      defaultImage
    );

    upsertMeta(
      'meta[property="og:image:alt"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:image:alt");
        return meta;
      },
      defaultImageAlt
    );

    upsertMeta(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      },
      canonicalUrl
    );

    upsertMeta(
      'meta[name="twitter:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:title";
        return meta;
      },
      seo.title
    );

    upsertMeta(
      'meta[name="twitter:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:description";
        return meta;
      },
      seo.description
    );

    upsertMeta(
      'meta[name="twitter:image"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "twitter:image";
        return meta;
      },
      defaultImage
    );

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [location.pathname]);

  return null;
}
