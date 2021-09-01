import { gradients } from './gradients';
import styles from './Lockup.module.css';

export const HalfFlex = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1 bg-yellow-500" />
        <div className="flex-1 w-full bg-blue-800" />
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="relative w-full h-12 bg-red-500"></div>
      </div>
    </div>
  );
};

export const Lockup = () => {
  return (
    <div className={`grid ${styles.root}`}>
      <div
        className={`flex w-full col-start-2 col-end-3 row-start-2 row-end-4 pl-4 -mr-8 lg:col-start1 lg:col-end-5 g:row-end-5 lg:py-10 xl:py-1 sm:mr-0 sm:pl-0 ${"'-ml-8 pr-4 sm:ml-0 sm:pr-0"}`}
      >
        <div className="flex-none w-full bg-gray-100 rounded-3xl" />
        <div
          className={`w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br ${gradients['orange'][0]} rotate-1`}
        ></div>
      </div>
      <div
        className={`relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0 ${'pr-8'}`}
      >
        <div className="mx-auto my-auto bg-gray-200 rounded-lg h-28 w-96"></div>
      </div>
      <div className="relative self-center w-full col-start-1 col-end-4 row-start-3 row-end-4 pb-8 lg:w-auto md:px-8 lg:px-0 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-5 lg:pb-0">
        <div className="mx-auto my-auto bg-red-800 rounded-lg h-96 w-96"></div>
      </div>
    </div>
  );
};
