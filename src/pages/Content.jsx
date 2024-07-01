// import React from "react";
// import Svgcompo from "../components/Svgcompo";
// import ArrowSvg from "../assets/arrow.svg";
// function Content() {
//   return (
//     <div className="content-main-div lg:p-40 xl:p-40">
//       {/* Main-top-content */}
//       <div className="main-content-div flex items-center justify-center">
//         <div className="main-content-div1 flex-1">
//           <h2 className="main-text-font1 lg:text-5xl  xl:text-6xl sm:text-4xl sm:p-2">
//             I am a
//             <span className="main-text-font2 lg:text-6xl sm:text-4xl">
//               {" "}
//               Full stack web developer
//             </span>{" "}
//             and Product Builder
//           </h2>
//           <h2 className="main-text-font3 sm:p-2 ">
//             I love building products and growth hacking.
//           </h2>
//           <button
//             className="rounded-full mt-2"
//             style={{
//               color: "black",
//               fontStyle: "italic",
//               boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
//               border: "1px solid black",
//               padding: "10px 20px",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}
//             onClick={() => {
//               window.open(
//                 "https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view",
//                 "_blank"
//               );
//             }}
//           >
//             Resume
//             <img
//               src={ArrowSvg}
//               alt="Arrow"
//               style={{ width: "24px", height: "24px" }}
//             />
//           </button>{" "}
//         </div>
//         <div className="main-content-div2 hidden  lg:block md:block">
//           <Svgcompo className=" w-24 h-auto" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content;

// Version 2

// import React from "react";
// import Svgcompo from "../components/Svgcompo";
// import ArrowSvg from "../assets/arrow.svg";

// function Content() {
//   return (
//     <div className="content-main-div lg:p-40 xl:p-40">
//       {/* Main-top-content */}
//       <div className="main-content-div flex flex-col-reverse lg:flex-row items-center justify-center">
//         <div className="main-content-div1 flex-1 text-center lg:text-left">
//           <h2 className="main-text-font1 lg:text-5xl xl:text-6xl sm:text-4xl sm:p-2">
//             I am a
//             <span className="main-text-font2 lg:text-6xl sm:text-4xl">
//               {" "}
//               Full stack web developer
//             </span>{" "}
//             and Product Builder
//           </h2>
//           <h2 className="main-text-font3 sm:p-2">
//             I love building products and growth hacking.
//           </h2>
//           <button
//             className="rounded-full mt-2 "
//             style={{
//               color: "black",
//               fontStyle: "italic",
//               boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
//               border: "1px solid black",
//               padding: "10px 20px",
//               display: "flex",
//               justifyContent: "center",
//               gap: "8px",
//             }}
//             onClick={() => {
//               window.open(
//                 "https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view",
//                 "_blank"
//               );
//             }}
//           >
//             Resume
//             <img
//               src={ArrowSvg}
//               alt="Arrow"
//               style={{ width: "24px", height: "24px" }}
//               className="flex items-center justify-center"
//             />
//           </button>{" "}
//         </div>
//         <div className="main-content-div2 lg:flex lg:block md:flex md:block mt-4 lg:mt-0">
//           {/* Render SVG on top in all views */}
//           <Svgcompo className="w-24 h-auto mx-auto" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content;

// Version 3
import React from "react";
import Svgcompo from "../components/Svgcompo";
import ArrowSvg from "../assets/arrow.svg";

function Content() {
  return (
    <div className="content-main-div lg:p-40 xl:p-40">
      {/* Main-top-content */}
      <div className="main-content-div flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="main-content-div1 flex-1 text-center lg:text-left">
          <h2 className="main-text-font1 lg:text-5xl xl:text-6xl sm:text-4xl sm:p-2">
            I am a
            <span className="main-text-font2 lg:text-6xl sm:text-4xl">
              {" "}
              Full stack web developer
            </span>{" "}
            and Product Builder
          </h2>
          <h2 className="main-text-font3 sm:p-2">
            I love building products and growth hacking.
          </h2>
          <div className="flex justify-center lg:justify-start">
            <button
              className="rounded-full mt-4 lg:mt-0"
              style={{
                color: "black",
                fontStyle: "italic",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                border: "1px solid black",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1Y6-uFRmHOIPi7m_AzrZXHkRz7fJUlWwa/view",
                  "_blank"
                );
              }}
            >
              Resume
              <img
                src={ArrowSvg}
                alt="Arrow"
                style={{ width: "20px", height: "20px" }}
                className="hidden lg:inline-block md:inline-block"
              />
            </button>{" "}
          </div>
        </div>
        <div className="main-content-div2 lg:flex lg:block md:flex md:block mt-4 lg:mt-0">
          {/* Render SVG on top in all views */}
          <Svgcompo className="w-16 lg:w-24 h-auto mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Content;
