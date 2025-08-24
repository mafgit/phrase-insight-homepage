import React from "react";
import Overview from "./Overview";
import { FaRocket } from "react-icons/fa6";

const OverviewSection = () => {
  return (
    <section id="overview" className="px-2 py-16 text-black/80">
      <div className="container flex flex-col gap-12 mx-auto">
        <h2 className="text-[26px] font-bold text-center text-primary flex items-center justify-center gap-[10px]">
          <FaRocket className="" /> <span>Overview</span>
        </h2>

        <div className="flex flex-col gap-12 justify-center">
          <Overview n={1} heading="Select Text Anywhere" image="/ss-button.png">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>

          <Overview
            n={2}
            heading="Multiple Languages & AI Models"
            image="/ss-preferences.png"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>

          <Overview
            n={3}
            heading="Expand Vocabulary Instantly"
            image="/ss-translation.png"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>

          <Overview
            n={4}
            heading="Understand Contextual Meanings"
            image="/ss-context.png"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>

          <Overview
            n={5}
            heading="Get Grammar Analysis"
            image="/ss-grammar.png"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>

          <Overview
            n={6}
            heading="Get Example Sentences"
            image="/ss-examples.png"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              repudiandae quidem nostrum vel magni praesentium blanditiis
              architecto est cupiditate quasi!
            </p>
          </Overview>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
