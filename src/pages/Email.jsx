import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Email = () => {
  return (
    <div>
      <Navbar />
      <Heading title={"Contact Us"} />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-md p-6 rounded-lg">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-700">Address</h2>
            <p>
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-700">Phone</h2>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-700">Email</h2>
            <p>info@springdale.edu</p>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-md p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Contact Form
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019052539616!2d144.96305781531647!3d-37.81410797975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e1957453a7c!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1616587307629!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Springdale Public School Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Email;
