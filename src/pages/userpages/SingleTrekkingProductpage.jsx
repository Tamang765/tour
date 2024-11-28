import React from "react";
import { Link } from "react-router-dom";
import everest from '../../assets/img/photo/cover.jpeg'
const SingleTrekkingProductPage = () => {
  const packages = [
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "EVEREST GOKYO TREK (5,420M)",
      duration: "18 Days",
      country: "Nepal",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Everest Base Camp Via Gokyo Chola Pass (5,420M)",
      duration: "20 Days",
      country: "Nepal",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/langtang-region-26.jpeg",
      title: "EVEREST VIEW POINT TREK (3,900M)",
      duration: "9 Days",
      country: "Nepal",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST BASE CAMP TREK (5,300M)",
      duration: "15 Days",
      country: "Nepal",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST THREE HIGH PASS TREK",
      duration: "20 Days",
      country: "Nepal",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST BASE CAMP TREK LUXURY TRIP",
      duration: "13 Days",
      country: "Nepal",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            `url(${everest})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Everest Region</h1>
            <p className="mt-2 text-lg font-medium">6 Packages</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          <strong className="text-gray-900">Everest Region</strong> is a heaven
          for mountaineers and trekkers. With the everlasting beauty of giant
          snow-capped peaks to the admirable serenity of nature in the
          Sagarmatha National Park, Everest Region never disappoints anyone who
          steps into it. Blessed with natural, cultural, and topographical
          diversity as well, Everest Region is undoubtedly one of the best
          places on Earth.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Everest Region Packages
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Link
              to={"/packages/:slug"}
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{pkg.country}</p>
              </div>

              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                {pkg.duration}
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{pkg.country}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="#"
                    className="text-blue-600 bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    View Details
                  </a>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTrekkingProductPage;
