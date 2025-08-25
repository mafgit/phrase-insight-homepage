import React from "react";
import Overview from "./Overview";
import Highlights from "./Highlights";

const OverviewSection = () => {
  return (
    <section id="overview" className="px-2 py-16 text-black/80">
      <div className="container flex flex-col gap-12 mx-auto">
        <h2 className="text-[26px] font-bold text-center text-main flex items-center justify-center gap-[10px]">
          <span>🚀 Overview</span>
        </h2>

        <div className="flex flex-col gap-20 items-center justify-center">
          <Overview n={1} heading="Select Text Anywhere" image="/ss-button.png">
            <p>
              Just select a phrase and click the button that appears.{" "}
              <span className="text-main">
                The context surrounding the phrase will automatically be
                captured!
              </span>
            </p>
            <p>
              Or you can press <span className="text-main">Alt+Shift+R</span>{" "}
              after selecting text to get the same result.
            </p>
          </Overview>

          <Overview
            n={2}
            heading="Choose From Multiple Languages & AI Models"
            image="/ss-preferences.png"
          >
            <div>
              You can learn many languages such as:
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Highlights
                  texts={[
                    "Arabic",
                    "Spanish",
                    "German",
                    "Italian",
                    "French",
                    "English",
                    "...",
                  ]}
                />
              </div>
            </div>
            <p>
              Choose out of multiple AI models such as Gemini and Llama (options
              may vary in future).
            </p>
            <p>Special handling for Arabic phrases.</p>
          </Overview>

          <Overview
            n={3}
            heading="Expand Your Vocabulary Instantly"
            image="/ss-translation.png"
          >
            <p>
              Get context-based translations instead of literal translations.
            </p>
            <div>
              Get vocabulary details such as:{" "}
              <Highlights
                texts={[
                  "singular",
                  "plural",
                  "present",
                  "past",
                  "future",
                  "verb pattern",
                  "...",
                ]}
              />
            </div>
          </Overview>

          <Overview
            n={4}
            heading="Understand Context Like a Native"
            image="/ss-context.png"
          >
            <p>
              Get detailed explanation of the context of the phrase in the story
              or article you are reading.
            </p>
          </Overview>

          <Overview
            n={5}
            heading="Get Grammatical Analysis"
            image="/ss-grammar.png"
          >
            <div>
              Get grammar details such as:
              <Highlights
                texts={[
                  "noun states",
                  "verb form",
                  "adjective",
                  "adverb",
                  "preposition",
                  "...",
                ]}
              />
            </div>
          </Overview>

          <Overview
            n={6}
            heading="Get Example Sentences"
            image="/ss-examples.png"
          >
            <p>Learn how the phrase is actually used in a sentence.</p>
          </Overview>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
