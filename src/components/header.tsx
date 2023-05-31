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
    typeof window !== "undefined" ? window?.innerWidth : 0
  );

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

  const menus = MENU_ITEMS.map((menuItem) => (
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
  ));

  // const windowSize = typeof window !== 'undefined' && window?.innerWidth;
  console.log('windowSize', windowSize);
  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            JsWebSchool
          </span>
        </Link>

        <div className={`w-full md:w-auto ${windowSize < 900 ? "hidden" : "block"}`} id="navbar-dropdown">
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
