import { NextPage } from 'next';

const Theme: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="relative w-full max-w-4xl py-10 m-5 overflow-hidden theme-swiss bg-skin-fill rounded-2xl">
        <img
          className="absolute inset-0 object-cover filter grayscale opacity-30"
          src="/img/macbook.jpg"
          alt=""
        />
        <div className="absolute inset-0 from-skin-hue to-transparent bg-gradient-to-br"></div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mx-5 mt-5 text-4xl font-bold text-center text-skin-base">
            Focus on your content. <br /> We handle the distribution.
          </h1>
          <p className="max-w-xl mx-5 mt-3 text-center text-skin-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <div className="mt-10 space-x-3">
            <button className="px-8 py-3 text-sm font-semibold rounded-lg shadow-sm text-skin-inverted hover:bg-skin-button-accent-hover bg-skin-button-accent">
              Get Started
            </button>
            <button className="px-8 py-3 text-sm font-semibold rounded-lg shadow-sm bg-skin-button-muted text-skin-base bg-opacity-60 hover:bg-opacity-70">
              Live demo
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-4xl py-10 m-5 overflow-hidden bg-skin-fill rounded-2xl">
        <img
          className="absolute inset-0 object-cover filter grayscale opacity-30"
          src="/img/macbook.jpg"
          alt=""
        />
        <div className="absolute inset-0 from-skin-hue to-transparent bg-gradient-to-br"></div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mx-5 mt-5 text-4xl font-bold text-center text-skin-base">
            Focus on your content. <br /> We handle the distribution.
          </h1>
          <p className="max-w-xl mx-5 mt-3 text-center text-skin-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <div className="mt-10 space-x-3 text-sm font-bold">
            <button className="px-8 py-3 rounded-lg shadow-sm text-skin-inverted hover:bg-skin-button-accent-hover bg-skin-button-accent">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg shadow-sm bg-skin-button-muted text-skin-base bg-opacity-60 hover:bg-opacity-70">
              Live demo
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-4xl py-10 m-5 overflow-hidden theme-neon bg-skin-fill rounded-2xl">
        <img
          className="absolute inset-0 object-cover filter grayscale opacity-30"
          src="/img/macbook.jpg"
          alt=""
        />
        <div className="absolute inset-0 from-skin-hue to-transparent bg-gradient-to-br"></div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mx-5 mt-5 text-4xl font-bold text-center text-skin-base">
            Focus on your content. <br /> We handle the distribution.
          </h1>
          <p className="max-w-xl mx-5 mt-3 text-center text-skin-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <div className="mt-10 space-x-3 text-sm font-bold">
            <button className="px-8 py-3 rounded-lg shadow-sm text-skin-inverted hover:bg-skin-button-accent-hover bg-skin-button-accent">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg shadow-sm bg-skin-button-muted text-skin-base bg-opacity-60 hover:bg-opacity-70">
              Live demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
