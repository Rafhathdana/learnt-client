import React, { Fragment, useState } from "react";
import {
  FunnelIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
const sidebarMenu = [
  { title: "Profile", link: "/", icon: <UserCircleIcon /> },
  { title: "Profile1", link: "/hjbmn", icon: <UserCircleIcon /> },
  { title: "Profile2", link: "/", icon: <UserCircleIcon /> },
];
export default function ProfileLayout({ children, tutor = false }) {
  const user = useSelector((state) => (tutor ? state.tutor : state.user));
  const { pathname } = useLocation();
  const [mobileFilterOpen, setmobileFilterOpen] = useState(false);
  return (
    <div className="bg-white nexa-font">
      <div>
        <Transition.Root show={mobileFilterOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setmobileFilterOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setmobileFilterOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      <li>
                        <Link>Profile</Link>
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <main className="mx-auto px-4 sm-px-6 lg:px-13">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Account
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setmobileFilterOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <section className="pb-24 pt-6" aria-labelledby="products-heading">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  className="border-b overflow-hidden py-10 border rounded-lg border-gray-200 text-sm font-medium text-gray-900"
                  role="list"
                >
                  <li className="flex pl-10">
                    <h1 className="text-3xl font-bold"></h1>
                  </li>
                  <li className="flex w-full flex-col pb-10 items-center justify-center">
                    <UserCircleIcon className="w-30 text-gray-300" />
                    <h1 className="font-extra-bold text-md capitalize">
                      {user.name}
                    </h1>
                    <h1 className="font-extra-bold text-md text-gray-400">
                      {user.email}
                    </h1>
                  </li>
                  {sidebarMenu.map((option, index) => {
                    <li
                      key={index}
                      className="flex border-b last:border-none items-center first:pt-2"
                    >
                      <Link
                        className={`${
                          option.link === pathname
                            ? "bg-gray-100 text-black"
                            : ""
                        } font-bold items-center flex gap-2 py-3 pl-10 text-gray-600 hover:text-black hover:bg-gray-100 text-lg w-full`}
                        to={option.link}
                      >
                        <span className="w-6">{option.icon}</span>
                        {option.title}
                      </Link>
                    </li>;
                  })}
                </ul>
                <ul
                  role="list"
                  className="border-b overflow-hidden mt-10 py-5 border rounded-lg border-gray-200 text-sm font-medium text-gray-900"
                >
                  <li className="flex pl-5">
                    <h1 className="text-3xl font-bold"></h1>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
