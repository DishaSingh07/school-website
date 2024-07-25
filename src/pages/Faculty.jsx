import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import ProfileCard from "../components/ProfileCard";
import { ProfileProvider, useProfiles } from "../context/ProfileContext";

const Faculty = () => {
  const profiles = useProfiles();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Heading title={"Faculty"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              fname={profile.fname}
              post={profile.post}
              description={profile.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default () => (
  <ProfileProvider>
    <Faculty />
  </ProfileProvider>
);
