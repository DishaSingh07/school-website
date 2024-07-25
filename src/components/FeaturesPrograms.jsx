import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "STEM Program",
      description:
        "Our STEM program encourages students to explore science, technology, engineering, and mathematics through hands-on learning and innovative projects.",
    },
    {
      title: "Arts and Music",
      description:
        "We offer a comprehensive arts and music curriculum that fosters creativity and self-expression in our students.",
    },
    {
      title: "Sports and Athletics",
      description:
        "Our sports program promotes physical fitness, teamwork, and sportsmanship through a variety of athletic activities and competitions.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#CF1259] mb-4 transition-colors duration-300 ease-in-out hover:text-blue-800">
          FEATURED PROGRAMS
        </h3>
        <hr className="w-1/2 h-px bg-blue-600 mx-auto mb-6" />
      </div>
      <div className="space-y-4">
        {programs.map((program, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{program.title}</h3>
            <p className="mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPrograms;
