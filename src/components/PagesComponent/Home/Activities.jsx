import React from "react";

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
  <div className=" relative bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="h-56 w-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
      <span className="text-yellow-500 text-4xl mb-2">
        <img src={icon} alt="" />
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const OtherActivities = () => (
  <section className="bg-white my-[10vh]">
    <div className="text-center mb-8 bg-gray-800 py-8 ">
      <h2 className="text-3xl font-bold text-white mb-2">
        Other <span className="text-yellow-500">Activities</span>
      </h2>
      <a href="#" className="text-yellow-500 hover:underline font-semibold">
        Explore More
      </a>
    </div>
    <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  </section>
);

export default OtherActivities;
