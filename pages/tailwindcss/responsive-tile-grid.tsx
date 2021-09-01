import { NextPage } from 'next';

const TileGrid: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid max-w-5xl gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        <h1 className="text-4xl font-extrabold sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-4 md:col-span-3 md:text-5xl md:grid-cols-3">
          <span className="md:col-span-2">Grid Layout with Tailwind CSS</span>
        </h1>
        <p className="sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square md:col-start-2"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-blue-500 sm:h-auto sm:square"></div>
        <div className="h-16 bg-pink-500 sm:h-auto sm:square"></div>
        <p className="sm:self-center md:text-lg md:col-span-2 md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default TileGrid;
