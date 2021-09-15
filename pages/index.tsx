import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import 'twin.macro';
import { Flow } from '../components/home/Flow';
import { CodingSVG } from '../components/svg/svgs';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home: NextPage = () => {
  return (
    <div tw="">
      <div tw="relative w-full h-screen bg-cover bg-gradient">
        <div tw="absolute inset-0 duration-200 ease-in-out dark:bg-black/50 transition"></div>
        <div tw="relative flex items-center justify-center h-full">
          <div tw="flex flex-col w-full mx-4 md:mx-20 md:justify-start">
            <div tw="px-8 py-4 text-gray-800 shadow-lg bg-white/40 dark:bg-gray-400/10 dark:text-gray-100 backdrop-blur-md rounded-2xl">
              <h1 tw="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-100">
                Hey, I&apos;m Josh.
              </h1>
              <h1 tw="mt-4 lg:mt-8 text-lg font-medium sm:text-2xl text-gray-600 dark:text-gray-200">
                I am a{' '}
                <span tw="text-purple-600 dark:text-purple-400">
                  full stack developer
                </span>
                {' | '}
                <span tw="text-purple-600 dark:text-purple-400">
                  mechanical engineer
                </span>
                {' | '}
                <span tw="text-purple-600 dark:text-purple-400">
                  rock climber
                </span>
                {' | '}
                <span tw="text-purple-600 dark:text-purple-400">
                  business analyst
                </span>
                {' | '}
                <span tw="text-purple-600 dark:text-purple-400">cyclist</span>.
              </h1>

              <div tw="flex mt-4 lg:mt-8 space-x-4 justify-center sm:justify-start">
                <Link href="/contact" passHref>
                  <a
                    tw="
                px-4 py-2 rounded-md shadow font-medium text-sm text-gray-900 
                bg-gradient-to-br from-amber-400 to-orange-600 
                transform transition ease-in-out duration-200 
                hover:( scale-110 shadow-md )
                focus:( outline-none ring-2 ring-amber-400 )
                dark:( text-gray-100 from-pink-400 to-indigo-700 )
                dark:focus:( ring-purple-400 )
                "
                  >
                    <div>Contact</div>
                  </a>
                </Link>

                <Link href="/about" passHref>
                  <a
                    tw="px-4 py-2 rounded-md shadow font-medium text-sm text-gray-900 bg-white/50 
                transform transition ease-in-out duration-200 
                hover:( scale-110 shadow-md )
                dark:( text-gray-200 bg-black/20 )
                focus:( outline-none ring-2 ring-amber-400 )
                dark:focus:( ring-purple-400 )
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
            <div tw="text-gray-900 rounded-full bg-white/50 backdrop-blur-md dark:(text-gray-200 bg-black/20)">
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
      <div tw="mx-auto">
        <div tw="flex justify-center items-center bg-gray-100 dark:bg-gray-800 flex-col lg:flex-row py-40">
          <div tw="w-full lg:w-1/2">
            <div tw="mx-20">
              <h2 tw="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3 dark:text-purple-400">
                Programming
              </h2>
              <h1 tw="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-200">
                Diverse Languages
              </h1>
              <p tw="mt-8 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 text-gray-800 dark:text-gray-500">
                With over half a dozen projects under my belt I have experience
                with a large number of 3rd party APIs along with a breadth of
                tech stacks that I can leverage to solve problems
              </p>
              <CodingSVG tw="mx-auto h-96 w-96 md:h-[30rem] md:w-[30rem]" />
            </div>
          </div>
          <div tw="flex flex-col justify-center pt-10 space-y-10  max-w-full lg:w-1/3">
            <div>
              <h2 tw="text-2xl font-medium text-center text-orange-600 uppercase">
                FrontEnd
              </h2>
              <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-4 mt-4 place-items-center gap-4">
                <i
                  className="devicon-react-original"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-nextjs-original-wordmark"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-graphql-plain"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-tailwindcss-plain"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-javascript-plain"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-typescript-plain"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-html5-plain-wordmark"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>

                <i
                  className="devicon-css3-plain-wordmark"
                  tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr"
                ></i>
              </div>
            </div>
            <div>
              <h2 tw="text-2xl font-medium text-center uppercase text-cyan-600">
                Backend
              </h2>
              <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-3 mt-4 place-items-center gap-4">
                <i
                  className="devicon-nodejs-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600"
                ></i>

                <i
                  className="devicon-java-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600"
                ></i>

                <i
                  className="devicon-python-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600"
                ></i>
              </div>
            </div>
            <div>
              <h2 tw="text-2xl font-medium text-center text-indigo-600 uppercase">
                Database
              </h2>
              <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-4 mt-4 place-items-center gap-4">
                <i
                  className=" devicon-postgresql-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600"
                ></i>

                <i
                  className=" devicon-mysql-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600"
                ></i>

                <i
                  className=" devicon-mongodb-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600"
                ></i>

                <i
                  className=" devicon-redis-plain"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600"
                ></i>
              </div>
            </div>
            <div>
              <h2 tw="text-2xl font-medium text-center text-pink-600 uppercase">
                Source Control
              </h2>
              <div tw="flex justify-center mt-4 space-x-6">
                <i
                  className=" devicon-github-original"
                  tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-tr from-indigo-400 to-pink-600"
                ></i>
              </div>
            </div>
          </div>
        </div>

        {/* Analyst/Agile Workflow */}
        <div tw="w-full h-full py-20">
          <Flow />
        </div>

        {/* End or Page */}
      </div>
    </div>
  );
};

export default Home;
