import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import { ETheme, ThemeContext } from './themeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  //Return null for the server for first render will be on the client in the correct state once the theme value is populated.
  if (!theme) {
    return null;
  }

  const isDark = () => {
    return theme === ETheme.Dark;
  };

  function switchTheme(isDark: boolean) {
    if (setTheme != null) {
      if (isDark) {
        setTheme(ETheme.Dark);
      } else {
        setTheme(ETheme.Light);
      }
    }
  }

  return (
    <li className="flex items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          isDark() ? 'text-gray-300' : 'text-yellow-400'
        } w-5 h-5s transition-colors ease-in-out duration-200`}
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
        checked={isDark()}
        onChange={(value) => switchTheme(value)}
        className={`${
          isDark() ? 'bg-blue-600' : 'bg-green-400'
        } inline-flex flex-shrink-0 relative h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors eas-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Light/Dark mode</span>
        <span
          aria-hidden="true"
          className={`${
            isDark() ? 'bg-gray-900 translate-x-6' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          isDark() ? 'text-blue-600' : 'text-gray-300'
        } w-5 h-5s transition-colors ease-in-out duration-200`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </li>
  );
};

export { ThemeToggle };
