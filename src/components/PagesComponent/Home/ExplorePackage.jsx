import React, { useState } from "react";

const seasons = [
  { name: "Spring", icon: "🌸" },
  { name: "Summer", icon: "☀️" },
  { name: "Autumn", icon: "🍁" },
  { name: "Winter", icon: "❄️" },
];

const trips = [
  {
    season: "Spring",
    location: "Nepal",
    days: "54 Days",
    title: "MOUNT EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1724310231.jpg",
  },
  {
    season: "Winter",
    location: "Nepal",
    days: "51 Days",
    title: "LUXURY EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399454.jpg",
  },
  {
    season: "Spring",
    location: "Nepal",
    days: "18 Days",
    title: "EVEREST GOKYO TREK (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },

  {
    season: "Spring",
    location: "Nepal",
    days: "54 Days",
    title: "MOUNT EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1724310231.jpg",
  },
  {
    season: "Winter",
    location: "Nepal",
    days: "51 Days",
    title: "LUXURY EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399454.jpg",
  },
  {
    season: "Spring",
    location: "Nepal",
    days: "18 Days",
    title: "EVEREST GOKYO TREK (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
  {
    season: "Spring",
    location: "Nepal",
    days: "54 Days",
    title: "MOUNT EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1724310231.jpg",
  },
  {
    season: "Winter",
    location: "Nepal",
    days: "51 Days",
    title: "LUXURY EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399454.jpg",
  },
  {
    season: "Spring",
    location: "Nepal",
    days: "18 Days",
    title: "EVEREST GOKYO TREK (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
];

const TripCard = ({ location, days, title, detailsLink, bookLink, image }) => (
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-semibold py-1 px-3">
      Booking Open
    </div>
    <div className="p-4">
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="font-bold text-lg">{days}</p>
      <h3 className="text-xl font-semibold my-2">{title}</h3>
      <div className="flex justify-between mt-4">
        <a
          href={detailsLink}
          className="text-yellow-500 hover:underline text-sm font-semibold"
        >
          VIEW DETAILS &gt;&gt;
        </a>
        <a
          href={bookLink}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  </div>
);

const ExplorePackages = () => {
  const [activeSeason, setActiveSeason] = useState("Spring");

  const filteredTrips = trips.filter((trip) => trip.season === activeSeason);

  return (
    <section className="">
      <div className="bg-gray-800 py-10 mb-8 ">
        <div className="max-w-6xl container mx-auto  mb-8">
          <h2 className="text-3xl max-w-6xl font-bold text-white mb-2">
            Explore <span className="text-yellow-500">Packages</span>
          </h2>
          <p className="text-yellow-500 font-semibold">
            Our Seasonal Recommendations
          </p>
        </div>
        <div className="max-w-6xl flex container mx-auto space-x-4 mb-6">
          {seasons.map((season) => (
            <button
              key={season.name}
              onClick={() => setActiveSeason(season.name)}
              className={`px-4 py-2 rounded-lg ${
                activeSeason === season.name
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700"
              } font-semibold shadow-lg`}
            >
              <span className="text-lg mr-2">{season.icon}</span> {season.name}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-6xl container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="#"
          className="mt-4 flex text-center text-white font-semibold px-4 py-2 rounded-lg bg-yellow-500 text-sm"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default ExplorePackages;
