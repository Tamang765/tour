import React, { useState } from "react";

const SliderImage = () => {
  const images = [
    {
      src: "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "Mount Everest Expedition South",
      subtitle: "Nepal - 54 Days",
    },
    {
      src: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Base Camp",
      subtitle: "Beautiful View of Base Camp",
    },
    {
      src: "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "Summit View",
      subtitle: "Breathtaking Summit View",
    },
    {
      src: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Preparation",
      subtitle: "Preparing for the Journey",
    },
    {
      src: "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "Team Members",
      subtitle: "Meet Our Team",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full relative">
      <div className="relative w-full h-[90vh]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 left-0 w-full text-white px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2 shadow-lg">
            {images[currentIndex].title}
          </h2>
          <p className="text-lg lg:text-2xl font-light shadow-lg">
            {images[currentIndex].subtitle}
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {images.map((img, index) => (
            <button
              key={index}
              className={`w-[60px] h-[60px] rounded-md overflow-hidden border-2 ${
                currentIndex === index
                  ? "border-yellow-500"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SliderImage;
