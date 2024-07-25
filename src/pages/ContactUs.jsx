import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Heading title={"Contact Us"} />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-700">Address</h2>
              <p>
                Springdale Public School, 123 Education Lane, Cityville, State,
                ZIP Code
              </p>
            </div>
            <div className="hidden lg:block w-px bg-gray-300 mx-6 h-16"></div>
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-700">Phone</h2>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="hidden lg:block w-px bg-gray-300 mx-6 h-16"></div>
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-700">Email</h2>
              <p>info@springdale.edu</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-md p-6 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Contact Form
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
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
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
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

export default ContactUs;

// <<<<<<< HEAD
// # school-website
// // =======
// # React + Vite

// This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

// Currently, two official plugins are available:

// - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
// - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
// >>>>>>> main
