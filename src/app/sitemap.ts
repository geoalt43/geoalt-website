import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

/**
 * SEO Architecture 2026: Sitemap Intent Segments
 */
export async function generateSitemaps() {
  return [
    { id: 'core' },
    { id: 'content' },
    { id: 'legal' },
  ]
}

export default async function sitemap({
  id,
}: {
  id: string
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.geoalt.in'
  const currentDate = new Date()

  switch (id) {
    case 'core':
      return [
        {
          url: baseUrl,
          lastModified: currentDate,
          changeFrequency: 'daily',
          priority: 1.0,
        },
        {
          url: `${baseUrl}/pricing`,
          lastModified: currentDate,
          changeFrequency: 'daily',
          priority: 0.9,
        },
        {
          url: `${baseUrl}/blog`,
          lastModified: currentDate,
          changeFrequency: 'daily',
          priority: 0.9,
        },
      ]

    case 'content':
      const posts = getAllPosts()
      return posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      }))

    case 'legal':
      return [
        {
          url: `${baseUrl}/privacy-policy`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: 0.3,
        },
        {
          url: `${baseUrl}/terms-of-service`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: 0.3,
        },
        {
          url: `${baseUrl}/refund-policy`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: 0.3,
        },
        {
          url: `${baseUrl}/cookie-policy`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: 0.3,
        },
      ]

    default:
      return []
  }
}

