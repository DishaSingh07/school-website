import React from "react";

const CurriculumSection = ({ title, description }) => {
  // Define a function to underline the subjects
  const underlineSubjects = (text) => {
    return text.replace(
      /(English|Mathematics|Science|Social Studies|Art|Physical Education|Computer Science|Physics|Chemistry|Biology|Accountancy|Business Studies|Economics)/g,
      "<u>$1</u>"
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#6b6a68] mb-4">{title}</h2>
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: underlineSubjects(description) }}
      />
    </div>
  );
};

const CurrComp = ({ description }) => {
  return (
    <div className="container mx-auto p-6 bg-[#f9f9f9]">
      <h1 className="text-3xl font-bold text-[#6b6a68] mb-8">
        Curriculum Overview
      </h1>
      <p className="text-gray-700 mb-8">{description}</p>

      <CurriculumSection
        title="Primary (Grades 1-5)"
        description="In the Primary section, students are introduced to essential subjects that build the groundwork for their academic journey. Our curriculum includes: English, Mathematics, Science, Social Studies, Art, and Physical Education. Emphasis is placed on developing foundational skills and fostering a love for learning."
      />

      <CurriculumSection
        title="Secondary (Grades 6-10)"
        description="In the Secondary section, students build on their foundational knowledge and delve into more specialized subjects. Our curriculum includes: English, Mathematics, Science, Social Studies, Computer Science, and Physical Education. The focus is on advanced concepts and critical thinking, preparing students for future academic and career paths."
      />

      <CurriculumSection
        title="Senior Secondary (Grades 11-12)"
        description="In the Senior Secondary section, students choose between different streams to prepare for higher education and career paths. The Science Stream includes Physics, Chemistry, Biology, Mathematics, and Computer Science, while the Commerce Stream includes Accountancy, Business Studies, Economics, and Mathematics. Each stream is designed to cater to the students' interests and future goals."
      />
    </div>
  );
};

export default CurrComp;
