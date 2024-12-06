import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CityTourPage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[50vh]">
        <img src="https://8kexpeditions.com/uploaded_images/page/other-activities-23.jpg" alt="Other Activities" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 mobile:p-4 ">
          <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">City Tour</h1>
            <p className="text-lg md:text-xl text-yellow-400">Package</p>
          </div>
        </div>
      </div>

      <div className=" py-20   bg-gray-100 mobile:px-4 ">
        <p className=" container mx-auto max-w-6xl text-black text-md leading-relaxed text-justify">City Tours are luxury tours that take you around cities with famous landmarks. Mostly done with a ride in the private jeep, city tours offer an extraordinary opportunity to explore the culture, traditions, attractions of the city. City Tours can be customized as per your availability of time and budget. We can plan attractive tours for you in major cities of Nepal, India, Bhutan, China, and other countries as well.</p>
      </div>

      <div className="bg-white">
        <div className=" container mx-auto max-w-6xl py-10 mobile:px-4 ">
          <h2 className="text-3xl font-bold mb-8">City Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className=" h-fit bg-white  rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src="https://8kexpeditions.com/uploaded_images/package/package-1701083879.jpg" alt="Shivapuri National Park Guided City Tour" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#006F9C] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-0 flex items-center p-3">
                  <div className="text-white opacity-1 transform translate-y-32 mobile:translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out ">
                    <p className="text-sm font-medium text-yellow-500">1 Days</p>
                    <h3 className="text-lg font-bold">Nepal</h3>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <h3 className="text-lg font-bold mb-4">SHIVAPURI NATIONAL PARK GUIDED CITY TOUR</h3>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-yellow-500 text-sm hover:underline font-semibold flex items-center">
                    VIEW DETAILS <MdKeyboardDoubleArrowRight size={20} />
                  </a>
                  <button className="bg-[#006F9C] text-sm text-white px-4 py-2 rounded hover:bg-[#006F9C]">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTourPage;
