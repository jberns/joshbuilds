import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import 'twin.macro';
import tw from 'twin.macro';
import { LogoIcon } from '../LogoIcon';
import { ThemeToggle } from '../themeToggle';

interface INav {
  position: 'relative' | 'absolute';
}
interface INavLinks {
  name: string;
  url: string;
}

const navLinks: INavLinks[] = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];

export const Nav = ({ position }: INav) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div
      id="nav"
      tw="w-full z-10"
      css={[position === 'relative' ? tw`relative` : tw`absolute`]}
    >
      <nav
        css={[
          tw`flex justify-between w-full py-3 pl-5 pr-5 shadow backdrop-blur-md bg-white/60 dark:bg-gray-900`,
        ]}
      >
        {/* Desktop Nav Component */}
        <ul tw="items-center space-x-4 hidden sm:flex">
          <li>
            <LogoIcon />
          </li>
          {navLinks.map((link) => {
            return NavLink(link, currentPath);
          })}
        </ul>

        <div tw="items-center hidden sm:flex">
          <ThemeToggle />
        </div>

        {/* Mobile Nav Component */}
        <ul tw="grid grid-cols-3 w-full sm:hidden">
          <li tw="flex justify-start items-center">{MobileNav()}</li>
          <li tw="flex justify-center items-center">
            <LogoIcon />
          </li>
          <li tw="flex justify-end items-center">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const NavLink = (link: INavLinks, currentPath: string) => {
  const active = link.url === currentPath;

  return (
    <li tw="" key={link.name}>
      <Link href={`${link.url}`} passHref>
        <a
          tw="
          block px-4 py-1 text-sm font-medium rounded cursor-pointer 
          outline-none
          text-gray-900
          hover:( bg-black/10 )  
          dark:hover:( bg-white/10 ) 
          focus:( ring-2 ring-purple-600 )
          dark:focus:( ring-purple-400 )
          dark:( text-gray-300 ) 
          "
          css={[active && tw`text-purple-600 dark:text-purple-400`]}
        >
          {link.name}
        </a>
      </Link>
    </li>
  );
};

const MobileNav = () => {
  return (
    <div tw="sm:hidden">
      <Menu as="div">
        {({ open }) => (
          <>
            <Menu.Button
              tw="text-lg font-medium text-purple-600 rounded-md 
                hover:bg-opacity-30 
                focus:outline-none
                focus-visible:(ring-2 ring-white ring-opacity-75)
                dark:text-purple-400
                "
            >
              <FontAwesomeIcon icon={faBars} />
            </Menu.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-100"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-100"
            >
              <div
                tw="py-3 px-3 absolute left-0 top-0 z-10 w-full rounded-b-md shadow-lg bg-white 
                  dark:bg-gray-900"
              >
                <ul tw="grid grid-cols-3 w-full mb-5 sm:hidden">
                  <li tw="flex justify-start items-center">
                    <Menu.Button
                      tw="px-2 text-lg font-medium text-gray-900 rounded-md 
                        hover:bg-opacity-30 
                        focus:outline-none 
                        focus-visible:(ring-2 ring-white ring-opacity-75)
                        dark:text-gray-200
                        dark:hover:text-white
                        "
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </Menu.Button>
                  </li>
                  <li tw="flex justify-center items-center">
                    <LogoIcon />
                  </li>
                </ul>

                <Menu.Items tw="focus:outline-none">
                  <div tw="">
                    {navLinks.map((link) => {
                      return (
                        <Menu.Item as="div" key={link.name}>
                          {({ active }) => {
                            return (
                              <Link href={link.url} passHref>
                                <a
                                  css={[
                                    active
                                      ? tw`bg-purple-600 text-white dark:(bg-purple-400) dark:hover:text-white`
                                      : tw`text-gray-900`,
                                    tw`flex items-center cursor-pointer w-full px-2 py-1 text-sm rounded-md font-medium dark:(text-gray-200)`,
                                  ]}
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
              </div>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};
