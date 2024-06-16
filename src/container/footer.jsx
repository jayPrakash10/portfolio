import React from "react";

import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { BsWhatsapp } from "react-icons/bs";

import Github from "../assets/imgs/github.png";
import LinkedIn from "../assets/imgs/ln.png";

const Footer = () => {
  return (
    <footer className="p-10 text-center bg-black">
      <div className="flex">
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10 flex-1 pl-4 lg:pl-0">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            className="inline-block size-8 bg-cover rounded-full outline outline-1 outline-white outline-offset-[3px]"
            style={{ backgroundImage: `url(${Github})` }}
            href="https://github.com/jayPrakash10"
            target="_blank"
            rel="noreferrer"
          />
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            href="http://www.linkedin.com/in/jay-prakash-6a7807190"
            target="_blank"
            className="inline-block size-8 bg-cover rounded-full outline outline-1 outline-white outline-offset-[3px]"
            style={{ backgroundImage: `url(${LinkedIn})` }}
            rel="noreferrer"
          />
        </div>
        <div className="text-white flex-1">
          <div className="lg:pl-16 text-xl lg:text-2xl text-left mb-6 underline underline-offset-4">
            Contact
          </div>
          <div className="lg:pl-16 mb-3">
            <a
              className="flex items-center text-lg lg:text-xl"
              href="mailto:10125prakash@gmail.com"
              rel="noreferrer"
            >
              <EnvelopeIcon className="size-5 lg:size-6" /> &nbsp; Mail
            </a>
          </div>
          <div className="lg:pl-16 mb-3">
            <a
              className="flex items-center text-lg lg:text-xl"
              href="tel:+916361479764"
              rel="noreferrer"
            >
              <DevicePhoneMobileIcon className="size-5 lg:size-6" /> &nbsp; Call
            </a>
          </div>
          <div className="lg:pl-16 mb-3">
            <a
              className="flex items-center text-lg lg:text-xl"
              href="https://wa.me/+916361479764"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp /> &nbsp; Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
