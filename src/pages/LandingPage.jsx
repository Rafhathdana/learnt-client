import { Link } from "react-router-dom";
import Counter from "../utils/Counter";
import { Dialog } from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Logo from "../components/common/Logo";
import { Contact, Explore, Tutor, User } from "../api/link";

const navigation = [
  { name: "Home", href: User },
  { name: "Explore", href: Explore },
  { name: "Teach", href: Tutor },
  { name: "Contact", href: Contact },
];
const LandingPage = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Where knowledge blossoms and wisdom flourishes.",
        "Embark on a learning adventure with LearnT leading the way.",
        "Discover the universe's secrets with LearnT.",
        "Unleash the power of knowledge through LearnT.",
        "Experience the joy of discovery through LearnT.",
        "LearnT: Empowering minds to reach new heights.",
        "LearnT: Where ideas come to life and minds thrive.",
        "LearnT: Nurturing minds to create a brighter tomorrow.",
        "LearnT: Unlocking the potential within every mind.",
        "Enlighten your mind with LearnT's boundless knowledge.",
        "Explore the world's wonders with LearnT.",
      ],
      typeSpeed: 80,
      backDelay: 700,
      smartBackspace: true,
      backspeed: 20,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy(); //to destroy typed instance to stop and clean animation
    };
  }, []);

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
              <Logo size="1.3" />
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6  text-grey-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="../signin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenu}
          onClose={setMobileMenu}
        >
          <div className="fixed inset-0 z-50">
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to={User} className="-m-1.5 p-1.5">
                  <span className="flex items-center gap-2 border-2 border-blue-500 px-4 rounded-xl font-bold">
                    <AcademicCapIcon className="h-8 w-8 text-blue-500" />
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
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
              <Link to={Tutor} className="font-semibold text-indigo-600">
                Join Our Team <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h1 className="text-3xl font-semibold tracking-tight nexa-font text-gray-900 sm:text-6xl">
            LearnT Learning
          </h1>
          <p className="mt-3 text-lg leading-8 text-gray-600 typed-js-color">
            {" "}
            <span className="font-semibold" ref={el} />
          </p>
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
              to="/user#about"
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
