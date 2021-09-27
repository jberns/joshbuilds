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
      bg-gradient-to-br
      ring-offset-2
      shadow
      hover:(shadow-xl scale-110 from-fuchsia-400 to-indigo-500)
      focus:(outline-none ring-2 ring-purple-600 ring-offset-white)
      dark:(text-gray-100)
      focus:dark:(ring-purple-400 ring-offset-black/100)
    "
      >
        {children}
      </a>
    </Link>
  );
};
