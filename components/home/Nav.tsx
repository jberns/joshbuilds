import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { ThemeToggle } from '../themeToggle';

const navLinks = [
  {
    name: 'About',
    url: '/about',
  },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];

export const Nav = () => {
  return (
    <div className="relative z-10">
      <nav className="absolute hidden w-full py-3 pr-5 bg-white dark:bg-gray-900 sm:block">
        <ul className="flex items-center justify-end space-x-4">
          {navLinks.map((link) => {
            return (
              <li className="" key={link.name}>
                <Link href={`${link.url}`}>
                  <a className="relative inset-0 block px-4 py-1 text-sm font-medium bg-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
                    {link.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <ThemeToggle />
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
                            group flex rounded-md items-center w-full px-2 py-1 text-sm`}
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
