import React from 'react';

const ExpeditionStats = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${"https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg"})` }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center text-white flex flex-col items-center space-y-3">
        {/* Circle Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 mb-8">
          <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white bg-opacity-90 text-black rounded-full text-center shadow-lg">
            <div>
              <p className="text-lg md:text-xl font-bold">OVER</p>
              <p className="text-2xl md:text-3xl font-bold">7000</p>
              <p className="text-lg md:text-xl">METERS</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white bg-opacity-90 text-black rounded-full text-center shadow-lg">
            <div>
              <p className="text-lg md:text-xl font-bold">OVER</p>
              <p className="text-2xl md:text-3xl font-bold">8000</p>
              <p className="text-lg md:text-xl">METERS</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white bg-opacity-90 text-black rounded-full text-center shadow-lg">
            <div>
              <p className="text-lg md:text-xl font-bold">OVER</p>
              <p className="text-2xl md:text-3xl font-bold">6000</p>
              <p className="text-lg md:text-xl">METERS</p>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">8K Expeditions</h1>
        <p className="text-md md:text-lg lg:text-xl font-semibold text-yellow-500">Conquer The Mountains</p>
      </div>
    </section>
  );
};

export default ExpeditionStats;
