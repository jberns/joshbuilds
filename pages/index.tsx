import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import 'twin.macro';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen bg-cover bg-gradient">
        <div className="absolute inset-0 duration-200 ease-in-out dark:bg-black/50 transition-color"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="flex flex-col w-full mx-4 md:mx-20 md:justify-start">
            <div className="px-8 py-4 text-gray-800 shadow-lg bg-white/40 dark:bg-gray-400/10 dark:text-gray-100 backdrop-blur-md rounded-2xl">
              <h1 className="text-5xl font-semibold tracking-wide">
                {' '}
                Hey, I&apos;m Josh.
              </h1>
              <h1 className="mt-8 text-3xl font-medium">
                I am a{' '}
                <span className="text-purple-600 dark:text-purple-400">
                  full stack developer
                </span>
                {' | '}
                <span className="text-purple-600 dark:text-purple-400">
                  mechanical engineer
                </span>
                {' | '}
                <span className="text-purple-600 dark:text-purple-400">
                  rock climber
                </span>
                {' | '}
                <span className="text-purple-600 dark:text-purple-400">
                  business analyst
                </span>
                {' | '}
                <span className="text-purple-600 dark:text-purple-400">
                  cyclist
                </span>
                .
              </h1>
            </div>
            <div className="flex mt-8 space-x-4">
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

        <nav className="absolute w-full bottom-4">
          <div className="flex justify-center">
            <div className="text-gray-900 rounded-full bg-white/50 backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
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

      {/* Software Section */}
      <div>
        <div className="flex flex-col justify-center py-20 space-y-10 bg-gray-100">
          <div>
            <h2 className="font-medium text-center text-orange-600 uppercase">
              FrontEnd
            </h2>
            <div className="flex justify-center mt-4 space-x-6">
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-react-original"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-nextjs-original-wordmark"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-graphql-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-tailwindcss-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-javascript-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-typescript-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-html5-plain-wordmark"></i>
              <i className="p-3 text-5xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-tr devicon-css3-plain-wordmark"></i>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-center uppercase text text-cyan-600">
              Backend
            </h2>
            <div className="flex justify-center mt-4 space-x-6">
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600 devicon-nodejs-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600 devicon-java-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-green-400 to-cyan-600 devicon-python-plain"></i>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-center text-indigo-600 uppercase text">
              Database
            </h2>
            <div className="flex justify-center mt-4 space-x-6">
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600 devicon-postgresql-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600 devicon-mysql-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600 devicon-mongodb-plain"></i>
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-blue-400 to-indigo-600 devicon-redis-plain"></i>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-center text-pink-600 uppercase text">
              Source Control
            </h2>
            <div className="flex justify-center mt-4 space-x-6">
              <i className="p-3 text-5xl text-white rounded shadow bg-gradient-to-tr from-indigo-400 to-pink-600 devicon-github-original"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst/Agile Workflow */}
      <div className="w-full h-full">{/* <Flow /> */}</div>

      {/* End or Page */}
    </div>
  );
};

export default Home;
