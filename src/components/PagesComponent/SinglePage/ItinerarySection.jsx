import { useState } from "react";

const Itineraries = [
  {
    day: "1",
    title: "Arrival In Kathmandu Via Tribhuvan International Airport (1350m)",
    description: "Upon your arrival at the TIA, one of our representatives will be waiting to welcome you. After meet and greet, you will be transferred to the hotel booked for you to rest. There you will freshen up and relax. You can go around the streets of Thamel for refreshments.",
    altitude: "1400",
    meals: "N/A",
    Accomodations: "3-4 Stars Hotels",
  },
  {
    day: "2",
    title: "Preparation In Kathmandu, Official Procedures ",
    description: "On the second day, we will fulfill all our official procedures including necessary documentation, obtain permits, and other formalities needed for our expedition. We will start our preparation for our trek. We will now pack our bags, do some necessary shopping, re-check everything that we need (Especially medicines and essentials). Briefings will be made about each and every aspect of the trek and trip duration, accommodation, facilities at the base camp and during the trek. It is also an opportunity for you to communicate and introduce yourself to your fellow trekkers and teammates.",
    altitude: "1350",
    meals: "Breakfast",
    Accomodations: "3-4 Stars Hotels",
  },
  {
    day: "3",
    title: "Fly To Lukla (2840m)  And Trek To Phakding (2610m) 8km",
    description: "Early in the morning, after an amazing breakfast, we will take a thrilling flight to Lukla Airport. The flight gives you a bird’s eye view of the valleys, rivers, hills, and gradually mountain ranges. Even though the flight is only for half an hour, it does not fail to mesmerize you now and then. As we land at Lukla Airport, which is already exciting, we start our trek to Phakding, our destination for the day. After obtaining the permit for the region, we will slowly move through the settlements on a mixed trail of dirt, stone pathways, and some rocky sections at times. This is an easy start so make sure to enjoy all the greeneries, floras, and faunas as you walk. The trail takes you over several suspension bridges and along the Dudh Koshi river. Enjoy the rest of the day at Phakding.",
    altitude: "2100",
    meals: "Breakfast, Lunch, Dinner",
    Accomodations: "Tea Houses",
  },
  {
    day: "4-5",
    title: "Trek To Namche Bazar (3440m) 11km",
    description: "After Phakding, we move towards another beautiful destination, Namche Bazaar, which is the commercial point of the Khumbu region. Passing through the dense luscious forests of pine, juniper, Rhododendron, looking out for animals in the Sagarmatha National Park, climbing the stairs, enjoying the rages of rivers at some points, and mostly walking uphills are the major activities of the day’s trek. This trek will be long and tiring as we start gaining significant elevation. As we reach Namche, we rest at our hotel and enjoy our dinner. The next day, we will go around the village area and experience some local sherpa culture.",
    altitude: "2100",
    meals: "Breakfast, Lunch, Dinner",
    Accomodations: "Tea Houses",
  },
  {
    day: "6",
    title: " Trek To Tengboche Monastery Via Khumjung (3860m, )10 Km.",
    description: "After acclimatizing at Namche, we set our feet on the trail towards Khumjung valley, also called the green valley because of its dense vegetation. We follow the rocky pathways, steep uphills, rugged terrain, and most importantly enjoy the glimpses of the mountains at a distance throughout.After Khumjung, we then approach the most beautiful and tranquil part of this Trek, the Tengboche monastery. This trail is a mix of smooth up and downhill paths with a steep uphill climb through the forests before we reach Tengboche. If we got lucky, we may even be able to spot some musk deer, a herd of Himalayan Tahr, and pheasants along our way. Tengboche monastery is one of the most popular monasteries among Buddhists around the world. The views of Mt. Everest, Nuptse, Lhotse, and Ama Dablam are visible towards the north while Thamserku and Kangtega stand towards the south with striking views. We will also join in some prayer ceremonies and rest for the day.",
    altitude: "2100",
    meals: "Breakfast, Lunch, Dinner",
    Accomodations: "Tea Houses",
  },
];

const ItinerarySection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleVisibility = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem]  py-20">
      <div className="title">
        <h1 className="text-3xl text-gray-700 font-[1000] mb-4">Trip Top Itinerary</h1>
      </div>

      <div className="lists flex gap-10 mt-10">
        <div>
          <h2 className="font-bold text-gray-700">Day</h2>
        </div>
        <div>
          {Itineraries.map((item, index) => (
            <div className={`relative px-12  ${index !== Itineraries.length - 1 ? "min-h-20 mobile:min-h-32 border-l-2 border-black border-dotted" : "min-h-5"}`} key={index}>
              <div className="absolute -top-2 -left-7 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">{item.day}</div>
              <div className="title">
                <h2 className="font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-500 text-lg cursor-pointer" onClick={() => toggleVisibility(index)}>
                  {item.title}
                </h2>
              </div>
              <div className={`hiddens overflow-hidden transition-[max-height] duration-1000 ease-in-out ${expandedIndex === index ? "max-h-[200vh]" : "max-h-0"}`}>
                <div className="desc mt-5 mobile:text-justify">
                  <p>{item.description}</p>
                </div>
                <div className="cards mt-4 grid grid-cols-3 gap-10 mb-5 mobile:grid-cols-1">
                  <div className="bg-white text-center p-6 rounded-md">
                    <h2 className="text-md font-bold text-gray-700">Altitude</h2>
                    <p className="text-sm">{item.altitude}</p>
                  </div>
                  <div className="bg-white text-center p-6 rounded-md">
                    <h2 className="text-md font-bold text-gray-700">Meals</h2>
                    <p className="text-sm">{item.meals}</p>
                  </div>
                  <div className="bg-white text-center p-6 rounded-md">
                    <h2 className="text-md font-bold text-gray-700">Accomodations</h2>
                    <p className="text-sm">{item.Accomodations}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItinerarySection;
