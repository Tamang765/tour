import React from "react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "Mountain Bike",
    image:
      "https://8kexpeditions.com/uploaded_images/page/mountain-bike-24.jpg",
    icon: "https://8kexpeditions.com/uploaded_images/page/mountain-bike-843991.png",
  },
  {
    title: "Heli Tours",
    image: "https://8kexpeditions.com/uploaded_images/page/heli-tours-7.jpg",
    icon: "https://8kexpeditions.com/uploaded_images/page/heli-tours-980605.png",
  },
  {
    title: "City Tour",
    image: "https://8kexpeditions.com/uploaded_images/page/city-tour-9.jpg",
    icon: "https://8kexpeditions.com/uploaded_images/page/city-tour-928482.png",
  },
  {
    title: "Paragliding",
    image: "https://8kexpeditions.com/uploaded_images/page/paragliding-25.JPG",
    icon: "https://8kexpeditions.com/uploaded_images/page/paragliding-771452.png",
  },
];

const ActivityCard = ({ title, image, icon }) => (
  <Link to={"/city-tour"} className=" group h-fit flex items-center justify-center">
    <div className="mb-9 relative bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="h-80 w-full object-cover" />
      <div className="absolute inset-0 bg-black/20">

      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-center text-white group-hover:bg-opacity-50 transition-all">
        <span className="text-yellow-500 text-4xl mb-2">
          <img src={icon} alt="" />
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  </Link>
);
const ActivitiesPage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[80vh]">
        <img
          src="https://8kexpeditions.com/uploaded_images/page/other-activities-23.jpg"
          alt="Other Activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] absolute inset-0 flex flex-col items-baseline justify-end mb-5 mobile:p-4 medium:px-6 ">
          <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-3xl md:text-4xl font-[1000] mb-2 tracking-wide">
              Other Activities
            </h1>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">
              4 Adventure Styles
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] py-12 bg-white ">
          <p className="text-black text-md leading-relaxed">
            As an Adventure Enthusiast, you may want to explore many other
            activities that 8K Expeditions offers. Be it a city tour, cultural
            trips, river raftings, jungle safaris, or any customized trips that
            you may want to request.
          </p>
        </div>

        <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
