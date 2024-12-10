import SliderImage from "../../components/PagesComponent/SinglePage/SliderImage";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ItinerarySection from "../../components/PagesComponent/SinglePage/ItinerarySection";
const Sliderpage = () => {
  const includes = ["International & Domestic Airport pick-up and drop off", "3-night hotel in Kathmandu with breakfast twin/double bed sharing room", "Welcome dinner in Typical Nepali Restaurant in Kathmandu", "Both-ways domestic flights (KTM – Lukla – KTM), with airport tax", "Necessary land/air transportation for our involved trekking staff", "Permit: All the necessary permits required for EBC Trekking", "Hotel/Lodge accommodation during the trekking", "1-night camping accommodation at EBC (Applicable for April and May only)", "3 Meals a day (Breakfast, Lunch, and Dinner) with Tea/Coffee during the trek", "1 Certified Trekking Guide", "Porters: Necessary porters (2 Members: 1 Porter)", "Insurance for all the involved Nepalese Staffs", "8k Duffle bag (if required)", "Everest Base Camp Trekking Map", "First Aid Medical Kit", "Company Service Charges and Government Taxes"];

  const excludes = ["International flights", "Bank/wire transfer fees (if applicable)", "Travel and Emergency Medical Rescue Insurance", "Lunch and Dinner during your Hotel stay in Kathmandu", "Personal Trekking and Climbing Gears", "Phone calls, Internet, battery recharge, laundry, hot/mineral water, alcoholic beverages, bottles and canned beverages, specialty coffee or espresso drinks, etc.", "Tips for your Guide and Porters", "Any other service not mentioned in the service includes"];
  return (
    <>
      <SliderImage />
      <div className="relative  bg-white">
        <div className="border-b mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:bg-white mobile:border-t-2 mobile:z-[100]">
          <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] flex flex-col lg:flex-row justify-between items-center ">
            <div className="lg:relative lg:z-0 lg:flex md:flex  justify-center space-x-6 text-gray-800 text-md lg:text-base font-semibold  md:py-5 md:flex-row hidden sm:fixed sm:bottom-0 sm:left-0 right-0 sm:bg-white py-5 px-[1rem] border-t-2 z-[200] ">
              <a href="#description" className="hover:text-black transition">
                Description
              </a>
              <a href="#news" className="hover:text-black transition">
                News & Events
              </a>
              <a href="#itinerary" className="hover:text-black transition">
                Itinerary
              </a>
              <a href="#map" className="hover:text-black transition">
                Map
              </a>
              <a href="#includes" className="hover:text-black transition">
                Includes & Excludes
              </a>
              <a href="#notes" className="hover:text-black transition">
                Trip Notes
              </a>
              <a href="#reviews" className="hover:text-black transition">
                Reviews
              </a>
            </div>

            <div className="flex ">
              <button className="bg-yellow-500 text-white px-6 font-semibold shadow hover:bg-yellow-600 transition py-4">BOOK NOW</button>
              <button className="bg-blue-600 text-white px-6 py-2  font-semibold shadow hover:bg-blue-700 transition">GET A QUOTE</button>
            </div>
          </div>
        </div>

        <section id="description" className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem]  mt-8 lg:flex lg:space-x-8 mobile:px-4 medium:px-6">
          <div className="lg:w-3/5 text-justify">
            <div className="overview">
              <h1 className="text-3xl text-gray-700 font-[1000] mb-4">Trip Overview</h1>
              <p className="text-gray-700 mb-4">Everest To Gokyo Lake Trek 2025/2026 in the Everest region is a wonderland for travelers, trekkers, and climbers. With numerous destinations for Trekking, Peak climbing as well as Mountaineering, the Everest region never fails to amaze its visitors with its natural beauty and cultural richness.</p>
              <p className="text-gray-700">Join us on the adventure to the Everest to Gokyo Valley Trek 2025/2026.</p>
            </div>
            <div className="overview mt-5">
              <h1 className="text-2xl text-gray-700 font-bold mb-4">Best Season to go on Everest Base Camp Trek (EBC) 2025</h1>
              <p className="text-gray-700 mb-4">Everest To Gokyo Lake Trek 2025/2026 in the Everest region is a wonderland for travelers, trekkers, and climbers. With numerous destinations for Trekking, Peak climbing as well as Mountaineering, the Everest region never fails to amaze its visitors with its natural beauty and cultural richness.</p>
              <p className="text-gray-700">Join us on the adventure to the Everest to Gokyo Valley Trek 2025/2026.</p>
            </div>
            <div className="overview mt-5">
              <h1 className="text-2xl text-gray-700 font-bold mb-4">Preparation for Mt. Everest Base Camp (EBC) Trek in 2025</h1>
              <p className="text-gray-700 mb-4">Everest To Gokyo Lake Trek 2025/2026 in the Everest region is a wonderland for travelers, trekkers, and climbers. With numerous destinations for Trekking, Peak climbing as well as Mountaineering, the Everest region never fails to amaze its visitors with its natural beauty and cultural richness.</p>
              <p className="text-gray-700">Join us on the adventure to the Everest to Gokyo Valley Trek 2025/2026.</p>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-4 mt-8 lg:mt-0 sticky top-20 h-fit">
            <div className="grid grid-cols-2 gap-4   rounded">
              <div className="flex items-center space-x-2 bg-gray-100 p-4">
                <span className="text-yellow-500 text-xl">⛰️</span>
                <div>
                  <p className="text-sm text-gray-600">Max. Altitude</p>
                  <p className="font-bold">5,420</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 p-4">
                <span className="text-yellow-500 text-xl">📈</span>
                <div>
                  <p className="text-sm text-gray-600">Trip Grade</p>
                  <p className="font-bold">Hard</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 p-4">
                <span className="text-yellow-500 text-xl">🌸</span>
                <div>
                  <p className="text-sm text-gray-600">Best Seasons</p>
                  <p className="font-bold">Spring</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 p-4">
                <span className="text-yellow-500 text-xl">👥</span>
                <div>
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-bold">1-20</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold">News and Events</h2>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-100 p-4 rounded">
                  <img src="https://via.placeholder.com/100" alt="Event" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="font-bold text-sm">MT. MANASLU EXPEDITION SUMMIT UPDATE 2024</h3>
                    <p className="text-gray-600 text-sm">25 Sep 2024</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-100 p-4 rounded">
                  <img src="https://via.placeholder.com/100" alt="Event" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="font-bold text-sm">MT. MANASLU EXPEDITION SUMMIT UPDATE 2024</h3>
                    <p className="text-gray-600 text-sm">25 Sep 2024</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-100 p-4 rounded">
                  <img src="https://via.placeholder.com/100" alt="Event" className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="font-bold text-sm">MT. MANASLU EXPEDITION SUMMIT UPDATE 2024</h3>
                    <p className="text-gray-600 text-sm">25 Sep 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg">View All</button>
              </div>
            </div>
          </div>
        </section>
        <section id="itinerary" className="bg-gray-100  mt-10 ">
          <ItinerarySection />
        </section>

        <section id="includes" className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem]  mt-12">
          <div className=" mt-12">
            <div className="flex flex-col lg:flex-row lg:space-x-8 relative h-fit">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-6">Includes</h3>
                <ul className="space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-lg border border-green-500 rounded-full p-1">
                        <MdCheck size={10} />
                      </span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excludes Section */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 sticky top-20 h-fit">
                <h3 className="text-2xl font-bold mb-6">Excludes</h3>
                <ul className="space-y-3">
                  {excludes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg border border-red-500 rounded-full p-1">
                        <RxCross2 size={10} />
                      </span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem]  mt-12 ">
          <h2 className="text-2xl font-bold mb-6">Trip Notes</h2>
          <p className="text-gray-700">Climbers are advised to prepare and train their bodies and mind in a perfect way to adapt to the remoteness, high altitude, and distance from the families. It is also advised to carry lesser amounts of valuable belongings. Always keep a copy of your passport and photos with you.</p>
          <p className="text-gray-700 mt-4">
            <strong>Weather Dependency:</strong> Trekking and climbing in the Everest Region are highly dependent on weather conditions. We try to schedule our trips at the most favorable time, but in case of emergencies, flights to Lukla may be delayed or canceled. In such situations, extra costs (if any) are to be borne by the client. BK Expeditions will make necessary arrangements for guides and porters.
          </p>
          <p className="text-gray-700 mt-4">Thank you for joining us on our Expedition and Trekking!</p>
        </section>

        <section id="reviews" className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem]  my-12 mobile:px-4 medium:px-6">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>
          <p className="text-gray-700 mb-4">(No reviews yet)</p>

          <div className="bg-white p-8 rounded shadow-lg max-w-6xl mx-auto ">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Add Your Review</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input id="name" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-yellow-400 focus:outline-none" placeholder="Your Full Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input id="email" type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-yellow-400 focus:outline-none" placeholder="Your Email Address" required />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input id="country" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-yellow-400 focus:outline-none" placeholder="Your Country" required />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <select id="rating" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring focus:ring-yellow-400 focus:outline-none" required>
                    <option>5 Stars - Excellent</option>
                    <option>4 Stars - Good</option>
                    <option>3 Stars - Average</option>
                    <option>2 Stars - Below Average</option>
                    <option>1 Star - Poor</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Photo (JPG/JPEG)
                </label>
                <input id="photo" type="file" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-yellow-400 focus:outline-none" accept="image/jpeg, image/jpg" />
              </div>

              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                  Review Text <span className="text-red-500">*</span>
                </label>
                <textarea id="review" className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-yellow-400 focus:outline-none" placeholder="Write your review here (200 words max)" rows="4" maxLength="200" required></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input type="checkbox" id="terms" className="w-5 h-5 border border-gray-300 rounded focus:ring focus:ring-yellow-400 focus:outline-none" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-yellow-500 underline">
                    Terms of Services and Waiver Agreement
                  </a>
                  .
                </label>
              </div>

              <button type="submit" className="w-fit px-5 bg-yellow-500 text-white text-lg font-bold py-2 rounded-lg hover:bg-yellow-600 transition">
                SUBMIT
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sliderpage;
