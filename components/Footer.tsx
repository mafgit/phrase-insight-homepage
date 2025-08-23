import Link from "next/link";
import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
import CTAButton from "./CTAButton";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-main to-[#571297] text-center px-8 py-12">
      <div className="container w-max mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <img src="/icon180.png" alt="logo" className="rounded-lg w-[40px]" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#fb74ff] from-[#81ffed]">
            PhraseInsight: Expand Vocabulary While Reading
          </h1>
        </div>

        <CTAButton full />

        <div className="flex gap-3">
          <Link
            href="#overview"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaArrowUp className="text-xl" />
            <span>Overview</span>
          </Link>

          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaMessage className="text-xl" />
            <span>Feedback</span>
          </Link>

          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaLinkedin className="text-blue-500 text-2xl" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="/"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </Link>
        </div>

        <p>© 2025 PhraseInsight</p>
      </div>
    </footer>
  );
};

export default Footer;
