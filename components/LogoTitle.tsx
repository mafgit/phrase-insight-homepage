const LogoTitle = ({ smaller = false }) => {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <div
        className={`relative rounded-lg ${smaller ? "w-[40px]" : "w-[50px]"}`}
      >
        <img src="/icon180.png" alt="logo" className="rounded-lg w-full" />
        <span className="top-[-10px] right-[-10px] text-[11px] font-semibold absolute bg-gradient-to-r from-highlight/60 to-highlight/90 w-[40px] flex items-center justify-center h-[20px] rounded-md text-dark">
          v{process.env.NEXT_PUBLIC_EXTENSION_VERSION}
        </span>
      </div>
      {smaller ? (
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#fb74ff] from-[#81ffed]">
          PhraseInsight: Expand Vocabulary While Reading
        </h1>
      ) : (
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#fb74ff] from-[#81ffed]">
          PhraseInsight: Expand Vocabulary While Reading
        </h2>
      )}
    </div>
  );
};

export default LogoTitle;
