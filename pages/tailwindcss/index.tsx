import { NextPage } from 'next';
import Link from 'next/link';

const TailwindCSS: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid space-y-4">
        <Link href="/tailwindcss/blurry-backgrounds">
          <div className="p-2 bg-gray-300 rounded cursor-pointer">
            Blurry Background
          </div>
        </Link>
        <Link href="/tailwindcss/responsive-tile-grid">
          <div className="p-2 bg-gray-300 rounded cursor-pointer">
            Responsive Tile Grid
          </div>
        </Link>
        <Link href="/tailwindcss/box-decoration">
          <div className="p-2 bg-gray-300 rounded cursor-pointer">
            Box Decoration
          </div>
        </Link>{' '}
        <Link href="/tailwindcss/background-blending">
          <div className="p-2 bg-gray-300 rounded cursor-pointer">
            Background Blending
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TailwindCSS;
