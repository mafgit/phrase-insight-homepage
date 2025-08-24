import CTAButton from "./CTAButton";
import FeaturesSlider from "./FeaturesSlider";
import LogoTitle from "./LogoTitle";

const Header = () => {
  return (
    <header className="bg-gradient-to-r min-h-screen from-main to-[#571297] text-center px-4 sm:px-8 py-16 flex items-center justify-center">
      <div className="container flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-8 items-center justify-center">
          <LogoTitle />

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
