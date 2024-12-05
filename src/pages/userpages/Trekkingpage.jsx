import { Link } from "react-router-dom";
const TrekkingPage = () => {
  const regions = [
    {
      image: "https://8kexpeditions.com/uploaded_images/page/everest-region-10.jpg",
      title: "Everest Region",
      packages: "6 Packages",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Annapurna Region",
      packages: "6 Packages",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/langtang-region-26.jpeg",
      title: "Langtang Region",
      packages: "2 Packages",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Dhaulagiri Region",
      packages: "1 Package",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Manaslu Region",
      packages: "3 Packages",
    },
    {
      image: "https://8kexpeditions.com/uploaded_images/page/annapurna-region-19.jpg",
      title: "Other Region",
      packages: "8 Packages",
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <div className="relative  w-full  h-[80vh]">
        <img src="https://8kexpeditions.com/uploaded_images/page/trekking-1.JPG" alt="Other Activities" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 ">
          <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-3xl md:text-4xl font-[1000] mb-2 tracking-wide">Treeking</h1>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">6 Adventure Styles</p>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 text-center">
        <p className="text-gray-700 text-lg max-w-6xl mx-auto">Trekking is an adventurous activity that requires walking in a wild natural environment for multiple days. Nepal offers numerous trekking trails including the Everest Base Camp Trek, Annapurna Base Camp Trek, Langtang Trek, and many more.</p>
      </div>
      <div className="container max-w-6xl my-8 mx-auto">
        <h2 className=" text-2xl font-bold text-gray-800 mb-8">Trekking Regions</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regions.map((region, index) => (
            <Link to={"/singletreakingpage"} key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={region.image} alt={region.title} className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#006F9C] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute inset-0 flex items-center p-6">
                <div className="text-white opacity-1 transform translate-y-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out ">
                  <p className="text-sm font-medium text-yellow-500">{region.packages}</p>
                  <h3 className="text-lg font-bold">{region.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekkingPage;
