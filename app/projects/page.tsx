import { projects } from '#site/content';
import { QueryPagination } from '@/components/query-pagination';
import { getAllTags, sortProjects } from '@/lib/utils';
import { Metadata } from 'next';
import { ProjectCard } from '../../components/ui/projectCard';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Welcome to my Tech News and trends',
};

const POSTS_PER_PAGE = 5;

interface ProjectPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function ProjectPage({ searchParams }: ProjectPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedProjects = sortProjects(
    projects.filter((project) => project.published)
  );
  const totalPages = Math.ceil(sortedProjects.length / POSTS_PER_PAGE);

  const displayProjects = sortedProjects.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(projects);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev.
          </p>
        </div>
      </div>
      <div className=" mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayProjects?.length > 0 ? (
            <ul className="flex flex-col">
              {displayProjects.map((project) => {
                const { slug, image, date, title, description } = project;
                return (
                  <li key={slug}>
                    <ProjectCard
                      slug={slug}
                      image={image}
                      date={date}
                      title={title}
                      description={description}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
      </div>
    </div>
  );
}
