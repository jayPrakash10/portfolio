import React from "react";
import { TypeAnimation } from "react-type-animation";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { BsLaptop } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { DiResponsive } from "react-icons/di";

import Github from "../assets/imgs/github.png";
import LinkedIn from "../assets/imgs/ln.png";
import BG from "../assets/imgs/bg-dev.jpg";

const About = () => {
  return (
    <section id="about_me">
      <section
        className="flex items-center justify-center p-8 -mt-2 pt-10 h-80 md:h-96 lg:h-[610px] bg-cover bg-norepeat load"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="aspect-square flex justify-center flex-col rounded-full p-8 shadow-2xl shadow-gray-900 backdrop-blur">
          <p className="text-lg lg:text-2xl text-indigo-200">I'm</p>
          <p className="text-3xl lg:text-6xl font-bold text-indigo-100">
            Jay Prakash
          </p>
          <TypeAnimation
            sequence={[
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Web Developer",
            ]}
            preRenderFirstString={true}
            repeat={Infinity}
            className="text-lg lg:text-3xl mt-2 lg:mt-4 text-indigo-200"
          />
        </div>
      </section>
      <section className="p-8 pb-2 lg:pb-8 max-w-screen-xl mx-auto lg:mt-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-[2] flex flex-col justify-between p-4 load">
            <div>
              <p className="lg:text-lg mb-4">
                I am Web developer located in Bengaluru, Karnataka. I have
                experience of working in React, Angular and NextJS in frontend,
                and NodeJs, Express and Firebase data storage in backend.
              </p>
              <p className="lg:text-lg mb-4">
                I am passionate about developing user friendly websites. I have
                all the skills to develop quality website and improve existing
                website.
              </p>
              <p className="lg:text-lg mb-4">
                I am looking to take on more work and to increase my skills as a
                Web Developer.
              </p>
            </div>
            <div className="space-x-4 hidden lg:block">
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a
                href="https://github.com/jayPrakash10"
                target="_blank"
                className="inline-block size-6 bg-cover rounded-full outline outline-1 outline-black outline-offset-[3px]"
                style={{ backgroundImage: `url(${Github})` }}
                rel="noreferrer"
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a
                href="http://www.linkedin.com/in/jay-prakash-6a7807190"
                target="_blank"
                className="inline-block size-6 bg-cover rounded-full outline outline-1 outline-black outline-offset-[3px]"
                style={{ backgroundImage: `url(${LinkedIn})` }}
                rel="noreferrer"
              />
            </div>
          </div>
          <div className="flex-1 p-4 load">
            <div className="text-xl lg:text-2xl font-semibold mb-2">
              Personal Information
            </div>
            <div className="lg:text-lg">
              <div className="leading-5 lg:leading-8">
                <span className="font-semibold">Name : </span>
                <span>Jay Prakash Kumar</span>
              </div>
              <div className="leading-6 lg:leading-8">
                <span className="font-semibold">Age : </span>
                <span>25</span>
              </div>
              <div className="leading-6 lg:leading-8">
                <span className="font-semibold">E-mail : </span>
                <span>10125prakash@gmail.com</span>
              </div>
              <div className="leading-6 lg:leading-8">
                <span className="font-semibold">Phone : </span>
                <span>+91 6361479764</span>
              </div>
              <div className="leading-6 lg:leading-8">
                <span className="font-semibold">Address : </span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
            <br />
            <br />

            <div className="flex items-center space-x-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1Cz25TUF3WrwYbwOSi-BH9Ezp--JUlF9n"
                className="rounded-full border border-gray-600 bg-indigo-900 text-white py-2 w-44 flex justify-center items-center"
              >
                <ArrowDownTrayIcon className="size-4" /> &nbsp; Resume
              </a>

              <div className="flex items-center space-x-6 lg:hidden">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="https://github.com/jayPrakash10"
                  target="_blank"
                  className="inline-block size-6 bg-cover rounded-full outline outline-1 outline-black outline-offset-[3px]"
                  style={{ backgroundImage: `url(${Github})` }}
                  rel="noreferrer"
                />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a
                  href="http://www.linkedin.com/in/jay-prakash-6a7807190"
                  target="_blank"
                  className="inline-block size-6 bg-cover rounded-full outline outline-1 outline-black outline-offset-[3px]"
                  style={{ backgroundImage: `url(${LinkedIn})` }}
                  rel="noreferrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 load">
          <span className="border-transparent border-b-stone-800 border-2 py-1 font-semibold text-2xl">
            Services
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2 mt-4 load">
          <div className="p-2 flex-1 max-w-60">
            <div className="flex flex-col items-center gap-2">
              <BsLaptop className="text-5xl text-blue-800" />
              <div className="font-semibold text-lg">Web Development</div>
              <p className="text-center">
                Modern and user friendly website with elegant design
              </p>
            </div>
          </div>
          <div className="p-2 flex-1 max-w-60">
            <div className="flex flex-col items-center gap-2">
              <DiResponsive className="text-5xl text-blue-800" />
              <div className="font-semibold text-lg">Responsive Design</div>
              <p className="text-center">
                Screen friendly design for all kind of screens
              </p>
            </div>
          </div>
          <div className="p-2 flex-1 max-w-60">
            <div className="flex flex-col items-center gap-2">
              <HiOutlineDevicePhoneMobile className="text-5xl text-blue-800" />
              <div className="font-semibold text-lg">App Development</div>
              <p className="text-center">
                Mobile app for Android and iOS devices
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
