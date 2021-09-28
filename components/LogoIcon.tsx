import Link from 'next/link';
import 'twin.macro';
import tw from 'twin.macro';

interface ILogoIcon {
  type?: 'static';
}

const LogoIcon = ({ type }: ILogoIcon) => {
  return (
    <Link href="/" passHref>
      <a
        tw="
          flex justify-center items-center h-8 w-8 
          font-square text-gray-900 cursor-pointer shadow-md rounded-md 
          bg-gradient-to-br from-fuchsia-400 to-indigo-500
          dark:( text-gray-100 from-fuchsia-500 to-indigo-700 )
          focus:dark:( ring-purple-400 ring-offset-black/100 ring-offset-2 )
          "
        css={[
          type !== 'static' &&
            tw`hover:( shadow-xl scale-110 ) focus:( outline-none ring-2 ring-purple-600 ring-offset-purple-300 ring-offset-2 )`,
        ]}
      >
        <div tw="text-base font-bold">JB</div>
      </a>
    </Link>
  );
};

export { LogoIcon };
