import React from "react";

const MediaCard = ({ imageUrl, title, description, mediaType }) => {
  return (
    <div className="relative bg-white border border-black rounded-xl shadow-md overflow-hidden max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-10px]">
      <div className="relative w-full h-64">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white text-center px-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
