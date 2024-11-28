import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${"https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg"})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded">
        <h2 className="text-white text-4xl mb-4">Explore the World with Us</h2>
        <p className="text-gray-300 mb-6">Join our 8K expeditions to discover uncharted territories.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
