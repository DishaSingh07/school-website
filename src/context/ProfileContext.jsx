import React, { createContext, useContext } from "react";

const ProfileContext = createContext();

const profiles = [
  {
    fname: "John Doe",
    post: "Principal",
    description: "M.Ed, 20 years of experience in educational administration.",
  },
  {
    fname: "Jane Smith",
    post: "Vice Principal",
    description: "M.Sc. in Physics, 15 years of teaching experience.",
  },
  {
    fname: "Emily Johnson",
    post: "English Teacher",
    description: "M.A. in English, 10 years of teaching experience.",
  },
  {
    fname: "Michael Brown",
    post: "Mathematics Teacher",
    description: "M.Sc. in Mathematics, 8 years of teaching experience.",
  },
  {
    fname: "Sophia Davis",
    post: "Science Teacher",
    description: "M.Sc. in Chemistry, 12 years of teaching experience.",
  },
  {
    fname: "David Wilson",
    post: "Computer Science Teacher",
    description: "B.Tech in Computer Science, 5 years of teaching experience.",
  },
];

export const ProfileProvider = ({ children }) => (
  <ProfileContext.Provider value={profiles}>{children}</ProfileContext.Provider>
);

export const useProfiles = () => useContext(ProfileContext);
