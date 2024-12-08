import React, { useState } from "react";

const mountains = [
  {
    name: "Mount Everest",
    height: "8848.86m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: true,
  },
  {
    name: "K2",
    height: "8611m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Kanchenjunga",
    height: "8586m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Lhotse",
    height: "8516m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Makalu",
    height: "8485m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Cho-Oyu",
    height: "8188m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Dhaulagiri",
    height: "8167m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Manaslu",
    height: "8163m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Nanga Parbat",
    height: "8126m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Annapurna",
    height: "8091m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Gasherbrum I",
    height: "8080m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Broad Peak",
    height: "8051m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Gasherbrum II",
    height: "8035m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
  {
    name: "Shishapangma",
    height: "8027m",
    image:
      "https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg",
    active: false,
  },
];

const ExpeditionCard = ({ image, name }) => {
  return (
    <div className=" w-full h-fit mx-auto rounded-lg overflow-hidden shadow-lg sticky top-[8rem]">
      {/* Background Image */}
      <div
        className="min-h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`, // Replace with your image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute bottom-10 left-0 w-full   bg-opacity-50 flex flex-col justify-center items-center">
          {/* Title */}
          <h2 className="text-white text-3xl font-bold mb-2 text-center">
            {name}(8,516M)
          </h2>
          {/* Buttons */}
          <div className="flex space-x-4 my-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
              VIEW DETAILS
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MountainList = () => {
  const [selectedMountain, setSelectedMountain] = useState(mountains[0]);

  const handleSelectMountain = (mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <section className="py-10 ">
      <div className="container-lg mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 mobile:px-4 medium:px-6 medium:flex-row">
        <div
          className="lg:w-1/3 medium:w-2/3 h-screen overflow-y-auto"
          style={{
            msOverflowStyle: "none", // Hide scrollbar for IE
            scrollbarWidth: "none", // Hide scrollbar for Firefox
          }}
        >
          <style>
            {`
            /* Hide scrollbar for Chrome, Safari, and Edge */
            .scrollable-left::-webkit-scrollbar {
              display: none;
            }
          `}
          </style>
          <h2 className="text-4xl font-bold mb-6 mobile:text-3xl">14x8000'ers</h2>
          <ul className="space-y-4 scrollable-left mobile:space-y-0">
            {mountains.map((mountain, index) => (
              <li
                key={index}
                onClick={() => handleSelectMountain(mountain)}
                className={`flex items-center gap-4 p-3 rounded-lg transition cursor-pointer group ${
                  selectedMountain.name === mountain.name ? "" : ""
                }`}
              >
                <div
                  className={`  border-2 p-2 rounded-full group-hover:border-orange-500 ${
                    selectedMountain.name === mountain.name
                      ? "border-orange-500"
                      : ""
                  }`}
                >
                  <img
                    src={mountain.image}
                    alt={mountain.name}
                    className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full ${
                      selectedMountain.name === mountain.name
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-black  ">
                    {mountain.height}
                  </p>
                  <p
                    className={`text-sm sm:text-base font-bold group-hover:text-orange-500 ${
                      selectedMountain.name === mountain.name
                        ? "text-orange-500 "
                        : "text-gray-800"
                    }`}
                  >
                    {mountain.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Fixed and Centered Right Side */}
        <ExpeditionCard
          image={selectedMountain.image}
          name={selectedMountain.name}
        />
        {/* <div className="lg:w-2/3 flex items-center justify-center sticky  top-0 h-fit">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={selectedMountain.image}
              alt={selectedMountain.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-2">
                {selectedMountain.name}
              </h3>
              <p className="text-sm text-gray-600">{selectedMountain.height}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
                  VIEW DETAILS
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MountainList;
