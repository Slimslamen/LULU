import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lulusstreetfood.se'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${SITE_URL}/images/lulus-truck.png`,
        `${SITE_URL}/images/HeroLulu.png`,
        `${SITE_URL}/images/truck-assembled.png`,
      ],
    },
    {
      url: `${SITE_URL}/policy`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
