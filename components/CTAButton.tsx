import Link from "next/link";

const CTAButton = ({ full = false }) => {
  return (
    <Link
      href="https://chromewebstore.google.com/detail/jmfekdmpopagjpdnndclpefldgfpgkml?utm_source=item-share-cb?utm_source=landingpage&utm_medium=website&utm_campaign=landing_page"
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        full ? "w-full" : ""
      } cursor-pointer group relative font-semibold bg-gradient-to-r to-purple from-primary rounded-xl p-[10px] flex items-center justify-center gap-[10px]`}
    >
      <div className="absolute left-0 top-0 w-0 h-full group-hover:w-full bg-light rounded-xl transition-all duration-300 ease-in-out z-[4]"></div>
      <img src="/chrome.svg" width={25} className="z-[5]" />
      <span className="text-lg z-[5] transition-all duration-200 ease-in-out text-light group-hover:text-primary">
        Get Extension For Free
      </span>
    </Link>
  );
};

export default CTAButton;
