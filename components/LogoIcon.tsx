import Link from 'next/link';
import 'twin.macro';

const LogoIcon = () => {
  return (
    <Link href="/" passHref>
      <a
        tw="
        flex justify-center items-center h-10 w-10 
        font-square text-gray-900 cursor-pointer shadow-md rounded-md 
        transform transition duration-200 
        bg-gradient-to-br from-amber-400 to-orange-600 
        hover:( shadow-xl scale-110 )
        focus:( outline-none ring-2 ring-orange-600 ring-offset-purple-300 ring-offset-2 )
        dark:( text-gray-100 from-pink-400 to-indigo-700 )
        focus:dark:( ring-purple-400 ring-offset-black/50 ring-offset-2 )
        "
      >
        <div tw="text-xl font-bold">JB</div>
      </a>
    </Link>
  );
};

export { LogoIcon };
