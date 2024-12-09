import React from "react";

const UsefulInfoPage = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[80vh]">
        <img
          src="https://8kexpeditions.com/uploaded_images/page/useful-info-4.jpg"
          alt="Useful Info Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] absolute inset-0 flex flex-col items-baseline justify-end mb-5 ">
        <div className=" text-white py-6 rounded-lg w-full">
            <h1 className="text-3xl md:text-4xl font-[1000] mb-2 tracking-wide">
              8k Expectations
            </h1>
            <p className="text-lg md:text-xl text-yellow-400 font-bold">
             Useful infos
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:px-[5rem]  md:px-[3rem] sm:px-[2rem] px-[1rem] py-12  ">
        <h2 className="text-2xl font-bold mb-4">
          Here are some bonuses of Useful Information:
        </h2>
        <ul className="text-black flex flex-col pl-6  space-y-3 list-disc">
          <li className="text-black">
            While traveling to foreign countries, always make sure you have a
            valid copy of your passports, recently taken photographs, flight
            tickets, hotel booking confirmation, and most importantly your
            travel insurance.
          </li>
          <li className="text-black">
            It is always a great idea to keep the contact details of your
            immediate family members.
          </li>
          <li className="text-black">
            Avoid junk food, alcoholic beverages, and over medication.
          </li>
          <li className="text-black">
            Always get a TIMS card from the concerned authorities.
          </li>
          <li className="text-black">
            Research about the country you are traveling to and the agency you
            are traveling with.
          </li>
          <li className="text-black">
            Include contingency days to avoid missing flights.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsefulInfoPage;
