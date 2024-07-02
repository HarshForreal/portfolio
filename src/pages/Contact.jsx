// import React from "react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";

// function Contact() {
//   return (
//     <div className="bg-white text-black min-h-screen p-8">
//       <div className="max-w-3xl mx-auto">
//         {/* First Row */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold">
//             Contact Me<span className="text-red-500">.</span>
//           </h1>
//           <p className="text-xl lg:text-base text-green-600">
//             OPEN TO WORK | Full Stack Developer
//           </p>
//         </div>

//         {/* Second Division */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-2">
//             For full time hiring or freelance work
//           </h2>
//           <p className="text-lg">
//             Write a mail to{" "}
//             <a href="mailto:work.harshpatel@gmail.com" className="text-red-500">
//               work.patelharsh@gmail.com
//             </a>{" "}
//             or book a <span className="font-bold">meet call</span> with all
//             details.
//           </p>
//         </div>

//         {/* Last Division */}
//         <div className="flex space-x-8">
//           <a
//             href="https://www.linkedin.com/in/harsh-patel-7228381b2/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xl flex items-center space-x-2"
//           >
//             <FaLinkedin />
//             <span>LinkedIn</span>
//           </a>
//           <a
//             href="https://twitter.com/Harsh_forreal"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-xl flex items-center space-x-2"
//           >
//             <FaTwitter />
//             <span>Twitter</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container bg-white text-black p-8 mt-20">
      <div>
        <h1 className="text-4xl font-bold">
          Contact me <span className="text-red-500">●</span>
        </h1>
        <p className="text-green-600 mt-2">
          OPEN TO WORK | Full Stack Developer
        </p>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-semibold">
          For full time hiring or freelance work
        </p>
        <p className="mt-2">
          Write a mail to{" "}
          <a href="mail-to:work.patelharsh@gmail.com" className="text-red-500">
            work.patelharsh@gmail.com
          </a>{" "}
          or book a{" "}
          <a
            href="https://cal.com/harsh-patel/30min"
            className="font-bold hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            meet call
          </a>{" "}
          with all details
        </p>
      </div>
      <div className="social-icons flex  mt-8 space-x-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/harshpatel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/harshpatel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
