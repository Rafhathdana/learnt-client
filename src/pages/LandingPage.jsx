import { Link } from "react-router-dom";
import Counter from "../utils/Counter";
import { Dialog } from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const LandingPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="bg-white background-animation">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">LearnT Learning</span>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenu(true)}
            >
              {" "}
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">gffrg</div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="user/signin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenu} onClose={setMobileMenu}>
          <div className="fixed inset-0 z-50">
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="#" className="-m-1.5 p-1.5">
                  <span className="flex items-center gap-2 border-2 border-blue-500 px-4 rounded-xl font-bold">
                    <AcademicCapIcon class="h-8 w-8 text-blue-500" />
                    LearnT
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">tutor</div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </header>
      <div className="relateve isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 pt-6 sm:pt-24 lg:pt-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-md leading-6 text-gray-600 ring-1 ring-gray-900/30 hover:ring-gray-900/30">
              Teach, inspire, and grow with LearnT online leaning platform.
              <Link to="/#" className="font-semibold text-indigo-600">
                Join Our Team <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-24">
          <h1 className="text-3xl font-bold tracking-tight nexa-font text-gray-900 sm:text-6xl">
            LearnT Learning
          </h1>
          <p className="mt-3 text-lg leading-8 text-gray-600 typed-js-color"></p>
          <p className="mt-11 text-lg leading-8 text-gray-600">
            Embark on an adventure of learning, where every discovery enriches
            the mind and empowers the soul to reach new heights.{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/user"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Launch into learning
            </Link>
            <Link
              to="/#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 light:bg-gray-700" />
        <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 p-5 rounded-lg">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 hero-stats">
                <dt className="text-base leading-7 text-gray-600">
                  Courses sold every week
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight flex justify-center text-gray-900 sm:text-5xl">
                  <Counter value={724} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 hero-stats">
                <dt className="text-base leading-7 text-gray-600">
                  New users yearly
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight flex justify-center text-gray-900 sm:text-5xl">
                  <Counter value={704} />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 hero-stats">
                <dt className="text-base leading-7 text-gray-600">
                  New Tutors yearly
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight flex justify-center text-gray-900 sm:text-5xl">
                  <Counter value={744} />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;