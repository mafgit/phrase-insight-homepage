const LogoTitle = ({ smaller = false }) => {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <div className={`relative rounded-lg ${smaller ? 'w-[40px]' : 'w-[50px]'}`}>
        <img src="/icon180.png" alt="logo" className="rounded-lg w-full" />
        <span className="top-[-10px] right-[-10px] text-[11px] font-semibold absolute bg-gradient-to-r from-highlight/60 to-highlight/90 w-[40px] flex items-center justify-center h-[20px] rounded-md text-dark">
          v1.0.4
        </span>
      </div>
      <h1 className={`${smaller ? 'text-2xl' : 'text-3xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#fb74ff] from-[#81ffed]`}>
        PhraseInsight: Expand Vocabulary While Reading
      </h1>
    </div>
  );
};

export default LogoTitle;
