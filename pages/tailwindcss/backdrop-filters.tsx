import { NextPage } from 'next';

const BackdropFilters: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <div className="flex space-x-8">
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter brightness-50"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter brightness-75"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter brightness-100"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter brightness-125"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter brightness-150"
          src="/img/bike.jpg"
          alt="bike"
        />
      </div>
      <div className="flex space-x-8">
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter "
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter saturate-50"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter saturate-100"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter saturate-150"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter saturate-200"
          src="/img/bike.jpg"
          alt="bike"
        />
      </div>
      <div className="flex space-x-8">
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-15"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-30"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-60"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-90"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-180"
          src="/img/bike.jpg"
          alt="bike"
        />
      </div>
      <div className="flex space-x-8">
        <img
          className="object-cover w-48 h-48 rounded-lg shadow-xl filter hue-rotate-90 saturate-200 contrast-150"
          src="/img/bike.jpg"
          alt="bike"
        />
      </div>
      <div className="flex space-x-8">
        <img
          className="object-cover w-48 h-48 transition duration-300 rounded-lg shadow-xl filter grayscale hover:grayscale-0"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 transition duration-300 rounded-lg shadow-xl filter sepia hover:sepia-0"
          src="/img/bike.jpg"
          alt="bike"
        />
        <img
          className="object-cover w-48 h-48 transition duration-300 rounded-lg shadow-xl filter invert hover:invert-0"
          src="/img/bike.jpg"
          alt="bike"
        />
      </div>
      <div className="relative w-full mx-16 mt-8 h-96">
        <div className="absolute top-0 left-0 w-full h-full py-8">
          <img
            className="object-cover w-full shadow-xl rounded-2xl h-80 filter"
            src="/img/bike.jpg"
            alt="bike"
          />
        </div>
        <div className="relative flex h-full overflow-x-auto space-x-80 ">
          <div className="flex-shrink-0 w-full rounded-2xl" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-grayscale" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-hue-rotate-90" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-saturate-200" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-invert" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-sepia" />
          <div className="flex-shrink-0 w-1/3 border-4 border-black rounded-2xl backdrop-filter backdrop-blur-lg" />
          <div className="flex-shrink-0 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default BackdropFilters;
