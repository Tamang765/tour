import React from "react";

const CityTourPage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[40vh]">
        <img
          src="https://8kexpeditions.com/uploaded_images/page/other-activities-23.jpg"
          alt="Other Activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-7xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 px-4">
          <div className=" text-white p-6 rounded-lg w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">City Tour</h1>
            <p className="text-lg md:text-xl text-yellow-400">Package</p>
          </div>
        </div>
      </div>

      <div className=" py-10 px-6 lg:px-20 bg-gray-100">
        <p className=" container mx-auto max-w-7xl text-gray-700 text-lg leading-relaxed">
          City Tours are luxury tours that take you around cities with famous
          landmarks. Mostly done with a ride in the private jeep, city tours
          offer an extraordinary opportunity to explore the culture, traditions,
          attractions of the city. City Tours can be customized as per your
          availability of time and budget. We can plan attractive tours for you
          in major cities of Nepal, India, Bhutan, China, and other countries as
          well.
        </p>
      </div>

      <div className="bg-white">
        <div className=" container mx-auto max-w-7xl py-10 ">
          <h2 className="text-3xl font-bold mb-8">City Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-[17vw] h-[35vh] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://8kexpeditions.com/uploaded_images/package/package-1701083879.jpg"
                  alt="Shivapuri National Park Guided City Tour"
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-sm px-3 py-1 rounded">
                  Nepal
                </div>
                <div className="absolute bottom-2 left-2 text-blue-900 font-semibold text-sm px-3 bg-white rounded">
                  1 Days
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-semibold mb-4">
                  SHIVAPURI NATIONAL PARK GUIDED CITY TOUR
                </h3>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-yellow-500 text-sm hover:underline font-semibold"
                  >
                    VIEW DETAILS &raquo;
                  </a>
                  <button className="bg-blue-600 text-sm text-white px-4 py-2 rounded hover:bg-blue-700">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTourPage;
