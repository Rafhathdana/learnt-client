import { Link } from "react-router-dom";

const LandingPage = () => {
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
            >
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
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            LearnT Learning
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
