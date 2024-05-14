import { posts } from '#site/content';
import { sortPosts } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const latestPosts = sortPosts(posts).slice(0, 5);

  const postUrls = latestPosts.map((post) => ({
    url: `https://ceasorcodes.vercel.app/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: 'https://ceasorcodes.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/project',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/contact',
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
