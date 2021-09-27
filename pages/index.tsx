import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import 'twin.macro';
import { Collaboration } from '../components/home/Collaboration';
import { Development } from '../components/home/Development';

const Home: NextPage = () => {
  return (
    <div tw="">
      <div tw="relative w-full h-screen bg-cover bg-gradient">
        <div tw="absolute inset-0 duration-200 ease-in-out dark:bg-black/50"></div>
        <div tw="relative flex items-center justify-center h-full">
          <div tw="flex flex-col w-full mx-4 md:mx-20 md:justify-start">
            <div tw="px-8 py-4 text-gray-800 shadow-lg bg-white/60 dark:bg-gray-900/60 dark:text-gray-100 backdrop-blur-md rounded-2xl">
              <h1 tw="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-100">
                Hey, I&apos;m Josh.
              </h1>
              <h1 tw="mt-4 lg:mt-8 text-lg font-medium sm:text-2xl text-gray-600 dark:text-gray-200">
                I am a{' '}
                <span tw="text-purple-600 dark:text-purple-400">
                  full stack developer
                </span>
                <span> &middot; </span>
                <span tw="text-purple-600 dark:text-purple-400">
                  mechanical engineer
                </span>
                <span> &middot; </span>
                <span tw="text-purple-600 dark:text-purple-400">
                  rock climber
                </span>
                <span> &middot; </span>
                <span tw="text-purple-600 dark:text-purple-400">
                  business analyst
                </span>
                <span> &middot; </span>
                <span tw="text-purple-600 dark:text-purple-400">cyclist</span>.
              </h1>

              <div tw="flex mt-4 lg:mt-8 space-x-4 justify-center sm:justify-start">
                <Link href="/contact" passHref>
                  <a
                    tw="
                      px-4 py-2 rounded-md shadow font-medium text-sm text-gray-900 
                      bg-gradient-to-br from-fuchsia-400 to-indigo-500
                      hover:(scale-110 shadow-md)
                      focus:(outline-none ring-2 ring-purple-600)
                      dark:(text-gray-100 from-purple-400 to-indigo-700)
                      dark:focus:(ring-purple-400)
                      dark:hover:(text-white)
                    "
                  >
                    <div>Contact</div>
                  </a>
                </Link>

                <Link href="/about" passHref>
                  <a
                    tw="
                      px-4 py-2 rounded-md shadow font-medium text-sm text-gray-900 bg-white/50 
                      hover:(scale-110 shadow-md)
                      dark:(text-gray-100 bg-white/10)
                      focus:(outline-none ring-2 ring-purple-600)
                      dark:focus:(ring-purple-400)
                      dark:hover:(text-white)
                    "
                  >
                    About me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav tw="absolute w-full bottom-4">
          <div tw="flex justify-center">
            <div tw="text-gray-900 rounded-full dark:(text-gray-200)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tw="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      {/* Bellow Fold of Page starts here */}
      <div tw="flex flex-col justify-center bg-gray-100 py-40 dark:bg-gray-800">
        <div tw="mx-auto space-y-32 max-w-7xl">
          <Development />

          {/* Analyst/Agile Workflow */}
          <Collaboration />
        </div>

        {/* End or Page */}
      </div>
    </div>
  );
};

export default Home;
