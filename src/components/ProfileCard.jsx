import React from "react";

const ProfileCard = ({ fname, post, description, imageUrl, title }) => {
  return (
    <div className="relative bg-white border rounded-xl shadow-md overflow-hidden max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-64">
        <img
          className="w-full h-full object-cover"
          src={imageUrl || "https://tailwindflex.com/public/images/user.png"}
          alt={fname || title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white">{fname || title}</h3>
        </div>
      </div>
      {(post || description) && (
        <div className="p-4">
          {post && <p className="font-bold text-blue-600 mb-2">{post}</p>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
