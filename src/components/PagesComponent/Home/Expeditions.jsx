import React from 'react';
import expedition1 from '../assets/expedition1.jpg';
import expedition2 from '../assets/expedition2.jpg';
import expedition3 from '../assets/expedition3.jpg';

const expeditions = [
  {
    title: "Mountain Adventure",
    image: expedition1,
    description: "Conquer the highest peaks with our guided mountain expeditions.",
  },
  {
    title: "Jungle Exploration",
    image: expedition2,
    description: "Discover the secrets of the dense jungles with our expert guides.",
  },
  {
    title: "Desert Safari",
    image: expedition3,
    description: "Experience the vastness of the deserts in a safe and thrilling way.",
  },
];

const Expeditions = () => {
  return (
    <section id="expeditions" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Our Expeditions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expeditions.map((exp, index) => (
            <div key={index} className="bg-white rounded shadow">
              <img src={exp.image} alt={exp.title} className="rounded-t h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expeditions;
