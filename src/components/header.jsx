import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MENU_ITEMS } from "../utils";
import Heading from "./heading";

const MobileMenuContent = ({ mobileMenu }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        mobileMenu ? "block" : "hidden"
      } bg-black text-white absolute w-full lg:hidden`}
    >
      <ul className="grid grid-cols-2 p-4 sm:grid-cols-4  md:space-x-8 md:border-0">
        <div>
          {MENU_ITEMS.slice(0, 5).map((menuItem) => (
            <li key={menuItem?.title}>
              <Link
                href={menuItem.path}
                className={`block py-2 pl-3 pr-4 ${
                  router?.route?.includes(menuItem?.path)
                    ? "text-amber-300 border-b-4 font-bold"
                    : "text-white"
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
                      ? "text-blue-700 border-b-4"
                      : "text-gray-900"
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

const MenuItem = ({ menuItem }) => {
  const router = useRouter();
  return (
    <li>
      <Link
        href={menuItem.path}
        className={`block py-2 pl-3 pr-4 ${
          router?.route?.includes(menuItem?.path)
            ? "text-blue-700 border-b-4 border-b-slate-900 dark:text-white dark:border-b-slate-50"
            : "text-gray-900 dark:text-white"
        } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
        aria-current="page"
      >
        {menuItem.title}
      </Link>
    </li>
  );
};

const SubMenuItem = ({
  menuItem,
  subMenuVisible,
  toggleSubMenu,
  subMenuItemRef,
}) => {
  return (
    <li key={menuItem?.title}>
      <div
        className={`group relative ${
          subMenuVisible ? "text-blue-700" : "text-gray-900"
        } md:(p-0 dark:(text-gray-900 bg-transparent)) rounded bg-transparent text-base`}
        ref={subMenuItemRef}
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
              subMenuVisible ? "rotate-180" : "rotate-0"
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
      </div>
    </li>
  );
};

const HorizontalSubMenu = ({ subMenuVisible }) => {
  return (
    <ul
      className={`${
        subMenuVisible ? "block" : "hidden"
      } dark:bg-gray-900 absolute z-10 w-full rounded-lg bg-black p-2 text-white shadow-md lg:bg-white lg:text-black`}
    >
      {MENU_ITEMS &&
        MENU_ITEMS[MENU_ITEMS.length - 1]?.subItems?.map((subItem) => (
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
  );
};

const extraStyles = `
   margin-left: 1rem;
  `;

export const HamburgerComponent = ({
  mobileNav,
  toggleHamburgerMenu,
  dimension = "h-6 w-6",
  title,
}) => {
  return (
    <div
      className={`w-auto  md:w-auto lg:hidden`}
      onClick={toggleHamburgerMenu}
    >
      <button
        type="button"
        className="text-gray-900 block focus:outline-none dark:text-white"
      >
        {!mobileNav ? (
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={dimension}
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
            {title && (
              <Heading
                content="Table Of Content"
                headingType="h6"
                // customStyle={tw`ml-4`}
                customStyle={extraStyles}
              />
            )}
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={dimension}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>
    </div>
  );
};

// menuItem?.path == router?.route
// router?.route.includes(menuItem?.path)
const Header = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const subMenuItemRef = useRef(null);

  const toggleSubMenu = useCallback(() => {
    setSubMenuVisible(!subMenuVisible);
  }, [subMenuVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subMenuItemRef?.current &&
        !subMenuItemRef?.current?.contains(event?.target)
      ) {
        // just close the large screen dropdown only
        setSubMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleSubMenu]);

  const toggleHamburgerMenu = () => {
    setMobileNav(!mobileNav);
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
        subMenuItemRef={subMenuItemRef}
      />
    );
  });

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 ">
      {/* Navbar bg color set */}
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            WebSchoolJs
          </span>
        </Link>

        {/* Hamburger menu */}
        <HamburgerComponent
          mobileNav={mobileNav}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />

        {/* Large screen menu */}
        <div className={`hidden w-full  lg:block lg:w-auto`}>
          <ul
            className="border-gray-100 dark:border-gray-700 dark:bg-gray-800  
            md:dark:bg-gray-900 mt-4 flex flex-col rounded-lg border p-4
           font-medium md:mt-0 
          md:flex-row md:space-x-8 md:border-0 md:p-0"
          >
            {menus}
          </ul>
        </div>
      </div>

      {/* Large screen horizontal submenu on click on More btn */}
      {subMenuVisible && <HorizontalSubMenu subMenuVisible={subMenuVisible} />}

      {/* Mobile screen menu, 2-3 column layout of HTML, CSS, JS, GIT */}
      <MobileMenuContent mobileMenu={mobileNav} />
    </nav>
  );
};

export default Header;
