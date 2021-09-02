import { NextPage } from 'next';

const iPhone: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-10 bg-purple-50">
      <div className="h-[712px] w-[350px] bg-black rounded-[60px] shadow-xl relative overflow-hidden border-[14px] border-black">
        <img
          src="/img/iphone-rainbow.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="wallpaper"
        />
        <div className="absolute inset-x-0 top-0">
          <div className="w-40 h-6 mx-auto bg-black rounded-b-3xl">
            <div className="absolute inset-0 w-10 top-[0.4375rem] h-1.5 mx-auto bg-gray-900 rounded-full "></div>
            <div className="absolute inset-0 flex items-center justify-center w-3 h-3 ml-48 bg-gray-900 rounded-full top-1">
              <div className="relative inset-0 w-1.5 h-1.5 bg-white rounded-full bg-gradient-to-tr from-cyan-900 to-gray-900"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-end mt-2 mr-5 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white/90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white/90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white/90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>

          <div className="mt-1.5 w-10 h-0.5 mx-auto bg-white/50 mr-7 ml-auto rounded"></div>

          <div className="flex flex-col items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            <p className="mt-3 text-6xl text-white font-extralight">9:41</p>
            <p className="mt-1 text-lg font-light text-white">Monday, June 7</p>
          </div>

          <div className="relative mx-2 mt-2">
            <div className="absolute inset-x-0 h-full origin-bottom scale-[0.85] -bottom-4 bg-white/10 backdrop-blur-md rounded-2xl"></div>
            <div className="absolute inset-x-0 h-full origin-bottom scale-95 shadow-sm -bottom-2 bg-white/30 backdrop-blur-md rounded-3xl"></div>
            <div className="p-4 shadow-sm bg-white/40 backdrop-blur-md rounded-3xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs font-bold">9:30 AM</p>
                  <h2 className="text-lg font-bold">Your Morning Summary</h2>
                </div>
                <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-full">
                  11
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <img
                    className="object-cover w-full h-24 rounded-lg"
                    src="/img/surfing.jpg"
                    alt=""
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Surfing: heals the soul, kills the ribs
                  </h3>
                  <p className="mt-1 text-xs">
                    It's all fun and thrills until you get sucked over the falls
                  </p>
                </div>
                <div>
                  <img
                    className="object-cover w-full h-24 rounded-lg"
                    src="/img/climbing.jpg"
                    alt=""
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Climbing: get ready for the rush
                  </h3>
                  <p className="mt-1 text-xs">
                    After the Olympics, everyone is getting in on the action!
                  </p>
                </div>
              </div>

              <hr className="mt-4 border-black/20" />

              <div className="grid items-end grid-cols-3 gap-1 mt-3">
                <div className="col-span-2">
                  <h3 className="text-sm font-bold">More Updates</h3>
                  <p className="text-xs mt-05">
                    Polywork, Keystone 6, and Sarah Drasner
                  </p>
                </div>
                <ul className="flex flex-row-reverse -space-x-4 space-x-reverse">
                  <li>
                    <img
                      className="object-cover w-8 h-8 rounded-xl"
                      src="/img/keystone.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="object-cover w-8 h-8 rounded-xl"
                      src="/img/polywork.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="object-cover w-8 h-8 rounded-xl"
                      src="/img/sarahdrasner.jpeg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20">
          <div className="flex justify-between px-10">
            <button className="p-2 rounded-full bg-gray-800/40 backdrop-blur">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-gray-800/40 backdrop-blur">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-1">
            <div className="h-1 mx-auto bg-white rounded w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iPhone;
