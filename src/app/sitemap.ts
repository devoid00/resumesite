// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://di9on.com";
  const pages = ["", "/contact"];
  const now = new Date().toISOString();

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.6,
  }));
}
