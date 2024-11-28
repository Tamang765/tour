import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} 8K Expeditions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
