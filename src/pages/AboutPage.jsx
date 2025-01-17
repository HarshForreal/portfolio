// import React from "react";
import AboutMe from "../assets/AboutMe.webp";
import ArrowSvg from "../assets/arrow.svg";
import { NavLink } from "react-router-dom";
// import ProjectRedirectPage from "./ProjectRedirectPage";
const AboutPage = () => {
  return (
    <div className="text-Black min-h-screen">
      <h2 className="logo px-2 py-2 font-bold text-4xl mb-4 font-semibold">
        <span style={{ color: "#ff0000" }}>•</span> About{" "}
        <span className="logo-font font-black text-4xl italic font-light">
          Me
        </span>
      </h2>
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-xl lg:p-10">
        {/* <div className="bg-white p-6">
          <img
            src={AboutMe}
            className="w-full h-auto rounded-lg mx-auto mb-4 hover"
          />
        </div> */}
        <div className="bg-white p-6">
          <img
            src={AboutMe}
            className="w-full h-auto rounded-lg mx-auto mb-4 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-white p-6 font-editorialLight text-neutral-900">
          <p className="lg:text-2xl md:text-base sm:text-xs">
            I am a Full Stack Developer with a passion for building impactful
            software solutions. Currently, I am working as a full-time intern at
            <span className="font-bold"> Bacancy Technology, </span> where I am
            gaining hands-on experience with cutting-edge technologies and
            real-world projects. I have expertise in React, Node.js, and
            MongoDB, along with modern front-end frameworks like Vue.js and
            Angular. I am a fast learner and a team player who enjoys
            collaborating with cross-functional teams to deliver high-quality
            solutions. My strong foundation in computer science principles and
            algorithms enables me to tackle challenging problems efficiently. I
            have a keen interest in cloud technologies, which I am pursuing as
            my major, and I actively contribute to open-source projects. My
            internships have honed my technical skills and enhanced my ability
            to work in dynamic environments. In my free time, I stay updated on
            industry trends and explore innovative tools. I am committed to
            continuous learning and professional growth, aiming to create
            innovative and scalable solutions to solve complex problems.
          </p>
        </div>
      </section>
      {/* <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-xl lg:p-10">
        <div className="bg-white p-6">
          <img
            src={AboutMe}
            className="w-full h-auto rounded-lg mx-auto mb-4 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-white p-6 font-editorialLight text-neutral-900">
          <p className="lg:text-2xl md:text-base sm:text-xs">
            I am a Full Stack Developer with a passion for building impactful
            software solutions. Currently, I am working as a full-time intern at
            <span className="font-bold"> Bacancy Technology, </span> where I am
            gaining hands-on experience with cutting-edge technologies and
            real-world projects. I have expertise in React, Node.js, and
            MongoDB, along with modern front-end frameworks like Vue.js and
            Angular. I am a fast learner and a team player who enjoys
            collaborating with cross-functional teams to deliver high-quality
            solutions. My strong foundation in computer science principles and
            algorithms enables me to tackle challenging problems efficiently.
            <span className="hidden sm:inline">
              I have a keen interest in cloud technologies, which I am pursuing
              as my major, and I actively contribute to open-source projects. My
              internships have honed my technical skills and enhanced my ability
              to work in dynamic environments. In my free time, I stay updated
              on industry trends and explore innovative tools. I am committed to
              continuous learning and professional growth, aiming to create
              innovative and scalable solutions to solve complex problems.
            </span>
          </p>
        </div>
      </section> */}
      <section className="mb-8">
        <div className="flex lg:order-1">
          <h2 className="logo px-2 py-2 font-bold text-4xl mb-4 font-semibold">
            <span style={{ color: "#ff0000" }}>•</span> Work{" "}
            <span className="logo-font font-black text-4xl italic font-light">
              Experience
            </span>
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="lg:text-2xl md:text-base sm:text-xs font-editorialRegular">
              Trentium Solutions.
            </h3>
            <p className="text-gray-700 font-editorialRegular">
              Frontend Developer Intern
            </p>
            <p className="text-gray-700 font-editorialLight">{`Aug'22 - Oct'22`}</p>
          </div>
          <div className="mb-4">
            <h3 className="lg:text-2xl md:text-base sm:text-xs font-editorialRegular">
              Web Mavens.
            </h3>
            <p className="text-gray-700 font-editorialRegular font-editorialRegular">
              Frontend Developer Intern
            </p>
            <p className="text-gray-700 font-editorialLight">{`Mar'23 - Jun'23`}</p>
          </div>
          <div>
            <h3 className="lg:text-2xl md:text-base sm:text-xs font-editorialRegular">
              Bacancy Technology.
            </h3>
            <p className="text-gray-700 font-editorialRegular font-editorialRegular">
              Software Developer Intern
            </p>
            <p className="text-gray-700 font-editorialLight">{`Jan'25 - Present`}</p>
          </div>
        </div>
      </section>
      <h2 className="text-4xl font-bold mb-4 logo font-semibold">
        <span style={{ color: "#ff0000" }}>•</span> Projects
      </h2>
      <section>
        <div className="bg-white rounded-3xl p-6 overflow-x-auto mb-8">
          <div className="flex space-x-4">
            <div
              className="min-w-[300px] rounded-xl p-4 flex flex-col justify-between"
              style={{ backgroundColor: "#FF7D29" }}
            >
              <div>
                <h3 className="text-xl font-bold logo-font my-3 text-white italic">
                  — Promptopia
                </h3>
                <p
                  className="text-white logo text-base"
                  style={{ color: "#FEFFD2" }}
                >
                  Promptopia is an innovative platform that provides
                  high-quality prompts for anyone needing the best output from
                  text-generating AIs. Ideal for creative writing, content
                  creation, and professional use, Promptopia ensures tailored
                  prompts to enhance creativity and efficiency. Users can
                  explore a vast library or customize prompts for specific
                  needs. Our goal is to streamline the content creation process,
                  making it more accessible and effective. Join Promptopia to
                  revolutionize how you interact with text-generating AIs and
                  achieve high-quality, relevant content effortlessly.
                </p>
              </div>
              <div className="flex justify-right mt-4">
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
                    window.open(
                      "https://github.com/HarshForreal/SearchBestPrompts",
                      "_blank"
                    );
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
            </div>
            <div
              className="min-w-[300px] bg-black rounded-xl shadow-md p-4 flex flex-col justify-between"
              style={{ backgroundColor: "#294B29" }}
            >
              <div>
                <h3 className="text-xl font-bold italic logo-font my-3 text-white">
                  — CoSketch
                </h3>
                <p className="text-base" style={{ color: "#DBE7C9" }}>
                  CoSketch is a collaborative platform that offers a sharable
                  canvas where two users can join and share their ideations in
                  real-time. Perfect for brainstorming sessions, project
                  planning, and creative collaboration, Ideashare enhances
                  teamwork and innovation. The platform is intuitive and easy to
                  use, allowing users to draw, write, and visualize their ideas
                  seamlessly. With Ideashare, you can capture and develop ideas
                  together, making the creative process more dynamic and
                  interactive. Join Ideashare and experience a new way of
                  collaborating and bringing ideas to life.
                </p>
              </div>
              <div className="flex justify-right mt-4">
                <NavLink
                  className="rounded-full lg:mt-6 mt-4 lg:mt-0"
                  style={{
                    color: "black",
                    fontStyle: "italic",
                    border: "1px solid black",
                    padding: "10px 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "white",
                  }}
                  to={"/ProjectRedirectPage"}
                >
                  <span style={{ color: "black" }}>Building</span>
                  <img
                    src={ArrowSvg}
                    alt="Arrow"
                    style={{ width: "20px", height: "20px" }}
                    className="lg:inline-block md:inline-block"
                  />
                </NavLink>{" "}
              </div>
            </div>
            <div
              className="min-w-[300px] rounded-xl shadow-md p-4 flex flex-col justify-between"
              style={{ backgroundColor: "#01204E" }}
            >
              <div>
                <h3 className="text-xl font-bold italic logo-font my-3 text-white">
                  — MoneyMate
                </h3>
                <p className="text-base" style={{ color: "#A7E6FF" }}>
                  MoneyMate is a personal finance app designed to simplify
                  tracking your finances and investments. With an intuitive
                  interface, MoneyMate allows users to monitor income, expenses,
                  and investments in one place. The app provides features such
                  as budget creation, expense categorization, and investment
                  tracking, helping you stay on top of your financial goals.
                  Users can view detailed reports and insights to understand
                  their spending habits and make informed financial decisions.
                  MoneyMate is perfect for anyone looking to manage finances.
                </p>
              </div>
              <div className="flex justify-right mt-4">
                <NavLink
                  className="rounded-full lg:mt-6 mt-4 lg:mt-0"
                  style={{
                    color: "black",
                    fontStyle: "italic",
                    border: "1px solid black",
                    padding: "10px 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "white",
                  }}
                  to={"/ProjectRedirectPage"}
                >
                  <span style={{ color: "black" }}>Building</span>
                  <img
                    src={ArrowSvg}
                    alt="Arrow"
                    style={{ width: "20px", height: "20px" }}
                    className="lg:inline-block md:inline-block"
                  />
                </NavLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
