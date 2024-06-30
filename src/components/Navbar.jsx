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
//                 to="/resume"
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
//           <Link to="resume" className="py-3 text-base">
//             <li className="py-3 text-base">Résumé</li>
//           </Link>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-container flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="logo font-bold text-xl">
        Harsh <span className="font-black">Patel</span>
      </div>

      {/* Navbar items */}
      <ul className="flex space-x-8">
        <Link to="About" className="text-gray-700 hover:font-black">
          <li className="text-gray-700 hover:font-black">About</li>
        </Link>

        <Link to="Contact" className="text-gray-700 hover:font-black">
          <li className="text-gray-700 hover:font-black">Contact</li>
        </Link>
        {/* <li href="#resume" className="text-gray-700 hover:font-black">
          Resume
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
