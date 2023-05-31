/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import { MENU_ITEMS } from '../utils';
import { useState, useEffect } from 'react';

// menuItem?.path == router?.route
// router?.route.includes(menuItem?.path)
const Header: FC = () => {
  const [windowSize, setWindowSize] = useState(() =>
    typeof window !== 'undefined' ? window?.innerWidth : 0,
  );

  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize(window?.innerWidth);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const router: NextRouter = useRouter();

  // const moreBtnDropdwn = <></>;

  const menus = MENU_ITEMS.map((menuItem) => {
    return !menuItem.subItems ? (
      <li key={menuItem?.title}>
        <Link
          href={menuItem.path}
          className={`block py-2 pl-3 pr-4 ${
            router?.route?.includes(menuItem?.path)
              ? 'text-blue-700 border-b-4'
              : 'text-gray-900'
          } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
          aria-current="page"
        >
          {menuItem.title}
        </Link>
      </li>
    ) : (
      <li key={menuItem?.title}>
        <div
          className={`group relative ${
            subMenuVisible ? 'text-blue-700 border-b-4' : 'text-gray-900'
          } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
        >
          <button
            type="button"
            className="flex items-center py-2 pl-3 pr-4 focus:outline-none"
            onClick={toggleSubMenu}
          >
            {menuItem.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 h-5 w-5 transition-transform ${
                subMenuVisible ? 'rotate-180' : 'rotate-0'
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </button>
          <ul
            className={`${
              subMenuVisible ? 'block' : 'hidden'
            } dark:bg-gray-900 absolute left-0 mt-2 rounded-lg bg-white p-2 shadow-md`}
          >
            {menuItem.subItems.map((subItem) => (
              <li key={subItem.title}>
                <Link
                  href={subItem.path}
                  className="text-sm text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 dark:text-white"
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  });

  console.log('windowSize', windowSize);

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            JsWebSchool
          </span>
        </Link>

        <div
          className={`w-full ${windowSize > 900 ? 'block' : 'block'} md:w-auto`}
          id="navbar-dropdown"
        >
          {/* <div className="hidden  w-full md:block md:w-auto" id="navbar-dropdown"> */}
          <ul className="border-gray-100 bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            {menus}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
