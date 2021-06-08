import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HomeIcon, HeartIcon } from "@heroicons/react/outline";

// navigation links within the application
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Liked", href: "/wish-list", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainNavigation(props) {
  function clickNavLink(event) {
    navigation.map((nav) =>
      nav.name === event.name ? (nav.current = true) : (nav.current = false)
    );
  }

  return (
    <Fragment>
      <Disclosure
        as="nav"
        className="hidden sm:block bg-gray-800 sticky-header"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <button
                            onClick={() => clickNavLink(item)}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm text-white font-medium nav-item focus:outline-none"
                            )}
                          >
                            {item.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <footer className="sm:invisible md:invisible lg:invisible p-4 bg-gray-800 footer">
        <div className="grid grid-cols-2 gap-4">
          <Link href="/">
            <button className="flex justify-center focus:outline-none">
              <HomeIcon className="h-6 w-6"></HomeIcon>
            </button>
          </Link>

          <Link href="/wish-list">
            <button className="flex justify-center focus:outline-none">
              <HeartIcon className="h-6 w-6"></HeartIcon>
            </button>
          </Link>
        </div>
      </footer>
    </Fragment>
  );
}

export default MainNavigation;
