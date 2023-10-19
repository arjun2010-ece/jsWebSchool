import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary-500 py-20 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col justify-center px-4 md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-bold">WebSchoolJS</h4>
          <p className="mt-2">
            Your ultimate resource for web development tutorials.
          </p>
        </div>
        <nav className="flex flex-col">
          <h6>Links</h6>
          <Link href="/" className="mr-4">
            Home
          </Link>

          <Link href="/about-us" className="mr-4">
            About
          </Link>
          <Link href="/contact-us" className="mr-4">
            Contact Us
          </Link>
          <Link href="/disclaimer" className="mr-4">
            Disclaimer
          </Link>

          <Link href="/privacy-policy" className="mr-4">
            Privacy Policy
          </Link>
          <Link href="/terms-service" className="mr-4">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
