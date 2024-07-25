import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleAcademicsDropdown = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  const toggleStudentsDropdown = () => {
    setIsStudentsOpen(!isStudentsOpen);
  };

  return (
    <div className="bg-[#e0d3c0] p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and School Name */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-10 h-auto" />
          <span className="text-2xl font-bold text-[#6b6a68]">
            Springdale Public School
          </span>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#6b6a68]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row space-y-4 md:space-y-0 md:flex md:space-x-6 text-[#6b6a68] text-lg ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link to="/" className="relative group" onClick={toggleMenu}>
            HOME
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3a3a3a] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <div className="relative">
            <button
              className="relative group flex items-center"
              onClick={toggleAboutDropdown}
            >
              ABOUT US
              <svg
                className="w-4 h-4 ml-2 text-[#6b6a68] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isAboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg ${
                isAboutOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/infra"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Infrastructure and Facilities
              </Link>
              <Link
                to="/overview"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Overview
              </Link>
            </div>
          </div>
          <div className="relative">
            <button
              className="relative group flex items-center"
              onClick={toggleAcademicsDropdown}
            >
              ACADEMICS
              <svg
                className="w-4 h-4 ml-2 text-[#6b6a68] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isAcademicsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg ${
                isAcademicsOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/curriculum"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Curriculum
              </Link>
              <Link
                to="/method"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Methodologies and Resources
              </Link>
            </div>
          </div>
          <div className="relative">
            <button
              className="relative group flex items-center"
              onClick={toggleStudentsDropdown}
            >
              STUDENTS
              <svg
                className="w-4 h-4 ml-2 text-[#6b6a68] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isStudentsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg ${
                isStudentsOpen ? "block" : "hidden"
              }`}
            >
              <Link
                to="/life"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Life at Springdale
              </Link>
              <Link
                to="/council"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Student Council
              </Link>
            </div>
          </div>
          <Link
            to="/admissions"
            className="relative group"
            onClick={toggleMenu}
          >
            ADMISSIONS
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3a3a3a] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link to="/faculty" className="relative group" onClick={toggleMenu}>
            FACULTY
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3a3a3a] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link to="/media" className="relative group" onClick={toggleMenu}>
            GALLERY
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3a3a3a] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/contact-us"
            className="relative group"
            onClick={toggleMenu}
          >
            CONTACT US
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3a3a3a] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
