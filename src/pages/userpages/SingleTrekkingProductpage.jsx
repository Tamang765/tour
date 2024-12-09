import { Link } from "react-router-dom";
import everest from "../../assets/img/photo/cover.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const SingleTrekkingProductPage = () => {
  const packages = [
    {
      image: "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "EVEREST GOKYO TREK (5,420M)",
      duration: "18 Days",
      country: "Nepal",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Everest Base Camp Via Gokyo Chola Pass (5,420M)",
      duration: "20 Days",
      country: "Nepal",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/langtang-region-26.jpeg",
      title: "EVEREST VIEW POINT TREK (3,900M)",
      duration: "9 Days",
      country: "Nepal",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST BASE CAMP TREK (5,300M)",
      duration: "15 Days",
      country: "Nepal",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST THREE HIGH PASS TREK",
      duration: "20 Days",
      country: "Nepal",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "EVEREST BASE CAMP TREK LUXURY TRIP",
      duration: "13 Days",
      country: "Nepal",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center h-[80vh] "
        style={{
          backgroundImage: `url(${everest})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] absolute inset-0 flex flex-col items-baseline justify-end mb-5 mobile:p-4 medium:px-6 ">
          <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-3xl md:text-4xl font-[1000] mb-2 tracking-wide">Everest Region</h1>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">6 Packages</p>
          </div>
        </div>
      </div>

      <div className=" mx-auto py-12   bg-gray-200 medium:px-6">
        <p className="text-black text-md leading-relaxed w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] text-justify">
          <strong className="text-gray-900">Everest Region</strong> is a heaven for mountaineers and trekkers. With the everlasting beauty of giant snow-capped peaks to the admirable serenity of nature in the Sagarmatha National Park, Everest Region never disappoints anyone who steps into it. Blessed with natural, cultural, and topographical diversity as well, Everest Region is undoubtedly one of the best places on Earth.
        </p>
      </div>

      <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] py-12 ">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Everest Region Packages</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Link to={`/packages/${pkg.slug}`} key={index} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative overflow-hidden ">
                <img src={pkg.image} alt={pkg.title} className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center 
              transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{pkg.country}</p>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-primary bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
                      View Details
                    </a>
                    <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Book Now</button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{pkg.title}</h3>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mt-2">{pkg.country}</p>
                  <a href="#" className="text-yellow-500 text-sm hover:underline font-semibold flex items-center">
                    VIEW DETAILS <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-md">{pkg.duration}</div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleTrekkingProductPage;
