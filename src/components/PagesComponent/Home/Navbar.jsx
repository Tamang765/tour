import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">8K Expeditions</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#expeditions" className="text-gray-300 hover:text-white">Expeditions</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
