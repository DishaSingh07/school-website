import React, { createContext, useState } from "react";

export const TeachingContext = createContext();

export const TeachingProvider = ({ children }) => {
  const [methodologies] = useState([
    {
      title: "Blended Learning",
      description:
        "We combine traditional classroom instruction with modern digital tools and resources. Our blended learning approach includes interactive online platforms, multimedia presentations, and virtual simulations that complement and enhance in-person teaching. This hybrid model allows students to engage with the material in multiple ways and at their own pace.",
    },
    {
      title: "Differentiated Instruction",
      description:
        "Our teachers use differentiated instruction techniques to tailor lessons and activities to meet the varied needs of our students. By adapting content, processes, and assessments, we provide each student with the appropriate level of challenge and support. This ensures that all students can participate fully and succeed in their learning journey.",
    },
    {
      title: "Project-Based Learning",
      description:
        "We emphasize project-based learning to encourage students to apply their knowledge to real-world problems and scenarios. Through collaborative projects, students develop critical thinking, problem-solving, and teamwork skills. Projects are designed to be engaging and relevant, fostering a deeper understanding of the subject matter.",
    },
    {
      title: "Inquiry-Based Learning",
      description:
        "Our inquiry-based approach stimulates students' curiosity and encourages them to explore and investigate topics of interest. By posing open-ended questions and facilitating hands-on experiments and research, we help students develop their investigative skills and build a love for learning.",
    },
    {
      title: "Active Learning",
      description:
        "We prioritize active learning strategies that engage students in the learning process through discussions, debates, role-playing, and interactive activities. This approach helps students retain information more effectively and develop a deeper understanding of the material.",
    },
  ]);

  return (
    <TeachingContext.Provider value={{ methodologies }}>
      {children}
    </TeachingContext.Provider>
  );
};
