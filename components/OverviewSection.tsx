import React from "react";
import Overview from "./Overview";
import { FaRocket } from "react-icons/fa6";

const OverviewSection = () => {
  return (
    <section id="overview" className="px-2 py-16 text-black/80">
      <div className="container flex flex-col gap-6">
        <h2 className="text-[26px] font-bold text-center text-primary flex items-center justify-center gap-[10px]">
          <FaRocket className=""/> <span>Overview</span>
        </h2>

        <div className="flex flex-col gap-4 justify-center">
          <Overview />
          <Overview reverse/>
          <Overview />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
