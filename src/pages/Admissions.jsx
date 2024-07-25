import React from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Heading title={"Admissions"} />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Admission Process Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Admission Process
          </h2>
          <div
            className="w-full h-0.5 bg-gray-300 mx-auto mb-4"
            style={{ maxWidth: "200px" }}
          ></div>
          <p className="text-lg text-gray-700 mb-4">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
          <div className="text-center">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Download Admission Form
            </button>
          </div>
        </section>

        {/* Admission Criteria Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Admission Criteria
          </h2>
          <div
            className="w-full h-0.5 bg-gray-300 mx-auto mb-4"
            style={{ maxWidth: "200px" }}
          ></div>
          <p className="text-lg text-gray-700 mb-4">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </section>

        {/* Important Dates Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 border-2 border-blue-500">
          <h2 className="text-center text-2xl font-semibold mb-4 text-blue-700">
            Important Dates
          </h2>
          <div
            className="w-full h-0.5 bg-blue-500 mx-auto mb-4"
            style={{ maxWidth: "200px" }}
          ></div>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>
              <span className="font-bold">Admission Form Availability:</span>{" "}
              <span className="text-blue-700">March 1st</span>
            </li>
            <li>
              <span className="font-bold">Last Date for Submission:</span>{" "}
              <span className="text-blue-700">March 31st</span>
            </li>
            <li>
              <span className="font-bold">Entrance Test:</span>{" "}
              <span className="text-blue-700">April 15th</span>
            </li>
            <li>
              <span className="font-bold">Announcement of Results:</span>{" "}
              <span className="text-blue-700">April 30th</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
