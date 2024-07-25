// src/components/Gallery.js
import React, { useState } from "react";
import { usePhotoContext } from "../context/PhotoContext";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Gallery = () => {
  const { photos } = usePhotoContext();
  const [openSection, setOpenSection] = useState(null);
  const [selectedPhotoFilter, setSelectedPhotoFilter] = useState("All");
  const [selectedVideoFilter, setSelectedVideoFilter] = useState("All");

  const videos = [
    {
      src: "school_tour.mp4",
      description: "Virtual tour of Springdale Public School.",
      category: "School Tour",
    },
    {
      src: "annual_function.mp4",
      description: "Highlights from the Annual Function 2023.",
      category: "Annual Function",
    },
  ];

  // Photo Filter Options
  const photoFilters = ["All", ...Object.keys(photos)];

  // Video Filter Options
  const videoFilters = [
    "All",
    ...Array.from(new Set(videos.map((v) => v.category))),
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const filteredPhotos =
    selectedPhotoFilter === "All"
      ? photos
      : { [selectedPhotoFilter]: photos[selectedPhotoFilter] };

  const filteredVideos =
    selectedVideoFilter === "All"
      ? videos
      : videos.filter((video) => video.category === selectedVideoFilter);

  return (
    <div>
      <Navbar />
      <Heading title={"Gallery"} />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Filter Photos:</span>
              <select
                value={selectedPhotoFilter}
                onChange={(e) => setSelectedPhotoFilter(e.target.value)}
                className="border rounded-lg p-2"
              >
                {photoFilters.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Filter Videos:</span>
              <select
                value={selectedVideoFilter}
                onChange={(e) => setSelectedVideoFilter(e.target.value)}
                className="border rounded-lg p-2"
              >
                {videoFilters.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Photos Section */}
          <section className="mb-12">
            <h2 className="text-center text-2xl font-semibold mb-4">PHOTOS</h2>
            <div
              className="w-full h-0.5 bg-gray-300 mx-auto mb-4"
              style={{ maxWidth: "200px" }}
            ></div>
            <div className="space-y-4">
              {Object.keys(filteredPhotos).map((section, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left bg-[#e0d3c0] p-4 text-lg font-semibold rounded-lg shadow-md focus:outline-none"
                    onClick={() => toggleSection(section)}
                  >
                    {section}
                  </button>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 transition-all duration-300 ${
                      openSection === section
                        ? "max-h-full"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {filteredPhotos[section]?.map((photo, index) => (
                      <div
                        key={index}
                        className="relative bg-white border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      >
                        <img
                          className="w-full h-48 object-cover"
                          src={photo.src}
                          alt={photo.description}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-center p-4">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <h2 className="text-center text-2xl font-semibold mb-4">VIDEOS</h2>
            <div
              className="w-full h-0.5 bg-gray-300 mx-auto mb-4"
              style={{ maxWidth: "200px" }}
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <video controls className="w-full h-48 object-cover">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-4">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
