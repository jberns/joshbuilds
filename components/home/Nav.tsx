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
  {
    name: 'About',
    url: '/about',
  },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];

export const Nav = ({ position }: INav) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div
      tw="w-full z-10"
      css={[position === 'relative' ? tw`relative` : tw`absolute`]}
    >
      <nav
        css={[
          tw`flex justify-between w-full py-3 pl-5 pr-5 transition duration-200 ease-in-out shadow backdrop-blur-md bg-white/50 dark:bg-gray-900`,
        ]}
      >
        {/* Mobile Nav Component */}
        <ul tw="flex items-center justify-between w-full sm:hidden">
          <li>{MobileNav()}</li>
          <li>
            <LogoIcon />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Desktop Nav Component */}
        <ul tw="items-center space-x-4 hidden sm:flex">
          <li>
            <LogoIcon />
          </li>
          {navLinks.map((link) => {
            return NavLink(link, currentPath);
          })}
        </ul>
        <div className="items-center hidden sm:flex">
          <ThemeToggle />
        </div>
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
          transition-all ease-in-out duration-200
          outline-none
          hover:( bg-black/10 )  
          dark:hover:( bg-white/10 ) 
          focus:( ring-2 ring-orange-600 )
          dark:focus:( ring-purple-400 )
          dark:( text-gray-300 ) 
          "
          css={[active && tw`text-orange-600 dark:text-purple-400`]}
        >
          {link.name}
        </a>
      </Link>
    </li>
  );
};

const MobileNav = () => {
  return (
    <div tw="flex justify-end w-full sm:hidden">
      <Menu as="div">
        {/* @ts-ignore complex union error */}
        <Menu.Button tw="px-4 py-2 mr-5 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Nav
        </Menu.Button>
        {/* @ts-ignore complex union error */}
        <Transition
          //@ts-ignore part of example
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* @ts-ignore complex union error */}
          <Menu.Items tw="absolute left-0 z-10 w-full mt-2 origin-top-right focus:outline-none">
            <div tw="px-5 py-2 mx-5 bg-white rounded-md shadow">
              {navLinks.map((link) => {
                return (
                  // @ts-ignore complex union error
                  <Menu.Item as="div" key={link.name}>
                    {({ active }) => {
                      return (
                        <Link href={link.url}>
                          <a
                            css={[
                              active
                                ? tw`text-white bg-orange-500`
                                : tw`text-gray-900`,

                              tw`flex items-center w-full px-2 py-1 text-sm rounded-md`,
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
        </Transition>
      </Menu>
    </div>
  );
};
