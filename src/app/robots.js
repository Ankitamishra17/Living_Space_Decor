export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://living-space-decor.vercel.app/sitemap.xml",
  };
}