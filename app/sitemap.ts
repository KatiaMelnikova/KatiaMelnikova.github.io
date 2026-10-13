import type { MetadataRoute } from "next"
export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
 const slugs = ["", "cv", "teaching", "publications", "projects", "applied-projects", "contacts", "oral-history", "border-anthropology", "heritage-anxiety", "museum-anthropology"]
 return ["", "/en"].flatMap(locale => slugs.map(slug => ({
  url: "https://katiamelnikova.github.io" + locale + "/" + (slug ? slug + "/" : ""),
  changeFrequency: "monthly" as const,
  priority: slug ? 0.7 : 1,
  alternates: { languages: { ru: "https://katiamelnikova.github.io/" + (slug ? slug + "/" : ""), en: "https://katiamelnikova.github.io/en/" + (slug ? slug + "/" : "") } }
 })))
}
