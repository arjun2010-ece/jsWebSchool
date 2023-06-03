/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import { MENU_ITEMS } from '../utils';
import { useState } from 'react';

type MobileMenuContentProps = {
  mobileMenu: boolean;
};

const MobileMenuContent: FC<MobileMenuContentProps> = ({ mobileMenu }) => {
  const router: NextRouter = useRouter();
  return (
    <div
      className={`${
        mobileMenu ? 'block' : 'hidden'
      } bg-black text-white lg:hidden`}
    >
      <ul className="grid grid-cols-2 p-4 sm:grid-cols-4  md:space-x-8 md:border-0">
        <div>
          {MENU_ITEMS.slice(0, 5).map((menuItem) => (
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
          ))}
        </div>
        <div>
          {MENU_ITEMS &&
            MENU_ITEMS[MENU_ITEMS.length - 1]?.subItems?.map((subItem) => (
              <li key={subItem?.title}>
                <Link
                  href={subItem.path}
                  className={`block py-2 pl-3 pr-4 ${
                    router?.route?.includes(subItem?.path)
                      ? 'text-blue-700 border-b-4'
                      : 'text-gray-900'
                  } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
                  aria-current="page"
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

type MenuProps = { title: string; path: string; subItems?: MenuProps[] };
type MenuItemProps = {
  menuItem: MenuProps;
  subMenuVisible?: boolean;
  toggleSubMenu?: () => void;
};

const MenuItem: FC<MenuItemProps> = ({ menuItem }) => {
  const router: NextRouter = useRouter();
  return (
    <li>
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
  );
};

const SubMenuItem: FC<MenuItemProps> = ({
  menuItem,
  subMenuVisible,
  toggleSubMenu,
}) => {
  return (
    <li key={menuItem?.title}>
      <div
        className={`group relative ${
          subMenuVisible ? 'text-blue-700 border-b-4' : 'text-gray-900'
        } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
      >
        <button
          type="button"
          className="hidden items-center py-2 pl-3 pr-4 focus:outline-none md:flex"
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
          } dark:bg-gray-900 absolute left-0 mt-2 rounded-lg bg-black p-2 text-white shadow-md lg:bg-white lg:text-black`}
        >
          {menuItem?.subItems?.map((subItem) => (
            <li key={subItem.title}>
              <Link
                href={subItem.path}
                className="text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 text-sm dark:text-white"
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

// menuItem?.path == router?.route
// router?.route.includes(menuItem?.path)
const Header: FC = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [mobileNav, subMobileNav] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    subMobileNav(!mobileNav);
  };

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const menus = MENU_ITEMS.map((menuItem) => {
    return !menuItem.subItems ? (
      <MenuItem key={menuItem?.title} menuItem={menuItem} />
    ) : (
      <SubMenuItem
        key={menuItem?.title}
        menuItem={menuItem}
        subMenuVisible={subMenuVisible}
        toggleSubMenu={toggleSubMenu}
      />
    );
  });

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 bg-grey-dark">
      {/* Navbar bg color set */}
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            JsWebSchool
          </span>
        </Link>
        {/* Hamburger menu */}
        <div
          className={`w-auto  md:w-auto lg:hidden`}
          onClick={toggleHamburgerMenu}
        >
          <button
            type="button"
            className="text-gray-900 block focus:outline-none dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Large screen menu */}
        <div className={`hidden w-full  lg:block lg:w-auto`}>
          <ul
            className="border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800  
            md:dark:bg-gray-900 md:bg-slate-400 mt-4 flex flex-col rounded-lg border p-4
           font-medium md:mt-0 
          md:flex-row md:space-x-8 md:border-0 md:p-0"
          >
            {menus}
          </ul>
        </div>
      </div>

      {/* Mobile screen menu */}
      <MobileMenuContent mobileMenu={mobileNav} />
    </nav>
  );
};

export default Header;
