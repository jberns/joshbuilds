import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'twin.macro';
import { CollaborationSVG } from '../svg/svgs';

export const Collaboration = () => {
  return (
    <div tw="mx-auto flex justify-center items-center flex-col lg:flex-row">
      <div tw="w-full px-4 sm:px-6 md:px-8 lg:w-1/2">
        <div tw="w-12 h-12 flex justify-center items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600">
          <FontAwesomeIcon icon={faCode} tw="text-gray-100 text-2xl" />
        </div>
        <h2 tw="mt-8 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-400">
          Collaboration
        </h2>
        <h1 tw="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-100">
          Big or small teams? No problem!
        </h1>
        <p tw="mt-8 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 text-gray-800 dark:text-gray-500">
          I can work as a solo full-stack developer or as part of a team
          building a large product. I have taken roles ranging from developer to
          project manager to product owner in order to define + build + deliver
          projects on time and on budget.
        </p>
      </div>
      <div tw="flex flex-col justify-center pt-10 space-y-10 max-w-full lg:w-1/3">
        <CollaborationSVG tw="mx-auto h-96 w-96 md:h-[30rem] md:w-[30rem]" />
      </div>
    </div>
  );
};
