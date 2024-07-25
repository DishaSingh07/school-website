// src/components/Infrastructure.js
import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Infrastructure = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <Heading title={"Infrastructure and Facilities"} />
      <div className="flex flex-col items-center justify-center flex-1 mt-8 px-4">
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              pic={card.pic}
              data={card.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
