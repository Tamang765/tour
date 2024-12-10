import React, { useEffect, useState } from "react";

const SliderSection = () => {
  const affiliations = ["https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png", "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377464.png", "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377690.png", "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672377378.png", "https://8kexpeditions.com/uploaded_images/feature/affiliations-1672380323.jpg", "https://8kexpeditions.com/uploaded_images/feature/affiliations-1720683128.jpg"];

  const partners = [...affiliations]; // Using the same for demonstration.

  const [currentAffiliationIndex, setCurrentAffiliationIndex] = useState(affiliations.length);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(partners.length);
  const [visibleSlides, setVisibleSlides] = useState(5); // Default is 5 slides for larger screens.

  // Adjust visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(2); // Mobile view
      } else {
        setVisibleSlides(5); // Normal view
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate the array for infinite effect
  const duplicateArray = (arr) => [...arr, ...arr, ...arr];

  const extendedAffiliations = duplicateArray(affiliations);
  const extendedPartners = duplicateArray(partners);

  const slideWidthPercentage = 100 / visibleSlides;

  // Infinite sliding for affiliations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffiliationIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Infinite sliding for partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = (type) => {
    if (type === "affiliations" && currentAffiliationIndex >= affiliations.length * 2) {
      setCurrentAffiliationIndex(affiliations.length);
    }
    if (type === "partners" && currentPartnerIndex >= partners.length * 2) {
      setCurrentPartnerIndex(partners.length);
    }
  };

  const handlePrev = (type) => {
    if (type === "affiliations") {
      setCurrentAffiliationIndex((prev) => (prev <= affiliations.length ? affiliations.length * 2 - 1 : prev - 1));
    } else {
      setCurrentPartnerIndex((prev) => (prev <= partners.length ? partners.length * 2 - 1 : prev - 1));
    }
  };

  const handleNext = (type) => {
    if (type === "affiliations") {
      setCurrentAffiliationIndex((prev) => prev + 1);
    } else {
      setCurrentPartnerIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="">
        {/* Affiliations Section */}
        <div className="mb-12 relative">
          <h2 className="text-white text-2xl font-bold mb-6">Affiliations</h2>
          <div className="relative h-fit group">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 gap-5 "
                style={{
                  transform: `translateX(-${(currentAffiliationIndex % (affiliations.length * 2)) * slideWidthPercentage}%)`,
                }}
                onTransitionEnd={() => handleTransitionEnd("affiliations")}
              >
                {extendedAffiliations.map((src, index) => (
                  <div key={index} className="bg-white flex-shrink-0 flex items-center justify-center h-28 mobile:h-28 rounded-lg" style={{ width: `${slideWidthPercentage}%` }}>
                    <img src={src} alt={`Affiliation ${index}`} className="w-auto h-[90%] aspect-square hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            {/* Prev and Next Buttons */}
            <button onClick={() => handlePrev("affiliations")} className=" hidden absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 bg-yellow-500 text-black font-bold rounded-full w-10 h-10 lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition mobile:hidden">
              ❮
            </button>
            <button onClick={() => handleNext("affiliations")} className=" hidden absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 bg-yellow-500 text-black font-bold rounded-full w-10 h-10 lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition mobile:hidden">
              ❯
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="relative">
          <h2 className="text-white text-2xl font-bold mb-6">Partners</h2>
          <div className="relative h-fit group">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 gap-5"
                style={{
                  transform: `translateX(-${(currentPartnerIndex % (partners.length * 2)) * slideWidthPercentage}%)`,
                }}
                onTransitionEnd={() => handleTransitionEnd("partners")}
              >
                {extendedPartners.map((src, index) => (
                  <div key={index} className="bg-white flex-shrink-0 flex items-center justify-center h-28 mobile:h-28 rounded-lg" style={{ width: `${slideWidthPercentage}%` }}>
                    <img src={src} alt={`Partner ${index}`} className="w-auto h-[90%] aspect-square hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
              {/* Prev and Next Buttons */}
            </div>
            <button onClick={() => handlePrev("partners")} className=" hidden absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 bg-yellow-500 text-black font-bold rounded-full w-10 h-10 lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition mobile:hidden">
              ❮
            </button>
            <button onClick={() => handleNext("partners")} className="hidden absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 bg-yellow-500 text-black font-bold rounded-full w-10 h-10 lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition mobile:hidden">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
