// Version 4
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex lg:order-1">
          <Link to="/" className="px-2 py-2 font-bold">
            <h2 className="logo px-2 py-2 font-bold">
              Harsh{" "}
              <span className="logo-font font-black italic font-thin">
                Patel
              </span>
            </h2>
          </Link>
        </div>

        {/* Hamburger icon for small devices */}
        <div className="block lg:hidden">
          <button
            className={`flex items-center px-3 py-2 text-xl text-black ${
              isMenuOpen ? "bg-gray-200" : ""
            }`}
            onClick={toggleMenu}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar items for large devices */}
        <nav className="hidden lg:flex lg:order-2">
          <ul className="flex navbar-list">
            <li className="px-8 py-4 text-base">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "font-black" : "text-gray-700"}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="px-8 py-4 text-base">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "font-black" : "text-gray-700"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="px-8 py-4 text-base">
              <a
                href="https://drive.google.com/file/d/1HnaZnxwwFZrDRzBX88rVfpkCasJ8kbe8/view?usp=drive_link"
                className="text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Resume */}
                Cirriculum Vitae
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navbar items for small devices */}
      <nav
        className={`navbar lg:hidden absolute top-0 inset-x-0 p-4 bg-white z-50 transition-transform transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-xl text-black p-2"
          onClick={closeMenu}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col navbar-list">
          <Link to="about" className="py-3 text-base" onClick={closeMenu}>
            <li className="py-3 text-base">About</li>
          </Link>
          <Link to="contact" className="py-3 text-base" onClick={closeMenu}>
            <li className="py-3 text-base">Contact</li>
          </Link>
          <a
            href="https://drive.google.com/file/d/1HnaZnxwwFZrDRzBX88rVfpkCasJ8kbe8/view?usp=sharing"
            className="py-3 text-base"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <li className="py-3 text-base">Résumé</li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
