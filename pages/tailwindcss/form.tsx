import { NextPage } from 'next';

const Form: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pb-10 bg-gray-200">
      <div className="flex flex-col mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 p-2 mx-auto text-gray-200 shadow-lg bg-gradient-to-tr from-purple-700 to-pink-600 rounded-2xl"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 className="mt-12 text-4xl font-bold text-center text-gray-900">
          Create your account
        </h1>
        <p className="mt-4 text-lg text-center text-gray-500">
          Already Registered?{' '}
          <a
            className="font-semibold text-purple-700 hover:text-purple-500"
            href="#"
          >
            Sign in &rarr;
          </a>
        </p>
        <div className="px-6 py-8 mt-12 bg-white rounded-lg shadow sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="styling-forms"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="styling-forms"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company-size"
                className="block text-sm font-medium text-gray-700"
              >
                Company Size
              </label>
              <div className="mt-1">
                <select
                  name="company-size"
                  id="company-size"
                  className="styling-forms"
                >
                  <option value="">Please select</option>
                  <option value="small">1 to 10 employees</option>
                  <option value="medium">11 to 50 employees</option>
                  <option value="large">50+ employees</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
                className="text-purple-500 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                htmlFor="terms-and-privacy"
                className="block ml-2 text-sm text-gray-900"
              >
                I agree to the{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
