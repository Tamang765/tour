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

const MountainList = () => {
  const [selectedMountain, setSelectedMountain] = useState(mountains[0]);

  const handleSelectMountain = (mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <section className="bg-white">
      <div className="container-lg mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 p-6">
        <div
          className="lg:w-1/3 h-screen overflow-y-auto"
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
          <h2 className="text-2xl font-bold mb-6">14x8000'ers</h2>
          <ul className="space-y-4 scrollable-left">
            {mountains.map((mountain, index) => (
              <li
                key={index}
                onClick={() => handleSelectMountain(mountain)}
                className={`flex items-center gap-4 p-3 rounded-lg transition cursor-pointer ${
                  selectedMountain.name === mountain.name
                    ? "bg-yellow-100"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={mountain.image}
                  alt={mountain.name}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${
                    selectedMountain.name === mountain.name
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                />
                <div>
                  <p className="text-sm sm:text-base font-semibold">
                    {mountain.height}
                  </p>
                  <p
                    className={`text-sm sm:text-base font-bold ${
                      selectedMountain.name === mountain.name
                        ? "text-yellow-500"
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
        <div className="lg:w-2/3 flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default MountainList;
