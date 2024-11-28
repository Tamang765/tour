import React from "react";
import SliderSection from "../PagesComponent/FooterSection/SliderFooter";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <SliderSection />
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">8K Expeditions</h2>
              <p className="text-gray-400 mb-4">We Accept:</p>
              <div className="flex space-x-2 mb-4">
                <img
                  src="https://via.placeholder.com/50x30?text=Visa"
                  alt="Visa"
                  className="w-[50px]"
                />
                <img
                  src="https://via.placeholder.com/50x30?text=MasterCard"
                  alt="MasterCard"
                  className="w-[50px]"
                />
                <img
                  src="https://via.placeholder.com/50x30?text=Amex"
                  alt="American Express"
                  className="w-[50px]"
                />
                <img
                  src="https://via.placeholder.com/50x30?text=Discover"
                  alt="Discover"
                  className="w-[50px]"
                />
              </div>
              <p className="text-gray-400">Recommended By:</p>
              <img
                src="https://via.placeholder.com/100x30?text=TripAdvisor"
                alt="TripAdvisor"
                className="mt-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Destinations</h3>
                <ul className="flex flex-col text-gray-400 space-y-2">
                  <li>Nepal</li>
                  <li>Pakistan</li>
                  <li>China</li>
                  <li>India</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Activities</h3>
                <ul className="flex flex-col text-gray-400 space-y-2">
                  <li>Expeditions</li>
                  <li>Trekking</li>
                  <li>Other Activities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">7 Summits</h3>
              <ul className="flex flex-col text-gray-400 space-y-2">
                <li>Mount Everest</li>
                <li>Cerro Aconcagua</li>
                <li>Kilimanjaro</li>
                <li>McKinley (Denali)</li>
                <li>Mount Elbrus</li>
                <li>Mount Vinson</li>
                <li>Carstensz Pyramid</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Talk to Experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Lakpa Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Lakpa Sherpa</h4>
                  <p className="text-yellow-400">+977-9818288444</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Lakpa Thendu Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Lakpa Thendu Sherpa</h4>
                  <p className="text-yellow-400">+977-9869532709</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Pemba Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Pemba Sherpa</h4>
                  <p className="text-yellow-400">+977-9803739705</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📞
              </span>
              <p className="text-gray-400">+977-9808721040</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📧
              </span>
              <p className="text-gray-400">info@8kexpeditions.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📍
              </span>
              <p className="text-gray-400">Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-2">Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for us to get contemporary travel updates.
            </p>
            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-l-lg w-1/2 bg-gray-600 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg hover:bg-yellow-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <p className="text-gray-400 text-sm">
            All emails to 8K Expeditions are requested to be sent to only{" "}
            <a
              href="mailto:info@8kexpeditions.com"
              className="text-yellow-400 hover:underline"
            >
              info@8kexpeditions.com
            </a>{" "}
            to receive the valid response.
          </p>

          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved at{" "}
            <span className="font-bold text-white">8K EXPEDITIONS</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
