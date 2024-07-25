// src/context/CardContext.js
import React, { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      title: "State-of-the-Art Computer Labs for Enhanced Learning",
      pic: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      data: "Our school prides itself on providing students with access to state-of-the-art computer labs that are both efficient and well-equipped. These labs feature the latest hardware and software to support a range of educational activities, from basic computer literacy to advanced programming and digital design. Each lab is designed to maximize productivity, with high-speed internet, comfortable workstations, and up-to-date technology that ensures students can work effectively and efficiently.",
    },
    {
      title: "Modern Science Labs for Advanced Learning",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1eBuTC4-Z6UGmWBzru3Js-c1Eb3N6MfPOA&s",
      data: "Our school’s science labs are equipped with cutting-edge technology and modern equipment to support a comprehensive and hands-on learning experience. These labs provide students with the tools necessary to conduct experiments, explore scientific concepts, and engage in practical applications of their studies. With a focus on safety, functionality, and up-to-date resources, our science labs create an environment where students can delve deeply into their scientific inquiries and foster a strong understanding of core principles.",
    },
    {
      title: "Well-Stocked Library for Enriched Learning",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ByzhIjjb_xgbOUMC-9AWI7lLfc5DTjlF-g&s",
      data: "Our library offers an extensive collection of books and resources that cater to a diverse range of subjects and interests. With up-to-date literature, academic journals, and multimedia materials, students have access to a wealth of information that supports their learning and encourages a lifelong love of reading.",
    },
    {
      title: "Innovative Smart Classes for Modern Learning",
      pic: "https://www.dpslko.com/images/Smart%20Classes.JPG",
      data: "Our school’s smart classes are designed to integrate advanced technology with traditional teaching methods, creating an interactive and dynamic learning environment. Equipped with smart boards, high-definition projectors, and digital learning tools, these classrooms enhance the educational experience by making lessons more engaging and accessible. Students benefit from multimedia presentations, real-time feedback, and interactive activities that cater to various learning styles.",
    },
    {
      title: "Comprehensive Sports Facilities for Active Development",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCGyKxKRviJkX_xOYJ8W8GC2U8CVV59WtwA&s",
      data: "Our school boasts an array of top-notch sports facilities designed to promote physical fitness and teamwork among students. From well-maintained playing fields and courts to modern gymnasiums and specialized equipment, our facilities cater to a variety of sports and athletic activities. These resources not only support competitive sports and physical education classes but also encourage students to engage in regular exercise and develop healthy lifestyles.",
    },
  ]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
