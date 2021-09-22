import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import 'twin.macro';
import tw from 'twin.macro';
import { IProject } from '../pages/projects';
import { ProjectTag } from './ProjectTag';

interface IProjectCard {
  project: IProject;
}

const ExternalLink = tw.a`
  rounded
  relative
  hover:(shadow-lg transform scale-150 transition ease-in-out duration-200) 
  focus:(outline-none ring-2 ring-amber-400)
  dark:focus:(ring-purple-400)
  `;

export const ProjectCard = ({ project }: IProjectCard) => {
  const internalLink =
    project.internal_url != undefined ? project.internal_url : '#';

  return (
    <div
      key={project.name}
      tw="
        flex
        flex-col  
        bg-gray-100 rounded shadow-lg transition transform  ease-in-out duration-200
        hover:(scale-105)
        dark:bg-gray-700
        "
    >
      <div tw="flex flex-col flex-1 m-6">
        <Link href={internalLink} passHref>
          <a
            tw="
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
        <div className="external Links" tw="mt-4 flex items-center space-x-4">
          {project.internal_url ? (
            <div tw="">
              <Link href={project.internal_url} passHref>
                <ExternalLink tw="hidden dark:flex" href={project.internal_url}>
                  <FontAwesomeIcon tw="text-white text-xl" icon={faLink} />
                </ExternalLink>
              </Link>

              <Link href={project.internal_url} passHref>
                <ExternalLink tw="flex dark:hidden" href={project.internal_url}>
                  <FontAwesomeIcon tw="text-gray-900 text-xl" icon={faLink} />
                </ExternalLink>
              </Link>
            </div>
          ) : null}

          {project.github_url ? (
            <div tw="">
              <ExternalLink tw="hidden dark:flex" href={project.github_url}>
                <FontAwesomeIcon tw="text-white text-xl" icon={faGithub} />
              </ExternalLink>
              <ExternalLink tw="flex dark:hidden" href={project.github_url}>
                <FontAwesomeIcon tw="text-gray-900 text-xl" icon={faGithub} />
              </ExternalLink>
            </div>
          ) : null}

          {project.youtube_url ? (
            <div tw="">
              <ExternalLink
                tw="h-4 w-6 hidden dark:flex"
                href={project.youtube_url}
              >
                <Image
                  layout="fill"
                  src="/img/yt_icon_mono_dark.png"
                  alt={`Youtube link for ${project.name}`}
                />
              </ExternalLink>
              <ExternalLink
                tw="h-4 w-6 flex dark:hidden"
                href={project.youtube_url}
              >
                <Image
                  layout="fill"
                  src="/img/yt_icon_rgb.png"
                  alt={`Youtube link for ${project.name}`}
                />
              </ExternalLink>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
