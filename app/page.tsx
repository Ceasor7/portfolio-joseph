'use client';
import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPosts } from '@/lib/utils';
import Link from 'next/link';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <div>
      <div className="h-[40rem] w-full rounded-md bg-gray-700 dark:bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl text-white bg-clip-text text-transparent  text-center font-bold">
            Hello, I&apos;m Joseph
          </h1>
          <p></p>
          <p className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Dive into a world where each project is a story of passion and every
            skill is a brushstroke on the canvas of professionalism. Explore,
            engage, and be inspired as you wander through the digital corridors
            of my personal portfolio.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-fit'
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
