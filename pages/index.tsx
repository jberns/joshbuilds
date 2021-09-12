import type { NextPage } from 'next';
import React from 'react';
import { Flow } from '../components/home/Flow';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="mountain.jpg"
          alt="Picture of building"
        />
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col w-full mx-4 md:mx-20 md:justify-start">
            <div className="px-8 py-4 text-gray-800 shadow-lg bg-white/40 backdrop-blur-md rounded-2xl">
              <h1 className="text-3xl">Hey, I'm Josh Bernstein.</h1>
              <h1 className="mt-4 text-4xl font-semibold">
                I am a{' '}
                <span className="text-orange-600 underline">
                  full stack developer
                </span>
                {' | '}
                <span className="text-orange-600 underline">
                  mechanical engineer
                </span>
                {' | '}
                <span className="text-orange-600 underline">rock climber</span>
                {' | '}
                <span className="text-orange-600 underline">
                  business analyst
                </span>
                {' | '}
                <span className="text-orange-600 underline">cyclist</span>.
              </h1>
            </div>
            <div className="pt-4">
              <button className="px-4 py-2 text-white bg-orange-600 rounded-md shadow focus:outline-none focus:ring-orange-600 focus:ring-2 focus:ring-offset-2">
                Contact
              </button>

              <button className="px-4 py-2 ml-2 text-gray-700 rounded-md shadow focus:outline-none focus:ring-orange-600 focus:ring-2 focus:ring-offset-2 bg-white/40 backdrop-blur-md">
                About Me
              </button>
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
      <div className="w-full h-full">
        <Flow />
      </div>

      {/* End or Page */}
    </div>
  );
};

export default Home;
