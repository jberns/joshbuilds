import type { NextPage } from 'next';
import React from 'react';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="w-full h-screen">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="mountain.jpg"
          alt="Picture of building"
        />
        {/* <nav className="absolute w-full bg-red-600">
          <ul className="flex">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </nav> */}
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col w-full mx-4 md:mx-20 md:justify-start">
            <div className="px-8 py-4 text-gray-900 shadow-lg bg-white/40 backdrop-blur-md rounded-2xl">
              <h1 className="text-4xl">Hey, I'm Josh Bernstein.</h1>
              <h1 className="mt-4 text-5xl font-bold">
                I am a{' '}
                <span className="text-indigo-700 underline">
                  full stack developer
                </span>
                .
              </h1>
            </div>
            <div className="pt-4">
              <button className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow focus:outline-none focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2">
                Contact
              </button>

              <button className="px-4 py-2 ml-2 text-gray-700 rounded-md shadow focus:outline-none focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 bg-white/40 backdrop-blur-md">
                About Me
              </button>
            </div>
          </div>
        </div>

        <nav className="absolute w-full bottom-4">
          <div className="flex justify-center">
            <div className="text-gray-900 bg-white rounded-full bg-white/30 backdrop-blur-md">
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
      <h1>Below Page</h1>
    </div>
  );
};

export default Home;
