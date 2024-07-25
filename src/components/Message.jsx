import React from "react";

const Message = () => {
  return (
    <div className="principal-message bg-gray-100 p-10 rounded-lg shadow-lg mx-auto max-w-3xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#CF1259] mb-4 transition-colors duration-300 ease-in-out hover:text-blue-800">
          FROM PRINCIPAL'S DESK
        </h1>
        <hr className="w-1/2 h-px bg-blue-600 mx-auto mb-6" />
      </div>
      <p className="text-lg leading-relaxed text-gray-700">
        At Springdale Public School, we believe in nurturing the potential of
        every student. We provide a stimulating learning environment that
        fosters intellectual curiosity, creativity, and a love for learning. Our
        dedicated faculty is committed to guiding students towards a successful
        future, equipping them with the knowledge, skills, and confidence to
        thrive in a globalized world. We offer a diverse curriculum that caters
        to individual talents and interests, along with a strong emphasis on
        character development and social responsibility. We invite you to
        explore our website and learn more about how Springdale can help your
        child blossom into a well-rounded individual.
      </p>
    </div>
  );
};

export default Message;
