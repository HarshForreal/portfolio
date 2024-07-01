import React from "react";
import Svgcompo from "../components/Svgcompo";

function Content() {
  return (
    <div className="content-main-div lg:p-40 xl:p-40">
      {/* Main-top-content */}
      <div className="main-content-div flex items-center justify-center">
        <div className="main-content-div1 flex-1">
          <h2 className="main-text-font1 lg:text-5xl  xl:text-6xl sm:text-4xl sm:p-2">
            I am a
            <span className="main-text-font2 lg:text-6xl sm:text-4xl">
              {" "}
              Full stack web developer
            </span>{" "}
            and Product Builder
          </h2>
          <h2 className="main-text-font3 sm:p-2 ">
            I love building products and growth hacking.
          </h2>
        </div>
        <div className="main-content-div2 hidden lg:block md:block">
          <Svgcompo className=" w-24 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Content;
