// src/components/Heading.js
const Heading = ({ title }) => {
  return (
    <div className="flex flex-col mt-16 items-left py-8 px-[190px] bg-[#2E0219]">
      <h1 className="text-4xl text-white font-bold mb-2">{title}</h1>
      <div className="w-24 t h-1 bg-[#6b6a68]"></div>{" "}
      {/* Line below the heading */}
    </div>
  );
};

export default Heading;
