import { projects } from '#site/content';
import Skills from '@/components/Skills';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProjectCard } from '@/components/ui/projectCard';
import { siteConfig } from '@/config/site';
import { sortProjects } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'CeasorCodes profile | skills | project and collaboration',
};

export default async function AboutPage() {
  const latestProjects = sortProjects(projects).slice(0, 5);
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>CCs</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Frontend Web Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <hr className="my-8" />
      <div>
        <Skills />
      </div>
      <hr className="my-8" />
      <div>
        <h1 className="inline-block pb-4 font-black text-4xl lg:text-5xl">
          Projects
        </h1>
        <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
          <ul className="flex flex-col">
            {latestProjects.map((project) => (
              <li
                key={project.slug}
                className="first:border-t first:border-border"
              >
                <ProjectCard
                  slug={project.slug}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  tags={project.tags}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
