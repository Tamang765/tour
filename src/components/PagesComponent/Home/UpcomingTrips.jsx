import React from "react";

const trips = [
  {
    location: "Nepal",
    days: "54 Days",
    title: "MOUNT EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1724310231.jpg",
  },
  {
    location: "Pakistan",
    days: "50 Days",
    title: "K2 EXPEDITION (8,611)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719125349.jpeg",
  },
  {
    location: "Nepal",
    days: "51 Days",
    title: "LUXURY EVEREST EXPEDITION SOUTH",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1717652402.jpeg",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "EVEREST GOKYO TREK (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399454.jpg",
  },
  {
    location: "Nepal",
    days: "54 Days",
    title: "LHOTSE EXPEDITION (8,516M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1705647670.jpg",
  },
  {
    location: "Nepal",
    days: "50 Days",
    title: "MAKALU EXPEDITION (8,485M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719124916.jpeg",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "Everest Base Camp Via Gokyo Chola Pass (5,420M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399275.JPG",
  },
  {
    location: "Nepal",
    days: "9 Days",
    title: "EVEREST VIEW POINT TREK (3,900M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/package-1719399054.JPG",
  },
  {
    location: "Nepal",
    days: "18 Days",
    title: "LOBUCHE EAST PEAK (6,119M)",
    detailsLink: "#",
    bookLink: "#",
    image:
      "https://8kexpeditions.com/uploaded_images/package/lobuche-east-peak-6119-m-perfect-6000m-peak-climbing-in-nepal-7.jpg",
  },
];

const TripCard = ({ location, days, title, detailsLink, bookLink, image }) => (
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-3 py-1 rounded">
        {location}
      </div>
      <div className="absolute bottom-2 left-2 bg-white text-blue-900 text-xs font-semibold px-3 rounded">
        {days}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      <div className="flex justify-between items-center">
        <a
          href={detailsLink}
          className="text-yellow-500 text-sm hover:underline font-semibold"
        >
          VIEW DETAILS &raquo;
        </a>
        <a
          href={bookLink}
          className="bg-blue-600 text-sm text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  </div>
);

const UpcomingTrips = () => (
  <section className=" bg-white">
    <div className="mb-[10vh]">
      <h2 className="text-3xl font-bold text-center flex items-center justify-center mb-8 bg-gray-800 py-10 h-[20vh] text-white">
        Upcoming <span className="text-yellow-500">Trips</span>
      </h2>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingTrips;
