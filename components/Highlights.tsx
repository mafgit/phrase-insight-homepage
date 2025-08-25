const colors = [
  "bg-linear-30 from-blue-200 to-blue-300",
  "bg-linear-90 from-blue-200 to-blue-300",
  "bg-linear-150 from-blue-200 to-blue-300",
  "bg-linear-90 from-blue-200 to-blue-300",
];

const Highlights = ({ texts }: { texts: string[] }) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {texts.map((text, i) => (
        <span
          key={i}
          className={`${
            colors[i % colors.length]
          } px-2 py-1 rounded-md border-1 border-gray-700/15`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default Highlights;
