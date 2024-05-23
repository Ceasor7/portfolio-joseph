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
            UI/UX Web Designer with full-stack development skills
          </p>
        </div>
        <p className="text-muted-foreground text-center text-lg py-4">
          My experience includes a wide range of front-end and back-end
          technologies, as well as a thorough understanding of the software
          development process and best practices. This extensive knowledge base
          enables me to work effectively with cross-functional teams, helping to
          the development of scalable and intuitive apps that suit a wide range
          of user needs. Keeping up with the newest industry trends is more than
          simply a professional obligation for me; it&apos;s a passion. This
          passion for technology fuels my ongoing learning and mastery of
          cutting-edge tools such as Next.js, React.js, Node.js, Express.js,
          Tailwind CSS, Sass, MongoDB, Firebase, CSS, and content management
          systems like Sanity and Vercel.
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
