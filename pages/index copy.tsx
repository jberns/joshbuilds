import type { NextPage } from 'next';
import React from 'react';
import { Charts } from '../components/home/Charts';
import { TabComponent } from '../components/Tab';
import { HalfFlex, Lockup } from '../components/utils/templates';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="min-h-screen overflow-hidden bg-orange-200">
        <img
          src="/mountain.jpg"
          alt=""
          className="absolute object-cover w-full max-h-screen"
        />
        <div className="flex items-center ml-20 ">
          <div className="relative px-8 py-4 shadow-sm bg-white/30 backdrop-blur-md rounded-2xl">
            <h1 className="text-4xl font-extrabold">
              I am a{' '}
              <span className="text-indigo-700 underline">programmer</span>.
            </h1>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative pb-16 sm:pb-24">
            <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
              <div className="w-full rounded-3xl bg-white/50"></div>

              <div className="text-center">
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1 bg-yellow-500" />
            <div className="flex-1 w-full bg-blue-800" />
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="relative w-full h-12 bg-red-500"></div>
          </div>
        </div> */}
      </div>

      <div className="bg-gray-800">
        <div className="px-4 py-16 mx-auto mb-16 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto space-y-20 xl:max-w-screen-xl sm:space-y-32 md:space-y-40 lg:space-y-44">
        <Charts />
        <HalfFlex />
        <TabComponent />
        <Lockup />
      </div>
    </div>
  );
};

export default Home;
