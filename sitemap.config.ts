import { getSortedPosts } from "./src/libs/posts";
import fs from "fs";

async function createSiteMap() {
  const siteUrl = "https://www.sungkyu.site/";
  const { posts } = getSortedPosts({ size: 10, page: 1 });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>${siteUrl}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>
${posts
  .map(
    (post) =>
      `<url><loc>${siteUrl}${post.url}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`
  )
  .join("\n")}
</urlset>`;

  await fs.promises.writeFile("public/sitemap.xml", sitemap, {
    encoding: "utf-8",
  });
}

void createSiteMap();
