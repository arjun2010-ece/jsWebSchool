/* eslint-disable @next/next/no-img-element */
import { type FC } from "react";
import Link from "next/link";
import { useRouter, type NextRouter } from "next/router";
import { MENU_ITEMS } from "../utils";

const Header: FC = () => {
  const router: NextRouter = useRouter();

  const menus = MENU_ITEMS.map((menuItem) => (
    <li key={menuItem?.title}>
      <Link
        href={menuItem.path}
        className={`block py-2 pl-3 pr-4 ${
          menuItem?.path == router?.route ? "border-b-4 text-blue-700" : "text-gray-900"
        } bg-transparent rounded md:(p-0 dark:(text-gray-900 bg-transparent))`}
        aria-current="page"
      >
        {menuItem.title}
      </Link>
    </li>
  ));

  return (
    <nav 
      className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JsWebSchool
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menus}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
