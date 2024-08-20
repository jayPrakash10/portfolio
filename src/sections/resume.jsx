import React from "react";
import Progress from "../components/progress";
import { skills } from "../assets/data/skills";

const Resume = () => {
  return (
    <section id="resume">
      <section className="p-6 pt-8 lg:p-8 pb-2 lg:pb-8 max-w-screen-xl mx-auto">
        <h2 className="border-transparent border-b-stone-800 border-4 py-2 font-semibold text-2xl lg:text-3xl lg:mb-4 heading-styled">
          Resume
        </h2>
        <div className="mb-4 p-2 lg:p-3">
          <h3 className="border-transparent border-b-orange-800 border-2 py-2 font-semibold mb-2 lg:mb-4 text-xl lg:text-2xl">
            Experience
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-4 text-gray-600 hidden lg:block">
              Jun 2022-Feb 2024
            </div>
            <div className="flex-[3] p-4 border-transparent border-l-slate-500 border-4">
              <p className="mb-2 lg:mb-3 lg:flex items-baseline">
                <span className="font-semibold text-lg lg:text-2xl">
                  Frontend Web Developer
                </span>
                &nbsp;
                <br className="lg:hidden" />
                at&nbsp;
                <span className="text-stone-600">Codolin Technologies</span>
              </p>
              <p className="text-gray-600 mb-2 lg:hidden">Jun 2022-Feb 2024</p>
              <p>
                Developed variety of features on multiple projects and delivered
                solutions to meet client's requirement.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-4 text-gray-600 hidden lg:block">
              Nov 2021-May 2022
            </div>
            <div className="flex-[3] p-4 border-transparent border-l-slate-500 border-4">
              <p className="mb-2 lg:mb-3 lg:flex items-baseline">
                <span className="font-semibold text-lg lg:text-2xl">
                  Fullstack Developer Intern
                </span>
                &nbsp;
                <br className="lg:hidden" />
                at&nbsp;
                <span className="text-stone-600">Vitra.ai</span>
              </p>
              <p className="text-gray-600 mb-2 lg:hidden">Nov 2021-May 2022</p>
              <p>
                Re-developed frontend with latest technologies. Also managed
                database and created API's to perform required task.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 p-3">
          <h3 className="border-transparent border-b-orange-800 border-2 py-2 font-semibold mb-2 lg:mb-4 text-xl lg:text-2xl">
            Education
          </h3>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-4 text-gray-600 hidden lg:block">
              Jan 2021-June 2021
            </div>
            <div className="flex-[3] p-4 border-transparent border-l-slate-500 border-4">
              <p className="mb-2 lg:mb-3 lg:flex items-baseline">
                <span className="font-semibold text-lg lg:text-2xl">
                  Fullstack Developer
                </span>
                &nbsp;
                <br className="lg:hidden" />
                at&nbsp;
                <span className="text-stone-600">Accio</span>
              </p>
              <p className="text-gray-600 mb-2 lg:hidden">Jan 2021-June 2021</p>
              <p>
                Learnt frontend and backend technologies and algorithms to
                improve my skills as full stack web developer.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-4 text-gray-600 hidden lg:block">
              2016-2020
            </div>
            <div className="flex-[3] p-4 border-transparent border-l-slate-500 border-4">
              <p className="mb-2 lg:mb-3 lg:flex items-baseline">
                <span className="font-semibold text-lg lg:text-2xl">
                  B.Tech
                </span>
                &nbsp;
                <br className="lg:hidden" />
                at&nbsp;
                <span className="text-stone-600">
                  Visveswaraiya Technological University
                </span>
              </p>
              <p className="text-gray-600 mb-2 lg:hidden">2016-2020</p>
              <p>
                Bachelor's degree in Computer Science in ICEAS college in
                Bengaluru.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h3 className="border-transparent border-b-orange-800 border-2 py-2 font-semibold mb-2 lg:mb-4 text-xl lg:text-2xl">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 lg:p-4">
            {skills.map((sk, ind) => (
              <div className="grid place-items-center p-2 lg:p-4" key={"sk"+ind}>
                <Progress text={sk.skill} percent={sk.percent} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resume;
