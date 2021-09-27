import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import 'twin.macro';
import { CodingSVG } from '../svg/svgs';

export const Development = () => {
  return (
    <div tw="flex flex-col justify-center items-center">
      <div tw="flex flex-col mx-auto justify-center lg:flex-row">
        <div tw="w-full px-4 sm:px-6 md:px-8 lg:w-1/2">
          <div tw="w-12 h-12 flex justify-center items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600">
            <FontAwesomeIcon icon={faCode} tw="text-gray-100 text-2xl" />
          </div>
          <h2 tw="mt-8 sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 dark:text-purple-400">
            Development
          </h2>
          <h1 tw="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight dark:text-gray-100">
            Diverse set of programming languages to solve difficult technical
            problem.
          </h1>
          <p tw="mt-8 max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 text-gray-800 dark:text-gray-500">
            With over half a dozen projects under my belt I have experience with
            a large number of tools and 3rd party APIs along with a breadth of
            tech stacks that I can leverage to solve problems
          </p>
          <Link href="/projects" passHref>
            <a
              tw="
              mt-4 inline-flex text-lg font-medium transition-colors duration-200 rounded-md  
              text-violet-600
              sm:text-2xl 
              focus:(ring-2 ring-offset-gray-100 ring-offset-2 ring-current outline-none) 
              hover:text-violet-800
              dark:(text-violet-400 ring-offset-gray-900) 
              dark:hover:text-violet-200
            "
            >
              See my projects &rarr;
            </a>
          </Link>
        </div>
        <div tw="flex flex-col justify-center pt-10 space-y-10  max-w-full lg:w-1/3">
          <CodingSVG tw="mx-auto h-96 w-96 md:h-[30rem] md:w-[30rem]" />
        </div>
      </div>
      <div tw="flex flex-col justify-center pt-10 space-y-10 max-w-full lg:w-1/3">
        <div>
          <h2 tw="text-2xl font-medium text-center text-orange-600 uppercase">
            FrontEnd
          </h2>
          <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-4 mt-4 place-items-center gap-4">
            <i
              className="devicon-react-original"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-nextjs-original-wordmark"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-graphql-plain"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-tailwindcss-plain"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-javascript-plain"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-typescript-plain"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-html5-plain-wordmark"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>

            <i
              className="devicon-css3-plain-wordmark"
              tw="p-3 text-4xl text-white rounded shadow from-orange-400 to-red-600 bg-gradient-to-br"
            ></i>
          </div>
        </div>
        <div>
          <h2 tw="text-2xl font-medium text-center uppercase text-cyan-600">
            Backend
          </h2>
          <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-3 mt-4 place-items-center gap-4">
            <i
              className="devicon-nodejs-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-green-400 to-cyan-600"
            ></i>

            <i
              className="devicon-java-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-green-400 to-cyan-600"
            ></i>

            <i
              className="devicon-python-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-green-400 to-cyan-600"
            ></i>
          </div>
        </div>
        <div>
          <h2 tw="text-2xl font-medium text-center text-indigo-600 uppercase">
            Database
          </h2>
          <div tw="sm:mx-auto grid grid-cols-3 md:grid-cols-4 mt-4 place-items-center gap-4">
            <i
              className=" devicon-postgresql-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-blue-400 to-indigo-600"
            ></i>

            <i
              className=" devicon-mysql-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-blue-400 to-indigo-600"
            ></i>

            <i
              className=" devicon-mongodb-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-blue-400 to-indigo-600"
            ></i>

            <i
              className=" devicon-redis-plain"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-blue-400 to-indigo-600"
            ></i>
          </div>
        </div>
        <div>
          <h2 tw="text-2xl font-medium text-center text-pink-600 uppercase">
            Source Control
          </h2>
          <div tw="flex justify-center mt-4 space-x-6">
            <i
              className=" devicon-github-original"
              tw="p-3 text-4xl text-white rounded shadow bg-gradient-to-br from-indigo-400 to-pink-600"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
