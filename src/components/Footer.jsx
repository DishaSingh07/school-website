import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} Springdale Public School. All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </a>
            <a
              href="/contact-us"
              className="text-gray-400 hover:text-white text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
