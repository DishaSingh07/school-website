import React from "react";

const Announcements = () => {
  const announcements = [
    {
      title: "Parent-Teacher Meeting",
      date: "July 30, 2024",
      description:
        "Join us for a parent-teacher meeting to discuss student progress.",
    },
    {
      title: "New Science Lab Opening",
      date: "August 5, 2024",
      description:
        "We are excited to announce the opening of our new state-of-the-art science lab.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#CF1259] mb-4 transition-colors duration-300 ease-in-out hover:text-blue-800">
            ANNOUNCEMENTS
          </h3>
          <hr className="w-1/2 h-px bg-blue-600 mx-auto mb-6" />
        </div>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{announcement.title}</h3>
              <p className="text-gray-500">{announcement.date}</p>
              <p className="mt-2">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
