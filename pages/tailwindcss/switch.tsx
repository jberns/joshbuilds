import { Switch } from '@headlessui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const SwitchComponent: NextPage = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch.Group
      as="div"
      className="flex items-center justify-center w-full min-h-screen bg-gradient-to-tl from-cyan-700 to-green-600"
    >
      <div className="flex items-center justify-between px-2 py-5 bg-white rounded-lg shadow-lg">
        <div className="flex-grow px-5 flex-flex-col">
          <Switch.Label as="h2" className="text-sm font-medium" passive>
            Auto Renew Domain
          </Switch.Label>
          <Switch.Description as="p" className="text-sm text-gray-500">
            Automatically renew this domain before it expires
          </Switch.Description>
        </div>

        <Switch
          checked={isEnabled}
          onChange={setIsEnabled}
          className={`${
            isEnabled ? 'bg-cyan-500' : 'bg-gray-200'
          } relative mx-5 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400`}
        >
          <span className="sr-only">Auto renew</span>
          <span
            aria-hidden="true"
            className={`${
              isEnabled ? 'translate-x-5' : 'translate-x-0'
            } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
          ></span>
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default SwitchComponent;
