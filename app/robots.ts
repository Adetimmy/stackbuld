import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', 'checkout/*'],
    },
    sitemap: 'https://stackbuld-psi.vercel.app/sitemap.xml',
  };
}