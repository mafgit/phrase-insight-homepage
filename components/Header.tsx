import CTAButton from "./CTAButton";
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

          <p className="text-xl max-w-[900px] text-light/95">
            Seamlessly learn languages for FREE with this extension by expanding
            vocabulary and understanding contextual meanings while reading on
            web.
          </p>

          <FeaturesSlider />

          <CTAButton full />
        </div>
      </div>
    </header>
  );
};

export default Header;
