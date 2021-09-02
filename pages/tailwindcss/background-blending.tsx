import { NextPage } from 'next';

const BackgroundBlending: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 mx-auto">
        <div className="flex space-x-16">
          <img
            className="object-cover rounded-lg shadow-xl w-80 h-80"
            src="/img/paint.jpg"
            alt="Picture of paint"
          />
          <img
            className="object-cover rounded-lg shadow-xl w-80 h-80"
            src="/img/building.jpg"
            alt="Picture of Building"
          />
        </div>
      </div>
      <div className="flex justify-center mt-16 space-x-10">
        <div className="relative max-w-full bg-blue-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/paint.jpg"
            alt="Picture of paint"
          />
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-darken"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full bg-blue-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/paint.jpg"
            alt="Picture of paint"
          />
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-lighten"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full bg-blue-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/paint.jpg"
            alt="Picture of paint"
          />
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-hard-light"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
      </div>
      <div className="flex justify-center mt-16 space-x-10">
        <div className="relative max-w-full bg-blue-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full bg-yellow-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full bg-red-500 rounded-lg shadow-2xl w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
      </div>
      <div className="flex justify-center mt-16 space-x-10">
        <div className="relative max-w-full rounded-lg shadow-2xl bg-gradient-to-tr from-blue-500 to-green-400 w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full rounded-lg shadow-2xl bg-gradient-to-tr from-yellow-500 to-red-400 w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
        <div className="relative max-w-full rounded-lg shadow-2xl bg-gradient-to-tr from-red-500 to-purple-400 w-80 h-80">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg mix-blend-overlay"
            src="/img/building.jpg"
            alt="Picture of building"
          />
        </div>
      </div>
      <div className="relative object-cover w-full max-w-4xl mt-16 mb-16 bg-blue-500 bg-center shadow-lg bg-blend-color-burn h-96 rounded-xl bg-texture">
        <h1 className="p-8 font-black text-white uppercase transform mx-w-3xl text-8xl -rotate-6 mix-blend-overlay filter blur-px">
          CSS blend modes are super cool!
        </h1>
      </div>
    </div>
  );
};

export default BackgroundBlending;
