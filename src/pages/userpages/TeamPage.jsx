import React from "react";
import ngodu from "../../assets/img/photo/ceo.jpeg";
import ceo from "../../assets/img/photo/meroway.jpeg";

const TeamPage = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[50vh]">
        <img
          src={ceo}
          alt="Our Team Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">About Ngodu</h1>
          <p className="text-lg text-yellow-400 mt-2 font-semibold">
            Experienced mountain climber and good trekking guide
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-12 px-6 text-justify">
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="text-yellow-500 font-bold">Ngodu Sherpa</span>,
          our team brings together a combination of
          <span className="font-semibold text-blue-500">
            {" "}
            Internationally Certified Mountain Guides
          </span>
          , seasoned mountaineering experts, and Himalaya specialists dedicated
          to delivering safe and memorable expedition experiences. Our board of
          directors are undoubtedly the face of Himalayan mountaineering due to
          their decades of experience in guiding aspiring climbers and making
          their dream summits into reality. With years of expertise and the
          synergy of our team, the joint effort of our team has led groups
          across the world’s most challenging peaks, including
          <span className="font-semibold text-blue-500">
            {" "}
            Mt. Everest, K2, Annapurna, Manaslu
          </span>
          , and other 8000m peaks of the world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 ">
          Meet the exceptional team at{" "}
          <span className="text-yellow-500 font-bold">Ngodu Sherpa</span>,
          including our Directors, Official Staff, IFMGA-certified Guides,
          Climbing Guides, and Trekking Guides. Their relentless commitment and
          expertise have established Ngodu Sheroa as one of the world's elite
          expedition operators.
        </p>
      </div>

      <div className="container mx-auto max-w-5xl py-8 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Visionary Board Of Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={ngodu}
              alt="Ngodu Sherpas"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Mr Ngodu Sherpa
              </h3>
              <p className="text-yellow-500 font-semibold">
                Executive Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
