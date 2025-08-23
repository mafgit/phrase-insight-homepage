import React from "react";
import { Fa1 } from "react-icons/fa6";

const Overview = ({ reverse = false }) => {
  return (
    <div
      className={`shadow-lg shadow-primary/15 border-1 border-black/10 bg-linear-45 from-purple/10 to-primary/20 p-6 rounded-xl flex gap-6 max-w-[1000px] mx-auto ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img src="/ss-translation.png" alt="" className="rounded-xl w-[400px]" />

      <div className="flex flex-col gap-2 leading-loose text-center font-semibold text-dark/75">
        <div className="text-2xl font-bold text-primary  flex gap-4 my-4 items-center justify-center">
          <div className="relative w-[35px] h-[35px]">
            <div className="w-full h-full rounded-md rotate-45 bg-primary"></div>
            <p className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
              1
            </p>
          </div>{" "}
          <h3>Lorem ipsum dolor sit.</h3>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          repudiandae quidem nostrum vel magni praesentium blanditiis architecto
          est cupiditate quasi!
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          repudiandae quidem nostrum vel magni praesentium blanditiis architecto
          est cupiditate quasi!
        </p>
      </div>
    </div>
  );
};

export default Overview;
