import React from "react";
import ArrowSvg from "../assets/arrow.svg";
const ProjectRedirectPage = () => {
  return (
    <div className="contact-container bg-white text-black p-8">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-bold">
            Masterpieces are worth the wait.{" "}
            <span className="text-red-500">●</span>
          </h1>
          <p className="text-green-600 mt-2 mb-4">
            You can check out my completed and ongoing projects below.
          </p>
          <button
            className="rounded-full"
            style={{
              color: "black",
              fontStyle: "italic",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              border: "1px solid black",
              padding: "10px 40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "white",
            }}
            onClick={() => {
              window.open("https://github.com/HarshForreal", "_blank");
            }}
          >
            GitHub
            <img
              src={ArrowSvg}
              alt="Arrow"
              style={{ width: "20px", height: "20px" }}
              className="lg:inline-block md:inline-block"
            />
          </button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="animated-svg"
          >
            {/* Your SVG content here */}
          </svg>
        </div>
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

export default ProjectRedirectPage;
