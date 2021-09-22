import { NextPage } from 'next';
import 'twin.macro';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';

export enum TechTypes {
  HTML = 'HTML',
  TailwindCSS = 'TailwindCSS',
  React = 'React',
  Python = 'Python',
  AirTable = 'AirTable',
  Redis = 'Redis',
  NEXTJS = 'Next.js',
  GraphQL = 'GraphQL',
  TypeScript = 'TypeScript',
  NodeJS = 'Node.js',
  Spring = 'Spring',
}

export interface IProject {
  name: string;
  description: string;
  internal_url?: string;
  github_url?: string;
  youtube_url?: string;
  stack: TechTypes[];
}

export interface IProjects {
  Personal: IProject[];
  CodeForDenver: IProject[];
  TailwindCSS: IProject[];
}

const Projects: NextPage = () => {
  const projects: IProjects = {
    Personal: [
      {
        name: 'Project Notebook',
        description:
          'Project Notebook is an integrated note taking + task management system with out of the box dashboards for each project to track progress',
        github_url:
          'https://github.com/codefordenver/energy-assistance-dashboard',
        stack: [
          TechTypes.React,
          TechTypes.NEXTJS,
          TechTypes.GraphQL,
          TechTypes.TypeScript,
        ],
      },
    ],
    CodeForDenver: [
      {
        name: 'Energy Assistance Dashboard',
        description:
          'This dashboard was built for Energy Outreach Colorado in order to visualize the energy assistance requirements of various colorado counties.',
        github_url:
          'https://github.com/codefordenver/energy-assistance-dashboard',
        youtube_url: 'https://www.youtube.com',
        stack: [
          TechTypes.React,
          TechTypes.NEXTJS,
          TechTypes.Python,
          TechTypes.AirTable,
          TechTypes.Redis,
        ],
      },
      {
        name: 'Community Radio Scheduler (Comrad)',
        description:
          'Comrad is an open-source web application for use by community radio stations that helps with crucial show scheduling and playlist entry to organize all on air and streaming processes for hosts and DJ’s.',
        github_url: 'https://github.com/codefordenver/Comrad',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.React, TechTypes.NodeJS],
      },
      {
        name: 'ideaLab ',
        description:
          'ideaLab is a queuing app for 3D printing. It includes a user-facing form that allows the user to request a print job. It also consists of an employee-facing app that will enable them to change the statuses of print jobs, view print jobs, and modify print jobs. The web app is frontend React and backend Java Spring.',
        github_url: 'https://github.com/codefordenver/ideaLab',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.React, TechTypes.Spring],
      },
      {
        name: 'Habitat Group Contacts',
        description:
          'The Habitat for Humanity group contacts project is a URL shortening service that connects with their VolunteerHub scheduling system.  It allows their admin to send out up-to-date contact information to their group leaders with a sharable link that will query VolunteerHub on the backend.',
        github_url: 'https://github.com/codefordenver/habitat-group-contacts',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.React, TechTypes.NodeJS],
      },
    ],
    TailwindCSS: [
      {
        name: 'Blurry Background',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/blurry-backgrounds',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Responsive Tile Grid',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/responsive-tile-grid',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Box Decoration',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/box-decoration',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Background Blending',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/background-blending',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Background Gradient',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/background-gradient',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'iPhone',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/iphone',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Slick Fits',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/slick-fits',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Form',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/form',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Dropdown',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/dropdown',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Switch',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/switch',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Labels',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/floating-labels',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Stacked Layouts',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/stacked',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Stories',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/stories',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Backdrop Filters',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/backdrop-filters',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Theme',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        internal_url: '/tailwindcss/theme',
        youtube_url: 'https://www.youtube.com',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
    ],
  };

  return (
    <div
      tw="flex flex-col min-h-screen pt-20 transition transform ease-in-out duration-200
    dark:bg-gray-800"
    >
      <div tw="max-w-5xl mx-auto px-10">
        <Header text="Personal Projects" />
        <div tw="mt-8 mb-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.Personal.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>

        <Header text="Code For Denver Projects" />
        <div tw="mt-8 mb-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.CodeForDenver.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>

        <Header text="TailwindCSS Examples" />
        <div tw="mt-8 mb-32 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.TailwindCSS.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
