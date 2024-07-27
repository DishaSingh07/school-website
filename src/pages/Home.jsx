import React from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Message from "../components/Message";
import Footer from "../components/Footer"; // Import the Footer component
import Announcements from "../components/Announcements";
import FeaturedPrograms from "../components/FeaturesPrograms";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="relative flex-grow">
          {/* Logo and Introduction */}
          <div className="absolute top-0 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center">
            <img
              src="/logo.png" // Replace with the actual path to your logo
              alt="Springdale Public School Logo"
              className="w-24 h-24 object-cover"
            />
            <h1 className="text-3xl font-bold mt-2">
              Springdale Public School
            </h1>
            <p className="text-lg mt-2">
              Welcome to Springdale Public School, where we nurture young minds
              for a brighter future.
            </p>
          </div>

          {/* Carousel/Banner */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            className="mt-18"
          >
            <div>
              <img
                src="https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg"
                alt="Annual Sports Day"
              />
              <p className="legend">
                Annual Sports Day - Celebrating Excellence in Sports
              </p>
            </div>
            <div>
              <img
                src="https://dooninternational.net/web/wp-content/uploads/2022/10/SCIENCE-EXHIBITION-4.jpg"
                alt="Science Exhibition"
              />
              <p className="legend">
                Science Exhibition - Showcasing Student Innovations
              </p>
            </div>
            <div>
              <img
                src="https://dikshant.org/school/wp-content/uploads/60974662_2430368560531938_7556910084463263744_n-2.jpg"
                alt="Cultural Fest"
              />
              <p className="legend">
                Cultural Fest - Embracing Diversity and Creativity
              </p>
            </div>
          </Carousel>
        </div>
        <div className="mt-20 flex-grow">
          <Message />
        </div>

        <Announcements />
        <FeaturedPrograms />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
