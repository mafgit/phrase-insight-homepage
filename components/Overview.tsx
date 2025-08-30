import Image from "next/image";
import React from "react";

const Overview = ({
  n,
  heading,
  children,
  image,
}: {
  n: number;
  heading: string;
  children: React.ReactNode;
  image: string;
}) => {
  return (
    <div
      className={`rounded-xl flex gap-x-4 gap-y-6 flex-col lg:flex-row items-center lg:justify-evenly lg:items-stretch max-w-[1000px] mx-auto ${
        n % 2 === 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* <Image
        src={image}
        sizes="100vw"
        fill
        alt="overview screenshot"
        className="rounded-xl h-max max-h-[500px] self-center shadow-lg shadow-primary/15 border-[2px] border-black/10"
      /> */}
      <img
        src={image}
        alt="overview screenshot"
        className="rounded-xl h-max max-h-[500px] self-center shadow-lg shadow-primary/15 border-[2px] border-black/10"
      />

      <div className="flex p-8 flex-col items-center justify-center gap-2 leading-loose text-center font-semibold text-dark/75 bg-linear-45 from-purple/10 to-primary/20 shadow-lg shadow-primary/15 border-1 border-black/10 rounded-xl ">
        <div className="text-2xl font-bold text-main  flex flex-col gap-4 my-4 items-center justify-center">
          <div className="relative min-w-[35px] h-[35px]">
            <div className="w-full h-full rounded-md rotate-45 bg-main"></div>
            <p className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
              {n}
            </p>
          </div>{" "}
          <h3 className="">{heading}</h3>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Overview;
