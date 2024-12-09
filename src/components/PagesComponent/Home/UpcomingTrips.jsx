import React, { useState } from "react";

const trips = [
  {
    location: "Nepal",
    days: "54 Days",
    title: "MOUNT EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
  {
    location: "Pakistan",
    days: "50 Days",
    title: "K2 EXPEDITION (8,611)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
  {
    location: "Nepal",
    days: "51 Days",
    title: "LUXURY EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "EVEREST GOKYO TREK (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1719399454.jpg",
  },
  {
    location: "Nepal",
    days: "54 Days",
    title: "LHOTSE EXPEDITION (8,516M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1705647670.jpg",
  },
  {
    location: "Nepal",
    days: "50 Days",
    title: "MAKALU EXPEDITION (8,485M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1719124916.jpeg",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "Everest Base Camp Via Gokyo Chola Pass (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1719399275.JPG",
  },
  {
    location: "Nepal",
    days: "9 Days",
    title: "EVEREST VIEW POINT TREK (3,900M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/package-1719399054.JPG",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "LOBUCHE EAST PEAK (6,119M)",
    detailsLink: "#",
    bookLink: "#",
    image: "https://8kexpeditions.com/uploaded_images/package/lobuche-east-peak-6119-m-perfect-6000m-peak-climbing-in-nepal-7.jpg",
  },
];

const TripCard = ({ location, days, title, detailsLink, bookLink, image }) => (
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="relative group border-4">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-3 py-1 rounded">{location}</div>
      <div className="absolute bottom-0 h-fit  bg-white w-full text-blue-900 text-xs font-semibold px-3">
        Nepal
        <br />
        {days}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      <div className="flex justify-between items-center">
        <a href={detailsLink} className="text-yellow-500 text-sm hover:underline font-semibold">
          VIEW DETAILS &raquo;
        </a>
        <a href={bookLink} className="bg-blue-600 text-sm text-white px-4 py-2 rounded hover:bg-blue-700">
          BOOK NOW
        </a>
      </div>
    </div>
  </div>
);

const UpcomingTrips = () => (
  <section className=" ">
    <div className="mb-[10vh]">
      <div className="py-10 bg-gray-800">
        <HeadingComponent heading={"Upcoming"} section={"Trips"} more={""} />
      </div>
      <div className="w-full px-[1rem] lg:px-[5rem] md:px-[3rem] sm:px-[2rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 sm:gap-10  mt-10 sm:mt-10">
        {trips.map((trip, index) => (
          <ExpeditionCard key={index} {...trip} />
          // <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingTrips;

export function ExpeditionCard({ location, days, title, detailsLink, bookLink, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:max-w-xl mx-auto">
      <div className="relative rounded-lg overflow-hidden group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Main Image Container */}
        <div className="relative aspect-video overflow-hidden mobile:overflow-visible">
          {/* Background Image */}
          <img src={image} alt="Makalu Mountain" className="w-full h-full mobile:h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

          {/* Text Overlay */}
          <div className={`absolute inset-x-0 bottom-0 bg-gray-100 bg-opacity-20 transition-all duration-300 ease-in-out ${isHovered ? "h-full" : "h-0"}`}>
            <div className={`p-6 transform transition-transform duration-300 ease-in-out ${isHovered ? "translate-y-0" : "translate-y-full"}`}>
              <h3 className="text-orange-400 text-3xl font-bold mb-2">{location}</h3>
              <p className="text-white text-xl font-bold">{days}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-3 ">
        <h2 className="text-lg font-bold text-gray-900 min-h-16 line-clamp-3 mobile:font-[900]">{title}</h2>

        <div className="flex items-center justify-between">
          <a href={detailsLink} className="text-orange-400 group  font-bold hover:text-orange-500 text-sm transition-colors flex items-center gap-1">
            VIEW DETAILS
            <span className="text-xl group-hover:translate-x-3 duration-700 ease-out" aria-hidden="true">
              »
            </span>
          </a>

          <button className="bg-navy-800 text-white px-8 py-3 rounded-xl mobile:rounded-none text-sm font-semibold hover:bg-navy-900 transition-colors hover:text-orange-500">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export const HeadingComponent = ({ heading, section, more, link }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center  bg-gray-800  mobile:py-5 text-white">
      <h2 className="text-4xl mobile:text-3xl font-bold text-center flex items-center justify-center bg-gray-800  text-white gap-2">
        {heading} <span className="text-yellow-500"> {section}</span>
      </h2>
      <a href={link} className="text-yellow-500 hover:underline font-semibold">
        {more}
      </a>
    </div>
  );
};
``;
