import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";

function SettingsIcon() {
  return (
    <>
      <Menu
        as="div"
        className="relative flex justify-end text-left z-1 m-2 rounded"
      >
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <CogIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Dark Mode
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Light Mode
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default SettingsIcon;
