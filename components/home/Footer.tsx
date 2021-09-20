import { NextPage } from 'next';
import 'twin.macro';
import { LogoIcon } from '../LogoIcon';
import { Social } from './Social';

export const Footer: NextPage = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      tw="flex flex-col justify-center bg-white items-center px-8 py-10 text-sm font-medium text-gray-900
      dark:(text-gray-400 bg-gray-900)"
    >
      <div tw="max-w-screen-lg xl:max-w-screen-xl">
        <div
          tw="divide-y divide-gray-200
          dark:divide-gray-800"
        >
          <div tw="flex pb-10 justify-between items-center flex-col space-y-5 sm:(flex-row space-y-0) sm:space-x-20 md:space-x-56 lg:space-x-[30rem] xl:space-x-[40rem]">
            <div tw="flex items-center space-x-5">
              <LogoIcon />
              <div>&copy; {year} Joshua Bernstein</div>
            </div>
            <div tw="">
              <Social />
            </div>
          </div>
          <div tw="flex pt-10 text-xs justify-center">
            Made with ❤️ and ☕ by Josh.
          </div>
        </div>
      </div>
    </footer>
  );
};
