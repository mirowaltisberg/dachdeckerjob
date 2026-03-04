import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dachdeckerjob.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/jobs/", "/dachdeckerjobs/"],
        disallow: [
          "/api/",
          "/*?*sort=",
          "/*?*type=",
          "/*?*workload=",
          "/*?*remote=",
          "/*?*postedWithinDays=",
          "/*?*offset=",
          "/*?*q=",
          "/*?*loc=",
          "/*?*radiusKm=",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
