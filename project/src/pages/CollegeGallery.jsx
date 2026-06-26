import React, { useState } from "react";
import college1 from "../assets/college/college1.png";
import college2 from "../assets/college/college2.png";
import college3 from "../assets/college/college3.png";
import college4 from "../assets/college/college4.png";
import college5 from "../assets/college/college5.png";
import college6 from "../assets/college/college6.png";


const collegeImages = [college1, college2, college3,college4,college5,college6];

const CollegeGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? collegeImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === collegeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collegeImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={img}
              alt={`College view ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-3xl font-bold hover:text-gray-300"
          >
            &#10094;
          </button>

          <img
            src={collegeImages[selectedIndex]}
            alt="Full Screen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-3xl font-bold hover:text-gray-300"
          >
            &#10095;
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-300"
          >
            &#10005;
          </button>
        </div>
      )}
    </div>
  );
};

export default CollegeGallery;