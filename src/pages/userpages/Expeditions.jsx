import { ExpeditionHero } from "../../components/PagesComponent/Home/ExpeditionStats";

const Expeditions = () => {
  return (
    <div className="bg-gray-100 ">
      <ExpeditionHero/>
      {/* <div className="relative  w-full  h-[80vh] mobile:h-[50vh]">
        <img src="https://8kexpeditions.com/uploaded_images/page/trekking-1.JPG" alt="Other Activities" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 mobile:p-4 ">
          <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-3xl md:text-4xl font-[1000] mb-2 tracking-wide">Expeditions</h1>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">our expeditions</p>
          </div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto py-12 mobile:px-4 medium:px-6">
        <h1 className="text-black text-4xl font-[1000]">Expeditions</h1>

        <h3 className="font-semibold text-yellow-500 text-md mt-2 ">Introduction</h3>
        <p className="text-black text-md leading-relaxed mt-5">
        Expeditions are organized journeys to attain a particular purpose. In Travel and Tourism, Expeditions are meant to explore the Himalayas, to conquer the height, and to enjoy the victory on the top of snow-capped peaks. Eight K Expeditions organizes numerous trips to the summits of giant snow-capped peaks. Check out our packages to find the best suit for you!
          </p>
      </div>
    </div>
  );
};

export default Expeditions;
