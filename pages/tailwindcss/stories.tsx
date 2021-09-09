import { NextPage } from 'next';

const Stories: NextPage = () => {
  return (
    <div className="max-w-2xl p-8 mx-auto">
      <h2 className="font-semibold tracking-wide uppercase sm:text-lg sm:leading-snug text-fuchsia-700">
        Introducing...
      </h2>
      <p className="text-5xl font-extrabold leading-none text-gray-900 lg:text-6xl">
        JoshBuilds stories.
      </p>

      <ul className="flex mt-8 space-x-6">
        <li className="flex flex-col items-center space-y-1">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <a
              className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
              href="#"
            >
              <img
                className="w-24 h-24 rounded-full"
                src="https://placekitten.com/200/200"
                alt="cute kitty"
              />
            </a>
            <button className="absolute bottom-0 flex items-center justify-center w-8 h-8 font-mono text-2xl font-semibold text-white bg-blue-500 border-4 border-white rounded-full right-1 hover:bg-blue-700">
              +
            </button>
          </div>
          <a href="#">You</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <a
              className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
              href="#"
            >
              <img
                className="w-24 h-24 rounded-full"
                src="https://placekitten.com/201/200"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">meowwww383</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <a
              className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
              href="#"
            >
              <img
                className="w-24 h-24 rounded-full"
                src="https://placekitten.com/202/200"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">ksnugles22e</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <a
              className="block p-1 transition transform bg-white rounded-full hover:-rotate-6"
              href="#"
            >
              <img
                className="w-24 h-24 rounded-full"
                src="https://placekitten.com/204/200"
                alt="cute kitty"
              />
            </a>
          </div>
          <a href="#">booper</a>
        </li>
      </ul>
    </div>
  );
};

export default Stories;
