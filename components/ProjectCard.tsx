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
  p-1  
  rounded
  relative
  text-gray-900 text-xl dark:text-white
  hover:(shadow-lg transform scale-105 transition ease-in-out duration-200) 
  focus:(outline-none ring-2 ring-purple-600)
  dark:focus:(ring-purple-400)
  `;

const InternalLink = tw.a`
  rounded
  flex
  flex-1
  p-1
  focus:(outline-none ring-2 ring-purple-600)
  dark:focus:(ring-purple-400)
  `;

export const ProjectCard = ({ project }: IProjectCard) => {
  const internalLink = project.link_url != undefined ? project.link_url : '#';

  return (
    <div
      key={project.name}
      tw="
        flex
        flex-col  
        bg-white rounded shadow-lg transition-transform transform ease-in-out duration-200
        hover:(scale-105)
        dark:bg-gray-700
        "
    >
      <div tw="flex flex-col flex-1 m-6">
        <Link href={internalLink} passHref>
          <InternalLink>
            <div tw="flex flex-col w-full">
              <div tw="flex flex-wrap">
                {project.stack?.map((technology) => {
                  return (
                    <div tw="mr-2 mb-1" key={technology}>
                      <ProjectTag technology={technology} />
                    </div>
                  );
                })}
              </div>
              <div tw="mt-3 items-center">
                <h2 tw="font-bold rounded text-gray-900 dark:text-white">
                  {project.name}
                </h2>
              </div>
              <p tw="text-xs text-gray-800 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </InternalLink>
        </Link>
        <div className="external Links" tw="mt-4 flex items-center space-x-4">
          {project.link_url ? (
            <Link href={project.link_url} passHref>
              <ExternalLink href={project.link_url}>
                <FontAwesomeIcon icon={faLink} />
              </ExternalLink>
            </Link>
          ) : null}

          {project.github_url ? (
            <ExternalLink href={project.github_url}>
              <FontAwesomeIcon icon={faGithub} />
            </ExternalLink>
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
