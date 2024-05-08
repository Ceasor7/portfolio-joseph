import { projects } from '#site/content';
import { QueryPagination } from '@/components/query-pagination';
import { Tag } from '@/components/tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags2, sortProjects, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';
import { ProjectCard } from '../../components/ui/projectCard';

export const metadata: Metadata = {
  title: 'My Projects',
  description:
    ' Here, you will find a curated collection of my projects, each showcasing my skills, creativity, and dedication to my craft. ',
};

const PROJECTS_PER_PAGE = 5;

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
  const totalPages = Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE);

  const displayProjects = sortedProjects.slice(
    PROJECTS_PER_PAGE * (currentPage - 1),
    PROJECTS_PER_PAGE * currentPage
  );

  const tags = getAllTags2(projects);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">My Projects and Work</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayProjects?.length > 0 ? (
            <ul className="flex flex-col">
              {displayProjects.map((project) => {
                const { slug, image, date, title, description, tags } = project;
                return (
                  <li key={slug}>
                    <ProjectCard
                      slug={slug}
                      image={image}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
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
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
