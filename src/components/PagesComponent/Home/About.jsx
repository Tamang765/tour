import React from "react";
import everest from '../../../assets/img/photo/cover.jpeg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
            <div className="flex flex-col items-center  w-[25vw]  max-w-xs">
              <img
                src="https://8kexpeditions.com/uploaded_images/feature/years-of-expertise-467926.svg"
                alt="Summits Icon"
                className="w-16 h-16 mb-4 border border-gray-300 rounded-lg hover:bg-white transition duration-300 "
              />
              <h3 className="text-xl font-semibold">1500+</h3>
              <p className="text-gray-600">Successful Summits</p>
            </div>
            <div className="flex flex-col items-center  w-full max-w-xs">
              <img
                src="https://8kexpeditions.com/uploaded_images/feature/successful-summits-174790.svg"
                alt="Summits Icon"
                className="w-16 h-16 mb-4  border border-gray-300 rounded-lg hover:bg-white transition duration-300 "
              />
              <h3 className="text-xl font-semibold">1500+</h3>
              <p className="text-gray-600">Successful Summits</p>
            </div>
            <div className="flex flex-col items-center w-full max-w-xs">
              <img
                src="https://8kexpeditions.com/uploaded_images/feature/partners-132824.svg"
                alt="Partners Icon"
                className="w-16 h-16 mb-4  border border-gray-300 rounded-lg hover:bg-white transition duration-300 "
              />
              <h3 className="text-xl font-semibold">40+</h3>
              <p className="text-gray-600">Partners</p>
            </div>
            <div className="flex flex-col items-center w-full max-w-xs">
              <img
                src="https://8kexpeditions.com/uploaded_images/feature/client-served-298787.svg"
                alt="Clients Icon"
                className="w-16 h-16 mb-4 border border-gray-300 rounded-lg hover:bg-white transition duration-300"
              />
              <h3 className="text-xl font-semibold">15000+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 group">
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
              <img
                src={everest}
                alt="Ngodu Sherpa"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Ngodu <span className="text-yellow-500">Sherpa</span>
            </h2>
            <p className="text-lg font-semibold text-gray-600">
              THE RESPONSIBLE CLIMBERS
            </p>
            <p className="text-gray-700 mt-4 mb-6">
              Ngodu Sherpa is a world-class and transformational expedition
              and adventure company with its corporate office based in
              Kathmandu, one of the most picturesque places in the world. We are
              a new start-up, carefully put together by three young tourism
              entrepreneurs
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition">
              ABOUT COMPANY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
