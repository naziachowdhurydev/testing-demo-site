import fs from "fs";
import path from "path";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteData = {
  brand: string;
  nav: NavItem[];
  name: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  photographyNote: string;
  storyTitle: string;
  storyImage: string;
  storyAlt: string;
  storyDescription: string;
  journeyPrompt: string;
  featureCard: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
  };
  gallery: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
  about: any;
  experience: any;
  offerings: any;
  layouts: any;
  inquire: any;
};

export function getSiteData(): SiteData {
  const dataPath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(file) as SiteData;
}
