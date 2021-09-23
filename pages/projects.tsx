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
  link_url?: string;
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
          TechTypes.TailwindCSS,
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

        link_url: 'https://www.energyassistanceimpactdashboard.com/',
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
        stack: [TechTypes.React, TechTypes.NodeJS],
      },
      {
        name: 'ideaLab ',
        description:
          'ideaLab is a queuing app for 3D printing. It includes a user-facing form that allows the user to request a print job. It also consists of an employee-facing app that will enable them to change the statuses of print jobs, view print jobs, and modify print jobs. The web app is frontend React and backend Java Spring.',
        github_url: 'https://github.com/codefordenver/ideaLab',
        stack: [TechTypes.React, TechTypes.Spring],
      },
      {
        name: 'Habitat Group Contacts',
        description:
          'The Habitat for Humanity group contacts project is a URL shortening service that connects with their VolunteerHub scheduling system.  It allows their admin to send out up-to-date contact information to their group leaders with a sharable link that will query VolunteerHub on the backend.',
        github_url: 'https://github.com/codefordenver/habitat-group-contacts',
        stack: [TechTypes.React, TechTypes.NodeJS],
      },
    ],
    TailwindCSS: [
      {
        name: 'Animated Blurry Background',
        description:
          'This effect produces an animated venn diagram of blurry shapes behind the primary object.  It provides a cool animation to highlight the page.',
        link_url: '/tailwindcss/blurry-backgrounds',
        youtube_url: 'https://www.youtube.com/watch?v=Tmkr2kKUEgU',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Responsive Tile Grid',
        description:
          'This tile grid provides a responsive layout with a cool demonstration of how to position the grid layout with TailwindCSS',
        link_url: '/tailwindcss/responsive-tile-grid',
        youtube_url: 'https://www.youtube.com/watch?v=WJDw1J7FZnE',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Text Box Decoration',
        description:
          'Want to add a cool gradient or highlight to your text?  Tailwind box decoration utilities are the way to do it!',
        link_url: '/tailwindcss/box-decoration',
        youtube_url: 'https://www.youtube.com/watch?v=C9ccfaIlqD4',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Mix & Background Blending',
        description:
          'Tailwind provides a bunch of utilities to blend images together in order to create cool effects!',
        link_url: '/tailwindcss/background-blending',
        youtube_url: 'https://www.youtube.com/watch?v=Z42les2fCRo',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Glowing Background Gradient',
        description:
          'This background gradient provides a cool glowing effect to highlight content on the page.  Looks especially cool for dark mode!',
        link_url: '/tailwindcss/background-gradient',
        youtube_url: 'https://www.youtube.com/watch?v=5W6kEP65AH4',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'iPhone iOS 15 Mockup',
        description:
          'This recreation of iOS 15 for the iPhone provides a great set of tools for positioning content, flex boxes, grid, and adding stylized content, along with cool layer and opacity effects.',
        link_url: '/tailwindcss/iphone',
        youtube_url: 'https://www.youtube.com/watch?v=eSzNNYk7nVU',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Sick Fits Recreation',
        description: `If you are a fan of Wes Bos' "Fullstack Advanced React & GraphQL" course, this is is an example of how to recreate the projects home page using tailwind and flex box components.`,
        link_url: '/tailwindcss/sick-fits',
        youtube_url: 'https://www.youtube.com/watch?v=mK-ePxnfcJw',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Building Forms with TailwindCSS plugin',
        description:
          'Tailwind provides helper utilities to make custom forms with beautiful styling.  Using the plugin is a must to create a clean interface.',
        link_url: '/tailwindcss/form',
        youtube_url: 'https://www.youtube.com/watch?v=pONeWAzDsQg',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Animated Form Labels',
        description:
          'On top of using the TailwindCSS form plugin, animated labels can be made for the various form input boxes.',
        link_url: '/tailwindcss/floating-labels',
        youtube_url: 'https://www.youtube.com/watch?v=nJzKi6oIvBA',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Headless UI Dropdown',
        description:
          'Tailwind and Headless UI help generate both beautiful and accessible menus + components.',
        link_url: '/tailwindcss/dropdown',
        youtube_url: 'https://www.youtube.com/watch?v=qJnIJa-cF2M',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Headless UI Switch',
        description:
          'The switch is another great example of accessible components to build a toggle switch.',
        link_url: '/tailwindcss/switch',
        youtube_url: 'https://www.youtube.com/watch?v=3uzhz0Q_vUg',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Stacked Layout Contexts',
        description:
          'Stacking and z-index can sometimes be hard.  Tailwind has some great utilities, along with isolation, to help with blending and positioning content.',
        link_url: '/tailwindcss/stacked',
        youtube_url: 'https://www.youtube.com/watch?v=RZ9cWr3tY9w',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Instagram Stories Recreation',
        description:
          'All major services are implementing stories with cool pictures and gradients.  Tailwind can implement it too!',
        link_url: '/tailwindcss/stories',
        youtube_url: 'https://www.youtube.com/watch?v=v74SZBVMPa0',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Stylized Backdrop Filters',
        description:
          'Looking for a new look / cool filter for photos and components.  Tailwind implements many backdrop filters to help created stylized photos directly in the browser.',
        link_url: '/tailwindcss/backdrop-filters',
        youtube_url: 'https://www.youtube.com/watch?v=qGEZdGMgXL4',
        stack: [TechTypes.HTML, TechTypes.TailwindCSS],
      },
      {
        name: 'Theming components with CSS Variables',
        description:
          'Want themes and dark mode for your components?  Pick your primary and secondary colors and let Tailwind do all the heavy lifting.',
        link_url: '/tailwindcss/theme',
        youtube_url: 'https://www.youtube.com/watch?v=MAtaT8BZEAo',
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
