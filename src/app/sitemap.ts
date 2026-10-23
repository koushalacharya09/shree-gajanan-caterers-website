import type { MetadataRoute } from "next";
import { site, locales } from "@/data/site";
import { landings } from "@/data/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/gallery", "/enquire", "/about"];
  const urls: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const p of staticPaths) {
      urls.push({
        url: `${site.domain}/${locale}${p}`,
        lastModified: new Date(),
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1 : 0.7,
      });
    }
    for (const l of landings) {
      urls.push({
        url: `${site.domain}/${locale}/${l.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return urls;
}
