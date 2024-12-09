import React from "react";
import { FaHandshake, FaHeadset, FaUsers, FaUserShield } from "react-icons/fa"; // Icons example

const features = [
  { icon: <FaUserShield size={36} />, title: "Wealth Of Experience" },
  { icon: <FaHandshake size={36} />, title: "Reliable And Credible" },
  { icon: <FaUsers size={36} />, title: "A Huge Team Of Guides" },
  { icon: <FaHeadset size={36} />, title: "Dedicated Customer Support" },
];

const Why8KExpeditions = () => {
  return (
    <section className="py-16 bg-white sm:py-20">
      <div className="w-full px-[1rem] lg:px-[5rem] md:px-[3rem] sm:px-[2rem] text-center ">
        <h2 className="text-3xl font-bold mb-4 sm:text-4xl sm:text-center sm:px-10 sm:font-[900]">Why 8K Expeditions?</h2>
        <p className="text-yellow-500 font-semibold mb-8 sm:font-bold sm:px-10">
          Unwavering Safety & Exceptional Quality Service!
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 sm:gap-10 gap-8 mb-12 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="lg:w-24 w-32 lg:h-24 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <div className="text-gray-600">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold md:text-1xl">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why8KExpeditions;
