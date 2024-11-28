import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <div className="w-full">
        <div className="relative w-full h-[40vh]">
          <img
            src="https://8kexpeditions.com/uploaded_images/page/other-activities-23.jpg"
            alt="Other Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col items-baseline justify-end mb-5 px-4">
            <div className=" text-white p-6 rounded-lg w-full">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-sm w-[20vw]">
                Eight K Expeditions Pvt. Ltd. is dedicated to providing you the
                best service in the Travel and Tourism Industry. Our Customer
                Support is available 24/7 for any queries you may have. Just
                give us a call or leave us a text. We will respond right away.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 hover:bg-yellow-600 transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 hover:bg-yellow-600 transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 hover:bg-yellow-600 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 hover:bg-yellow-600 transition"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto max-w-6xl py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">8K Expeditions</h2>
              <div className="mb-6">
                <p className="text-lg font-semibold">
                  <i className="fas fa-phone-alt text-yellow-500 mr-2"></i> Call
                  Us
                </p>
                <p className="text-yellow-500 text-lg">
                  +977-9808721040 / +977-9815784436
                </p>
              </div>
              <div className="mb-6">
                <p className="text-lg font-semibold">
                  <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i>{" "}
                  Visit Us
                </p>
                <p className="text-yellow-500 text-lg">Kathmandu, Nepal</p>
              </div>
              <h2 className="text-2xl font-bold mt-8 mb-6">
                Talk to our Founders
              </h2>
              <div className="space-y-4">
                <p className="text-lg">
                  <i className="fas fa-user text-yellow-500 mr-2"></i> Mr. Lakpa
                  Sherpa
                  <br />
                  <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>{" "}
                  +977-9808721040
                </p>
                <p className="text-lg">
                  <i className="fas fa-user text-yellow-500 mr-2"></i> Mr. Lakpa
                  Thendu Sherpa
                  <br />
                  <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>{" "}
                  +977-9808721040
                </p>
                <p className="text-lg">
                  <i className="fas fa-user text-yellow-500 mr-2"></i> Mr. Pemba
                  Sherpa
                  <br />
                  <i className="fas fa-phone-alt text-yellow-500 mr-2"></i>{" "}
                  +977-9808721040
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Phone:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Message:
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
                >
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
