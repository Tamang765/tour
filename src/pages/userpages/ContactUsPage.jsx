import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUsPage = () => {
  return (
    <div>
      <div className="w-full">
        <div className="relative w-full h-[80vh] ">
          <img src="https://8kexpeditions.com/uploaded_images/page/other-activities-23.jpg" alt="Other Activities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 mobile:px-4 medium:px-6">
            <div className=" text-white py-6  rounded-lg w-full">
              <h1 className="text-4xl font-[1000] mb-4">Contact Us</h1>
              <p className="text-sm w-[30vw] mobile:w-[50vw]">Eight K Expeditions Pvt. Ltd. is dedicated to providing you the best service in the Travel and Tourism Industry. Our Customer Support is available 24/7 for any queries you may have. Just give us a call or leave us a text. We will respond right away.</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition">
                  <i>
                    <FaFacebookF size={20} />
                  </i>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition">
                  <i>
                    <FaTwitter size={20} />
                  </i>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition">
                  <i>
                    <FaInstagram size={20} />
                  </i>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition">
                  <i>
                    <FaYoutube size20 />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto max-w-6xl py-12 mobile:px-4 medium:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-[1000] mb-6 text-gray-700">8K Expeditions</h2>
              <div className="mb-6 flex items-center gap-3">
                <i className="fas fa-phone-alt text-primary mr-2">
                  <FaPhone size={30} />
                </i>

                <div>
                  <p> Call Us</p>
                  <p className="text-yellow-500 text-lg">+977-9808721040 / +977-9815784436</p>
                </div>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary mr-2">
                  <FaLocationDot size={30} />
                </i>

                <div>
                  <p>Visit Us</p>
                  <p className="text-yellow-500 text-lg">Kathmandu, Nepal</p>
                </div>
              </div>
              <h2 className="text-3xl font-[1000] mt-8 mb-6 text-gray-700">Talk to our Founders</h2>
              <div className="space-y-10 px-3">
                <div className="">
                  <p className="text-md font-semibold"> Mr. Lakpa Sherpa</p>

                  <div className="flex items-center gap-3 text-yellow-500 font-bold text-xl">
                    <i className="">
                      <FaPhone size={15} />
                    </i>
                    +977-9808721040
                  </div>
                </div>
                <div className="">
                  <p className="text-md font-semibold">  Mr. Lakpa Thendu Sherpa</p>

                  <div className="flex items-center gap-3 text-yellow-500 font-bold text-xl">
                    <i className="">
                      <FaPhone size={15} />
                    </i>
                    +977-9808721040
                  </div>
                </div>
                <div className="">
                  <p className="text-md font-semibold"> Mr. Pemba Sherpa</p>

                  <div className="flex items-center gap-3 text-yellow-500 font-bold text-xl">
                    <i className="">
                      <FaPhone size={15} />
                    </i>
                    +977-9808721040
                  </div>
                </div>
               
               
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-[1000] mb-10">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-md font-semibold mb-2">Name:</label>
                  <input type="text" className="w-full border text-sm bg-gray-100 rounded-lg p-2" placeholder="Full Name" required />
                </div>
                <div>
                  <label className="block text-md font-semibold mb-2">Email:</label>
                  <input type="email" className="w-full border text-sm bg-gray-100 rounded-lg p-2" placeholder="Email Address" required />
                </div>
                <div>
                  <label className="block text-md font-semibold mb-2">Phone:</label>
                  <input type="text" className="w-full border text-sm bg-gray-100 rounded-lg p-2" placeholder="Phone Number" required />
                </div>
                <div>
                  <label className="block text-md font-semibold mb-2">Message:</label>
                  <textarea className="w-full border text-sm bg-gray-100 rounded-lg p-2" placeholder="Enter Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
