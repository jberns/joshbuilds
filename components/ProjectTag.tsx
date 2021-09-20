import 'twin.macro';
import tw, { TwStyle } from 'twin.macro';
import { TechTypes } from '../pages/projects';

type TagColor = {
  [key in TechTypes]: TwStyle;
};

interface IProjectTag {
  technology: TechTypes;
}

export const ProjectTag = ({ technology }: IProjectTag) => {
  const colors: TagColor = {
    [TechTypes.HTML]: tw`text-white bg-purple-600 border-purple-400`,
    [TechTypes.TailwindCSS]: tw`text-white bg-cyan-500 border-cyan-400`,
    [TechTypes.React]: tw`text-black bg-[#61dafb] border-cyan-300`,
    [TechTypes.NEXTJS]: tw`text-white bg-[#0076ff] border-blue-500`,
    [TechTypes.Python]: tw`text-black bg-[#ffd343] border-amber-200`,
    [TechTypes.Redis]: tw`text-white bg-[#a51f17] border-red-600`,
    [TechTypes.AirTable]: tw`text-white bg-[#f82b60] border-pink-500`,
    [TechTypes.GraphQL]: tw`text-white bg-[#e10098] border-pink-500`,
    [TechTypes.TypeScript]: tw`text-white bg-[#3178c6] border-pink-500`,
    [TechTypes.NodeJS]: tw`text-white bg-[#026e00] border-pink-500`,
    [TechTypes.Spring]: tw`text-black bg-[#6db33f] border-pink-500`,
  };

  return (
    <span
      key={technology}
      tw="py-0.5 px-1 font-medium text-xs rounded-sm shadow-sm"
      css={[colors[technology]]}
    >
      {technology}
    </span>
  );
};
