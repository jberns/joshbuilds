import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import 'twin.macro';
import tw from 'twin.macro';

enum TechTypes {
  HTML = 'HTML',
  TailwindCSS = 'TailwindCSS',
}

const TailwindCSS: NextPage = () => {
  const projects = [
    {
      name: 'Blurry Background',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'blurry-backgrounds',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Responsive Tile Grid',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'responsive-tile-grid',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Box Decoration',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'box-decoration',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Background Blending',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'background-blending',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Background Gradient',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'background-gradient',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'iPhone',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'iphone',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Slick Fits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'slick-fits',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Form',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'form',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Dropdown',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'dropdown',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Switch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'switch',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Labels',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'floating-labels',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Stacked Layouts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'stacked',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Stories',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'stories',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Backdrop Filters',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'backdrop-filters',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
    {
      name: 'Theme',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'theme',
      youtube_url: 'www.youtube.com',
      stack: [TechTypes.HTML, TechTypes.TailwindCSS],
    },
  ];

  return (
    <div
      tw="flex justify-center min-h-screen py-20 transition transform ease-in-out duration-200
    dark:bg-gray-800"
    >
      <div tw="grid grid-cols-1 gap-6 max-w-5xl mx-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Link
              key={project.name}
              href={`/tailwindcss/${project.url}`}
              passHref
            >
              <a
                tw="
                  rounded
                  focus:(outline-none ring-2 ring-amber-400)
                  dark:focus:(ring-purple-400)"
              >
                <div
                  tw="bg-gray-100 rounded shadow-lg cursor-pointer transition transform  ease-in-out duration-200
                  hover:(scale-105)
                  dark:bg-gray-700
                  "
                >
                  <div tw="flex flex-col justify-between w-full p-6">
                    <div tw="space-x-2">
                      {project.stack?.map((tech) => {
                        return techButton(tech);
                      })}
                    </div>
                    <div tw="mt-4 flex items-center">
                      <h2 tw="font-bold rounded text-gray-900 dark:text-white">
                        {project.name}
                      </h2>
                    </div>
                    <p tw="text-xs text-gray-800 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div tw="mt-2">
                      <a
                        tw="
                        h-4
                        w-6
                        rounded
                        shadow 
                        hidden
                        relative
                        hover:(shadow-lg transform scale-150 transition ease-in-out duration-200) 
                        dark:block
                        focus:(outline-none ring-2 ring-amber-400)
                        dark:focus:(ring-purple-400)"
                        href={project.youtube_url}
                      >
                        <Image
                          layout="fill"
                          src="/img/yt_icon_mono_dark.png"
                          alt={`Youtube link for ${project.name}`}
                        />
                      </a>
                      <a
                        tw="
                          h-4
                          w-6
                          rounded
                          shadow
                          relative
                          block
                          hover:(shadow-lg transform scale-150 transition ease-in-out duration-200) 
                          dark:hidden
                          focus:(outline-none ring-2 ring-amber-400)
                          dark:focus:(ring-purple-400)"
                        href={project.youtube_url}
                      >
                        <Image
                          layout="fill"
                          src="/img/yt_icon_rgb.png"
                          alt={`Youtube link for ${project.name}`}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const techButton = (tech: TechTypes) => {
  const colors = {
    [TechTypes.HTML]: tw`bg-purple-600 border-purple-400`,
    [TechTypes.TailwindCSS]: tw`bg-cyan-500 border-cyan-400`,
  };

  return (
    <span
      key={tech}
      tw="text-white py-0.5 px-1 font-medium text-xs rounded-sm shadow-sm"
      css={[colors[tech]]}
    >
      {tech}
    </span>
  );
};

export default TailwindCSS;
