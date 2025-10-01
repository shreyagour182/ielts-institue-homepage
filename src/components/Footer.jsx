const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Pricing
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Privacy
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {/* Social Media Icons - Placeholder */}
          <span className="text-gray-400 hover:text-white transition duration-150">FB</span>
          <span className="text-gray-400 hover:text-white transition duration-150">TW</span>
          <span className="text-gray-400 hover:text-white transition duration-150">LI</span>
        </div>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} IELTS Prep. Institute, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;