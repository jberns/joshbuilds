import Link from 'next/link';
import 'twin.macro';

interface ISocialLinkProps {
  children: React.ReactNode;
  href: string;
}

export const SocialLink = ({ children, href }: ISocialLinkProps) => {
  return (
    <Link href={href} passHref>
      <a
        tw="
      text-gray-900 
      p-2 rounded-full flex items-center justify-center
      transform transition duration-200 
      bg-gradient-to-br from-amber-400 to-orange-600 
      hover:( shadow-xl scale-110 )
      focus:( outline-none ring-2 ring-orange-600 ring-offset-white ring-offset-2 )
      dark:( text-gray-100 from-pink-400 to-indigo-700 )
      focus:dark:( ring-purple-400 ring-offset-black/100 ring-offset-2 )
    "
      >
        {children}
      </a>
    </Link>
  );
};
