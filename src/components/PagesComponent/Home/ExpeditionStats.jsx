import React from "react";

const ExpeditionStats = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${"https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg"})`,
      }}
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          8K Expeditions
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-semibold text-yellow-500">
          Conquer The Mountains
        </p>
      </div>
    </section>
  );
};

export default ExpeditionStats;

export function ExpeditionHero() {
  const CircleComp = ({ children }) => {
    return (
      <div className="relative p-4 border-2 rounded-full bg-white  mb-4 group-hover:border-blue-500 group-hover:text-white">
        <div className="lg:w-40 w-20 lg:h-40 h-20 bg-gray-100 rounded-full flex flex-col  items-center justify-center group transition-colors duration-500 hover:bg-blue-500 group-hover:text-white">
          {/* <stat.icon className="w-8 h-8 text-gray-800 group-hover:text-white" /> */}
          {children}
        </div>
      </div>
    );
  };

  return (
    <div
      className=" bg-navy-900 relative flex flex-col items-center justify-center p-4 py-32 mobile:py-20 mobile:gap-10 mobile:flex-col-reverse"
      style={{
        backgroundImage: `url(${"https://8kexpeditions.com/uploaded_images/page/expeditions-2.jpeg"})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlend: "overlay",
      }}
    >
      <CircleComp>
        <div className="text-sm font-medium text-gray-600">OVER</div>
        <div className="text-4xl font-bold text-gray-900">700</div>
        <div className="text-sm font-medium text-gray-600">METERS</div>
      </CircleComp>

      {/* Left Circle */}
      <div className="absolute left-[10%] md:left-[25%] top-[50%]   transform transition-transform hover:scale-105 mobile:relative mobile:left-0">
        <CircleComp>
          <div className="text-sm font-medium text-gray-600">OVER</div>
          <div className="text-4xl font-bold text-gray-900">700</div>
          <div className="text-sm font-medium text-gray-600">METERS</div>
        </CircleComp>
      </div>

      {/* Right Circle */}
      <div className="absolute right-[10%] md:right-[25%] top-[50%] transform transition-transform hover:scale-105 mobile:relative mobile:right-0">
        <CircleComp>
          <div className="text-sm font-medium text-gray-600">OVER</div>
          <div className="text-4xl font-bold text-gray-900">700</div>
          <div className="text-sm font-medium text-gray-600">METERS</div>
        </CircleComp>
      </div>

      {/* Center Content */}
      <div className="text-center z-10 mt-32 md:mt-0 mobile:mt-0">
        <img src="/logowhite.png" alt="logo" className=" w-56 mobile:w-64 aspect-square " />
      </div>
    </div>
  );
}
