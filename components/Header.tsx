import FeaturesSlider from "./FeaturesSlider";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-main to-[#571297] text-center px-8 py-16">
      <div className="container mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <img
              src="/icon180.png"
              alt="logo"
              className="rounded-lg w-[50px]"
            />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#fb74ff] from-[#81ffed]">
              PhraseInsight: Expand Vocabulary While Reading
            </h1>
          </div>

          <p className="text-xl max-w-[900px]">
            Seamlessly learn languages for FREE with this extension by expanding
            vocabulary and understanding contextual meanings while reading on
            web.
          </p>

          <FeaturesSlider />

          <button className="group relative w-full font-semibold bg-gradient-to-r to-purple from-primary rounded-xl p-[10px] flex items-center justify-center gap-[10px]">
            <div className="absolute left-0 top-0 w-0 h-full group-hover:w-full bg-light rounded-xl transition-all duration-200 ease-in-out z-[4]"></div>
            <img src="/chrome.svg" width={25} className="z-[5]" />
            <span className="text-lg z-[5] transition-all duration-200 ease-in-out text-light group-hover:text-primary">
              Get Extension For Free
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
