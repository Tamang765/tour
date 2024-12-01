import React from "react";
import { HeadingComponent } from "./UpcomingTrips";

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
  <div className=" relative bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer">
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity " />

    <img src={image} alt={title} className=" h-72 w-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white">
      <span className="text-yellow-500 text-4xl mb-2">
        <img src={icon} alt="activity" />
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const OtherActivities = () => (
  <section className="my-[10vh]">
    <div className="text-center mb-8 bg-gray-800 py-8 ">
      <HeadingComponent
        heading={"Other"}
        section={"Activities"}
        more={"Explore More"}
      />
    </div>
    <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  </section>
);

export default OtherActivities;
