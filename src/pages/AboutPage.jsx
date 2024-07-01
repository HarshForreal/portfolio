import React from "react";
import AboutMe from "../assets/AboutMe.png";

const AboutPage = () => {
  return (
    <div className="text-Black min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        {/* Education History */}
        {/* <section className="mb-8">
          <div className="flex lg:order-1">
            <h2 className="logo px-2 py-2 font-bold text-4xl mb-4">
              Education{" "}
              <span className="logo-font font-black text-4xl">History</span>
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold main-text-font1">
                Ganpat University
              </h3>
              <p className="text-gray-700">
                Bachelor's Degree in Computer Science Engineering
              </p>
              <p className="text-gray-700">2022 - 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">RC Technical University </h3>
              <p className="text-gray-700">High School Diploma</p>
              <p className="text-gray-700">2019 - 2020</p>
            </div>
          </div>
        </section> */}
        {/* About Me */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg shadow-lg">
          <div className="bg-white p-6">
            <img
              src={AboutMe}
              className="w-full h-auto rounded-lg mx-auto mb-4"
            />
          </div>
          <div className="bg-white p-6">
            <p className="text-gray-700">
              I am a Full Stack Developer with a passion for building products
              and growth hacking. I have experience working with React, Node.js,
              and MongoDB. I am a quick learner and a team player who is always
              eager to learn new technologies and frameworks. I am a Full Stack
              Developer with a passion for building products and growth hacking.
              I have experience working with React, Node.js, and MongoDB. I am a
              quick learner and a team player who is always eager to learn new
              technologies and frameworks. I am a Full Stack Developer with a
              passion for building products and growth hacking. I have
              experience working with React, Node.js, and MongoDB. I am a quick
              learner and a team player who is always eager to learn new
              technologies and frameworks.
            </p>
          </div>
        </section>
        {/* Working Experience */}
        <section className="mb-8">
          <div className="flex lg:order-1">
            <h2 className="logo px-2 py-2 font-bold text-4xl mb-4">
              Working{" "}
              <span className="logo-font font-black text-4xl">Experience</span>
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Trentium Solutions</h3>
              <p className="text-gray-700">Frontend Developer Intern</p>
              <p className="text-gray-700">Aug'22 - Oct'22</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Karma Foundation</h3>
              <p className="text-gray-700">Project Lead</p>
              <p className="text-gray-700">Nov'22 - Dec'22</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Mavens</h3>
              <p className="text-gray-700">Frontend Developer Intern</p>
              <p className="text-gray-700">Mar'23 - Jun'23</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
            <div className="flex space-x-4">
              <div className="min-w-[300px] bg-gray-100 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-gray-700">Description of Project 1</p>
              </div>
              <div className="min-w-[300px] bg-gray-100 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-gray-700">Description of Project 2</p>
              </div>
              <div className="min-w-[300px] bg-gray-100 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-gray-700">Description of Project 3</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        {/* <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="bg-white rounded-lg shadow-lg">
            <ul className="list-none list-inside flex flex-col">
              <li className="text-gray-700">React</li>
              <li className="text-gray-700">Node.js</li>
              <li className="text-gray-700">JavaScript (ES6+)</li>
              <li className="text-gray-700">HTML & CSS (Tailwind CSS)</li>
              <li className="text-gray-700">MongoDB</li>
              <li className="text-gray-700">Git & GitHub</li>
            </ul>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default AboutPage;
