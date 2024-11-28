import React from "react";
import { Link } from "react-router-dom";
const TrekkingPage = () => {
  const regions = [
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "Everest Region",
      packages: "6 Packages",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Annapurna Region",
      packages: "6 Packages",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/langtang-region-26.jpeg",
      title: "Langtang Region",
      packages: "2 Packages",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Dhaulagiri Region",
      packages: "1 Package",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Manaslu Region",
      packages: "3 Packages",
    },
    {
      image:
        "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Other Region",
      packages: "8 Packages",
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url(https://8kexpeditions.com/uploaded_images/page/trekking-1.JPG)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Trekking</h1>
            <p className="mt-2 text-lg font-medium">6 Adventure Styles</p>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 text-center">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Trekking is an adventurous activity that requires walking in a wild
          natural environment for multiple days. Nepal offers numerous trekking
          trails including the Everest Base Camp Trek, Annapurna Base Camp Trek,
          Langtang Trek, and many more.
        </p>
      </div>
      <div className="container max-w-6xl my-8 mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Trekking Regions
        </h2>
        <div className="grid grid-cols-1 m-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <Link
              to={"/singletreakingpage"}
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={region.image}
                alt={region.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="text-white transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-[-50%] group-hover:text-left w-full">
                  <p className="text-sm font-medium">{region.packages}</p>
                  <h3 className="text-lg font-bold">{region.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekkingPage;
