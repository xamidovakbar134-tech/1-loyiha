const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] text-gray-300! py-12 px-6 md:px-16!  border-t! border-gray-800!">
      <div className="max-w-7xl! mx-auto! grid grid-cols-1 md:grid-cols-3! gap-12 text-left">
        {/* About JobPortal ustuni */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold! text-white tracking-tight!">
            About JobPortal
          </h3>
          <p className="text-base leading-relaxed max-w-sm text-gray-400">
            Your trusted platform for connecting with career opportunities.
          </p>
        </div>

        {/* Quick Links ustuni */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold! text-white tracking-tight!">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="hover:text-white! transition-colors! duration-200!"
              >
                Browse Jobs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white! transition-colors! duration-200!"
              >
                Post a Job
              </a>
            </li>
          </ul>
        </div>

        {/* Contact ustuni */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Contact
          </h3>
          <p className="text-base text-gray-400">
            <a
              href="mailto:support@jobportal.com"
              className="hover:text-white transition-colors duration-200"
            >
              support@jobportal.com
            </a>
          </p>
        </div>
      </div>

      {/* Mualliflik huquqi qismi */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
