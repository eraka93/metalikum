import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Ovde možeš dodati foldere koje ne želiš na Google-u
    },
    sitemap: 'https://metalikumpro.rs/sitemap.xml',
  }
}