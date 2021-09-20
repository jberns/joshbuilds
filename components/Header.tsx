import 'twin.macro';

interface IHeaderProps {
  // children: React.ReactNode;
  text: string;
}

export const Header = ({ text }: IHeaderProps) => {
  return (
    <h1 tw="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-100">
      {text}
    </h1>
  );
};
