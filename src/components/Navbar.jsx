// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex lg:order-1">
//           <Link to="/" className="px-2 py-2 font-bold">
//             <h2 className="logo px-2 py-2 font-bold">
//               Harsh <span className="logo-font font-black">Patel</span>
//             </h2>
//           </Link>
//         </div>

//         {/* Hamburger icon for small devices */}
//         <div className="block lg:hidden">
//           <button
//             className={`flex items-center px-3 py-2 text-xl text-black ${
//               isMenuOpen ? "bg-gray-200" : ""
//             }`}
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navbar items for large devices */}
//         <nav className="hidden lg:flex lg:order-2">
//           <ul className="flex navbar-list">
//             <li className="px-8 py-4 text-base">
//               {" "}
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 Resume
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Navbar items for small devices */}
//       <nav className={`navbar ${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
//         <ul className="flex flex-col navbar-list">
//           <Link to="about" className="py-3 text-base">
//             <li className="py-3 text-base">About</li>
//           </Link>
//           <Link to="contact" className="py-3 text-base">
//             <li className="py-3 text-base">Contact</li>
//           </Link>
//           <Link
//             to="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//             className="py-3 text-base"
//           >
//             <li className="py-3 text-base">Résumé</li>
//           </Link>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// Version 2
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex lg:order-1">
//           <Link to="/" className="px-2 py-2 font-bold">
//             <h2 className="logo px-2 py-2 font-bold">
//               Harsh <span className="logo-font font-black">Patel</span>
//             </h2>
//           </Link>
//         </div>

//         {/* Hamburger icon for small devices */}
//         <div className="block lg:hidden">
//           <button
//             className={`flex items-center px-3 py-2 text-xl text-black ${
//               isMenuOpen ? "bg-gray-200" : ""
//             }`}
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navbar items for large devices */}
//         <nav className="hidden lg:flex lg:order-2">
//           <ul className="flex navbar-list">
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <a
//                 href="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//                 className="text-gray-700"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Navbar items for small devices */}
//       <nav
//         className={`navbar ${
//           isMenuOpen ? "block" : "hidden"
//         } lg:hidden absolute top-0 inset-x-0 p-4 bg-white z-50 transition-transform transform duration-300 ease-in-out`}
//       >
//         <button
//           className="absolute top-2 right-2 text-xl text-black"
//           onClick={closeMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <ul className="flex flex-col navbar-list">
//           <Link to="about" className="py-3 text-base">
//             <li className="py-3 text-base">About</li>
//           </Link>
//           <Link to="contact" className="py-3 text-base">
//             <li className="py-3 text-base">Contact</li>
//           </Link>
//           <a
//             href="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//             className="py-3 text-base"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <li className="py-3 text-base">Résumé</li>
//           </a>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// Version 3 Google
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { animated, config } from "react-spring"; // Import react-spring

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex lg:order-1">
//           <Link to="/" className="px-2 py-2 font-bold">
//             <h2 className="logo px-2 py-2 font-bold">
//               Harsh <span className="logo-font font-black">Patel</span>
//             </h2>
//           </Link>
//         </div>

//         {/* Hamburger icon for small devices */}
//         <div className="block lg:hidden">
//           <button
//             className={`flex items-center px-3 py-2 text-xl text-black ${
//               isMenuOpen ? "bg-gray-200" : ""
//             }`}
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navbar items for large devices */}
//         <nav className="hidden lg:flex lg:order-2">
//           <ul className="flex navbar-list">
//             <li className="px-8 py-4 text-base">
//               {" "}
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li className="px-8 py-4 text-base">
//               <NavLink
//                 to="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//                 className={({ isActive }) =>
//                   `${isActive ? "font-black" : "text-gray-700"}`
//                 }
//               >
//                 Resume
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Navbar items for small devices with animation */}
//       <animated.div
//         className={`navbar ${
//           isMenuOpen ? "block" : "hidden"
//         } lg:hidden absolute top-0 inset-x-0 p-4 bg-white z-50 transition-transform transform duration-300 ease-in-out`}
//         style={{
//           transform: isMenuOpen
//             ? "translateX(0)" // Slide in menu from left on open
//             : "translateX(-100%)", // Slide out menu to left on close
//         }}
//       >
//         <button
//           className="absolute top-2 right-2 text-xl text-black"
//           onClick={closeMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <ul className="flex flex-col navbar-list">
//           <Link to="about" className="py-3 text-base">
//             <li className="py-3 text-base">About</li>
//           </Link>
//           <Link to="contact" className="py-3 text-base">
//             <li className="py-3 text-base">Contact</li>
//           </Link>
//           <a
//             href="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
//             className="py-3 text-base"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <li className="py-3 text-base">Résumé</li>
//           </a>
//         </ul>
//       </animated.div>
//     </>
//   );
// }

// export default Navbar;

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
                href="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
                className="text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
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
          className="absolute top-2 right-2 text-xl text-black"
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
            href="https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view"
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
