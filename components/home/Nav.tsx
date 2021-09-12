import { Menu, Switch, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';

const navLinks = [
  {
    name: 'About',
    url: '/about',
  },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];

export const Nav = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative z-10">
      <nav className="absolute hidden w-full py-3 pr-5 bg-white sm:block">
        <ul className="flex items-center justify-end space-x-4">
          {navLinks.map((link) => {
            return (
              <li className="" key={link.name}>
                <Link href={`${link.url}`}>
                  <a className="relative inset-0 block px-5 py-2 text-sm font-medium bg-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
                    {link.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                enabled ? 'text-gray-300' : 'text-yellow-500'
              } w-6 h-6 transition-colors ease-in-out duration-200`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? 'bg-gray-900' : 'bg-green-400'
              } inline-flex flex-shrink-0 relative h-8 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors eas-in-out duration-200 focus: outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Light/Dark mode</span>
              <span
                aria-hidden="true"
                className={`${
                  enabled ? 'translate-x-8' : 'translate-x-0'
                } pointer-events-none inline-block h-7 w-7 rounded-full bg-white transform ring-0 transition ease-in-out duration-200`}
              ></span>
            </Switch>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                enabled ? 'text-gray-900' : 'text-gray-300'
              } w-6 h-6 transition-colors ease-in-out duration-200`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </li>
        </ul>
      </nav>
      <div className="absolute flex justify-end w-full pt-2 sm:hidden">
        <Menu className="" as="div">
          <Menu.Button className="px-4 py-2 mr-5 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Nav
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right focus:outline-none">
              <div className="px-5 py-2 mx-5 bg-white rounded-md shadow">
                {navLinks.map((link) => {
                  return (
                    <Menu.Item as="div" key={link.name}>
                      {({ active }) => {
                        return (
                          <Link href={link.url}>
                            <a
                              className={`${
                                active
                                  ? 'bg-orange-500 text-white'
                                  : 'text-gray-900'
                              }
                            group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {link.name}
                            </a>
                          </Link>
                        );
                      }}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
