import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Authenticated app screens and internal utilities: no unique
        // public content, and letting Google crawl them just wastes crawl
        // budget on pages that render an empty/login-gated shell or a
        // client-side redirect — a likely contributor to Search Console's
        // "excluded"/"redirect" URL classifications for this domain.
        disallow: [
          "/dashboard", "/settings", "/admin", "/api/",
          "/templates", "/upload", "/imprimir", "/history", "/jobs",
          "/integraciones", "/setup", "/preview", "/auth",
        ],
      },
    ],
    sitemap: "https://etiquetar.app/sitemap.xml",
    host: "https://etiquetar.app",
  }
}
