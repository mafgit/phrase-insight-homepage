import Link from "next/link";
import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
import CTAButton from "./CTAButton";
import LogoTitle from "./LogoTitle";
import ProductHuntBadge from "./ProductHuntBadge";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-main to-[#571297] text-center px-4 sm:px-8 py-12">
      <div className="container w-full max-w-max mx-auto flex flex-col gap-8 items-center justify-center">
        <LogoTitle smaller />

        <div className="flex gap-2 flex-wrap items-center justify-center">
          <CTAButton />
          <ProductHuntBadge />
        </div>

        <nav className="flex gap-3 flex-wrap items-center justify-center">
          <Link
            href="#overview"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaArrowUp className="text-xl" />
            <span>Overview</span>
          </Link>

          <Link
            href="https://forms.gle/UJiK2Zv3do4dNbVN6"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaMessage className="text-xl" />
            <span>Feedback</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-abdullah-farooqui-24754b27a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaLinkedin className="text-blue-500 text-2xl" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/mafgit"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:bg-white/15 flex items-center justify-center gap-2 font-semibold bg-white/10 px-2 py-1 rounded-md"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </Link>
        </nav>

        <p>© {new Date().getFullYear()} PhraseInsight</p>
      </div>
    </footer>
  );
};

export default Footer;
