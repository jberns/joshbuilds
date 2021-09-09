import { NextPage } from 'next';

const StackedIsolation: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-16 space-y-20 bg-white">
      <div className="flex items-center justify-center w-full h-32 max-w-5xl bg-gray-700 isolate rounded-2xl hover:isolation-auto">
        <div className="flex items-center justify-center -space-x-16">
          <div className="w-48 h-48 bg-purple-500 rounded-full"></div>
          <div className="w-48 h-48 bg-green-500 rounded-full mix-blend-lighten"></div>
        </div>
      </div>
      <div className="relative w-full h-64">
        <div className="flex flex-col items-center w-full -space-y-24 isolate">
          <div className="flex space-x-2">
            <div className="z-50 border-[20px] border-blue-500 rounded-full w-44 h-44"></div>
            <div className="z-40 border-[20px] border-black rounded-full w-44 h-44"></div>
            <div className="z-30 border-[20px] border-red-500 rounded-full w-44 h-44"></div>
          </div>
          <div className="flex space-x-2">
            <div className="z-20 border-[20px] border-yellow-500 rounded-full w-44 h-44"></div>
            <div className="z-10 border-[20px] border-green-500 rounded-full w-44 h-44"></div>
          </div>
        </div>
        <div className="absolute z-30 hidden w-full h-24 bg-yellow-100 top-20"></div>
      </div>
    </div>
  );
};

export default StackedIsolation;
