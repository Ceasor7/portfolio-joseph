import { HoverEffect } from './ui/card-hover-effect';

export const projects = [
  {
    title: 'Javascript',
  },
  {
    title: 'NextJS',
  },
  {
    title: 'ReactJS',
  },
  {
    title: 'NodeJS',
  },
  {
    title: 'ExpressJS',
  },
  {
    title: 'TailwindCSS',
  },
  {
    title: 'UI/UX Web Design',
  },
  {
    title: 'Generative AI',
  },
  {
    title: 'Sanity',
  },
  {
    title: 'SEO',
  },
  {
    title: 'Firebase',
  },
  {
    title: 'Framer Motion',
  },
  {
    title: 'Strapi',
  },
  {
    title: 'WireFraming',
  },
  {
    title: 'Authenication',
  },
];

const Skills = () => {
  return (
    <div>
      <h1 className="inline-block py-2 font-black text-4xl lg:text-5xl">
        Skills
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Skills;
