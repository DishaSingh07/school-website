import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Council = () => {
  const achievements = [
    {
      name: "John Smith",
      achievement: "National Level Math Olympiad Winner",
    },
    {
      name: "Sarah Lee",
      achievement: "Gold Medalist in State Swimming Championship",
    },
    {
      name: "Tech Innovators Club",
      achievement: "Winners of Inter-School Robotics Competition",
    },
  ];

  const studentCouncil = [
    {
      name: "Amy Parker",
      role: "President",
      grade: "Grade 12",
    },
    {
      name: "Rajiv Mehta",
      role: "Vice President",
      grade: "Grade 11",
    },
    {
      name: "Lisa Wong",
      role: "Secretary",
      grade: "Grade 10",
    },
  ];

  return (
    <div>
      <Navbar />
      <Heading title={"Achievements and Student Council"} />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-8 text-gray-700">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative bg-white border-2 border-black rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                      {achievement.name}
                    </h3>
                    <p className="text-gray-600">{achievement.achievement}</p>
                  </div>
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white">
                      {achievement.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-8 text-gray-700">
              Student Council
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentCouncil.map((member, index) => (
                <div
                  key={index}
                  className="relative bg-white border-2 border-black rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="font-bold text-blue-600">{member.role}</p>
                    <p className="text-gray-600">{member.grade}</p>
                  </div>
                  <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold text-white">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Council;
