import { NextSeo } from "next-seo";
import { IoPauseOutline } from "react-icons/io5";
import Heading  from "../components/heading";

export default function Home() {
  const SEO = {
    title: "Next JS Template",
    description: "Next JS Template with Tailwind CSS and React Icons",

    openGraph: {
      title: "Next JS Template",
      description: "Next JS Template with Tailwind CSS and React Icons",
      type: "website",
      locale: "en_IN",
      url: "mridul.tech",
      site_name: "Next JS Template",
    },
  };

  return (
    <>
      <header>
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg  focus:text-orange-700 dark:bg-neutral-500 dark:text-slate-200 md:flex-wrap md:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              <button
                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY"
              data-te-collapse-item
            >
              <ul
                className="mr-auto flex flex-col lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-orange-600 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    href="#!"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-orange-600 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    href="#!"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-orange-600 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    href="#!"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-orange-600 dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    href="#!"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className="flex min-h-screen flex-col py-2 items-center justify-center">
          ARJUN
        </div> */}

      <Heading
        content="Tutorials we Offer"
        headingType="h1"
        // customStyle={{fontSize: "60px",}}
      />

        <div className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
          <h1 className="mb-6 text-5xl font-bold">Heading</h1>
          <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <NextSeo {...SEO} />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-5xl font-bold">
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js
            </a>{" "}
            Template Home Page!
          </h1>

          <p className="mt-5 text-2xl">
            Get started by editing{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="p-3 flex justify-center items-center gap-1 flex-col sm:flex-row bg-white">
          <span className="flex items-center">
            Template by{" "}
            <a
              className="ml-1 font-semibold"
              href="https://www.mridul.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Mridul
            </a>
            <span className="px-3 ml-1">
              <IoPauseOutline size={28} />
            </span>
          </span>
          <span>
            Made with ❤ {"& "}
            <a
              className="ml-1 font-semibold"
              href="https://github.com/Mridul2820/next-template"
              target="_blank"
              rel="noreferrer"
            >
              {"<Code/>"}
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
