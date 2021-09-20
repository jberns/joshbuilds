import Image from 'next/image';
import Link from 'next/link';
import 'twin.macro';
import { IProject } from '../pages/projects';
import { ProjectTag } from './ProjectTag';

interface IProjectCard {
  project: IProject;
}

export const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <div
      key={project.name}
      tw="
        flex
        flex-col  
        bg-gray-100 rounded shadow-lg cursor-pointer transition transform  ease-in-out duration-200
        hover:(scale-105)
        dark:bg-gray-700
        "
    >
      <Link href={`/tailwindcss/${project.url}`} passHref>
        <a
          tw="
            px-6 pt-6
            rounded
            flex
            flex-1
            focus:(outline-none ring-2 ring-amber-400)
            dark:focus:(ring-purple-400)"
        >
          <div tw="flex flex-col w-full">
            <div tw="flex flex-wrap">
              {project.stack?.map((technology) => {
                return (
                  <div tw="mr-2" key={technology}>
                    <ProjectTag technology={technology} />
                  </div>
                );
              })}
            </div>
            <div tw="mt-4 items-center">
              <h2 tw="font-bold rounded text-gray-900 dark:text-white">
                {project.name}
              </h2>
            </div>
            <p tw="text-xs text-gray-800 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </a>
      </Link>
      <div tw="mt-2 mx-6 mb-6">
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
          href={project.external_url}
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
          href={project.external_url}
        >
          <Image
            layout="fill"
            src="/img/yt_icon_rgb.png"
            alt={`Youtube link for ${project.name}`}
          />
        </a>
      </div>
    </div>
  );
};
