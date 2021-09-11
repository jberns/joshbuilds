import { NextPage } from 'next';
import Link from 'next/link';

const TailwindCSS: NextPage = () => {
  const projects = [
    { name: 'Blurry Background', url: 'blurry-backgrounds' },
    { name: 'Responsive Tile Grid', url: 'responsive-tile-grid' },
    { name: 'Box Decoration', url: 'box-decoration' },
    { name: 'Background Blending', url: 'background-blending' },
    { name: 'Background Gradient', url: 'background-gradient' },
    { name: 'iPhone', url: 'iphone' },
    { name: 'Slick Fits', url: 'slick-fits' },
    { name: 'Form', url: 'form' },
    { name: 'Dropdown', url: 'dropdown' },
    { name: 'Switch', url: 'switch' },
    { name: 'Labels', url: 'floating-labels' },
    { name: 'Stacked Layouts', url: 'stacked' },
    { name: 'Stories', url: 'stories' },
    { name: 'Backdrop Filters', url: 'backdrop-filters' },
    { name: 'Theme', url: 'theme' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid space-y-4">
        {projects.map((project) => {
          return (
            <Link href={`/tailwindcss/${project.url}`}>
              <div className="p-2 bg-gray-300 rounded cursor-pointer">
                {project.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TailwindCSS;
