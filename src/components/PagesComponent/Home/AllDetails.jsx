import React from "react";
import { FaUserShield, FaHandshake, FaUsers, FaHeadset } from "react-icons/fa"; // Icons example

const features = [
  { icon: <FaUserShield size={24} />, title: "Wealth Of Experience" },
  { icon: <FaHandshake size={24} />, title: "Reliable And Credible" },
  { icon: <FaUsers size={24} />, title: "A Huge Team Of Guides" },
  { icon: <FaHeadset size={24} />, title: "Dedicated Customer Support" },
];

const Why8KExpeditions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-4">Why 8K Expeditions?</h2>
        <p className="text-yellow-500 font-semibold mb-8">
          Unwavering Safety & Exceptional Quality Service!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <div className="text-gray-600">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why8KExpeditions;
