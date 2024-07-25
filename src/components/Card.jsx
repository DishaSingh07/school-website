// src/components/Card.js
import React from "react";

const Card = ({ title, pic, data }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-48">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={pic}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{data}</p>
      </div>
    </div>
  );
};

export default Card;

