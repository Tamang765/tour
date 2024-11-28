import React, { useState, useEffect } from "react";

const SliderSection = () => {
  const affiliations = [
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377690.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377378.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672380323.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1720683128.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1720683128.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377690.png",
  ];

  const partners = [
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377690.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377378.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672380323.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1720683128.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1720683128.jpg",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png",
    "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377690.png",
  ];

  const [currentAffiliationIndex, setCurrentAffiliationIndex] = useState(0);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  // Auto-slide functionality for affiliations (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffiliationIndex((prev) =>
        prev >= affiliations.length - 7 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [affiliations.length]);

  // Auto-slide functionality for partners (7 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) =>
        prev >= partners.length - 7 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [partners.length]);

  const handlePrev = (type) => {
    if (type === "affiliations") {
      setCurrentAffiliationIndex((prev) =>
        prev === 0 ? affiliations.length - 7 : prev - 1
      );
    } else {
      setCurrentPartnerIndex((prev) =>
        prev === 0 ? partners.length - 7 : prev - 1
      );
    }
  };

  const handleNext = (type) => {
    if (type === "affiliations") {
      setCurrentAffiliationIndex((prev) =>
        prev >= affiliations.length - 7 ? 0 : prev + 1
      );
    } else {
      setCurrentPartnerIndex((prev) =>
        prev >= partners.length - 7 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Affiliations Section */}
        <div className="mb-12">
          <h2 className="text-white text-2xl font-bold mb-6">Affiliations</h2>
          <div className="relative group">
            <div className="flex space-x-4 overflow-hidden">
              {affiliations
                .slice(currentAffiliationIndex, currentAffiliationIndex + 7)
                .map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Affiliation ${index}`}
                    className="w-[150px] h-[100px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
            </div>
            <button
              onClick={() => handlePrev("affiliations")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❮
            </button>
            <button
              onClick={() => handleNext("affiliations")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-6">Partners</h2>
          <div className="relative group">
            <div className="flex space-x-4 overflow-hidden">
              {partners
                .slice(currentPartnerIndex, currentPartnerIndex + 7)
                .map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Partner ${index}`}
                    className="w-[150px] h-[100px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
            </div>
            <button
              onClick={() => handlePrev("partners")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❮
            </button>
            <button
              onClick={() => handleNext("partners")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
