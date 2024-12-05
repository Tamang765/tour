import { Mail, MapPin, Phone } from "lucide-react";
import image from "../../assets/img/footer/visa.png"
import image2 from "../../assets/img/footer/trip.png"
import SliderSection from "../PagesComponent/FooterSection/SliderFooter";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10 ">
        <div className="max-w-6xl m-auto px-4">
          <SliderSection />
        </div>
        <div className="container mx-auto max-w-6xl m-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">8K Expeditions</h2>
              <p className="text-gray-400 mb-4">We Accept:</p>
              <div className="flex space-x-2 mb-4">
                <img
                  src={image}
                  alt="Visa"
                  className="w-full h-[50px] aspect-square"
                />
                
              </div>
              <p className="text-gray-400">Recommended By:</p>
              <img
                src={image2}
                alt="TripAdvisor"
                className="mt-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Destinations</h3>
                <ul className="flex flex-col text-gray-400 space-y-2">
                  <li>Nepal</li>
                  <li>Pakistan</li>
                  <li>China</li>
                  <li>India</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Activities</h3>
                <ul className="flex flex-col text-gray-400 space-y-2">
                  <li>Expeditions</li>
                  <li>Trekking</li>
                  <li>Other Activities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">7 Summits</h3>
              <ul className="flex flex-col text-gray-400 space-y-2">
                <li>Mount Everest</li>
                <li>Cerro Aconcagua</li>
                <li>Kilimanjaro</li>
                <li>McKinley (Denali)</li>
                <li>Mount Elbrus</li>
                <li>Mount Vinson</li>
                <li>Carstensz Pyramid</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Other Links</h3>
              <ul className="flex flex-col text-gray-400 space-y-2">
                <li>Mount Everest</li>
                <li>Cerro Aconcagua</li>
                <li>Kilimanjaro</li>
                <li>McKinley (Denali)</li>
                <li>Mount Elbrus</li>
                <li>Mount Vinson</li>
                <li>Carstensz Pyramid</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Talk to Experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Lakpa Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Lakpa Sherpa</h4>
                  <p className="text-yellow-400">+977-9818288444</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Lakpa Thendu Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Lakpa Thendu Sherpa</h4>
                  <p className="text-yellow-400">+977-9869532709</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Mr. Pemba Sherpa"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mr. Pemba Sherpa</h4>
                  <p className="text-yellow-400">+977-9803739705</p>
                  <p className="text-gray-400 flex space-x-2 mt-1">
                    <span>WhatsApp</span>
                    <span>Viber</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📞
              </div>
              <p className="text-gray-400">+977-9808721040</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📧
              </div>
              <p className="text-gray-400">info@8kexpeditions.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-gray-800 p-3 rounded-full">
                📍
              </div>
              <p className="text-gray-400">Kathmandu, Nepal</p>
            </div>
          </div> */}
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
              <Phone className="w-6 h-6 text-orange-500" />
              <div>
                <div className="text-orange-500 text-sm">Phone Office</div>
                <div>+977-9808721040</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <div>
                <div className="text-orange-500 text-sm">Email Us</div>
                <div>info@8kexpeditions.com</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <div>
                <div className="text-orange-500 text-sm">Visit Us</div>
                <div>Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-2">Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for us to get contemporary travel updates.
            </p>
            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-l-lg w-1/2 bg-gray-600 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
              />
              <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-r-lg hover:bg-yellow-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container mx-auto max-w-7xl text-center space-y-4">
          <p className="text-gray-400 text-sm">
            All emails to 8K Expeditions are requested to be sent to only{" "}
            <a
              href="mailto:info@8kexpeditions.com"
              className="text-yellow-400 hover:underline"
            >
              info@8kexpeditions.com
            </a>{" "}
            to receive the valid response.
          </p>

          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved at{" "}
            <span className="font-bold text-white">8K EXPEDITIONS</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import { Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white py-12">
//       {/* Affiliations Section */}
//       <div className="container mx-auto px-4">
//         <h2 className="text-xl font-bold mb-6">Affiliations</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div
//               key={`affiliation-${i}`}
//               className="bg-white p-4 rounded-lg flex items-center justify-center"
//             >
//               <img
//                 src={`/placeholder.svg?height=60&width=120`}
//                 alt={`Affiliation ${i}`}
//                 width={120}
//                 height={60}
//                 className="h-12 object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Partners Section */}
//         <h2 className="text-xl font-bold mb-6">Partners</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div
//               key={`partner-${i}`}
//               className="bg-white p-4 rounded-lg flex items-center justify-center"
//             >
//               <img
//                 src={`/placeholder.svg?height=60&width=120`}
//                 alt={`Partner ${i}`}
//                 width={120}
//                 height={60}
//                 className="h-12 object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Brand and Payment Section */}
//           <div className="space-y-6">
//             <div className="text-3xl font-bold">
//               8K
//               <div className="text-orange-500 text-lg">8K Expeditions</div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold">We Accept</div>
//               <div className="flex gap-2">
//                 {["Visa", "Mastercard", "Amex", "Discover"].map((card) => (
//                   <div key={card} className="bg-white p-2 rounded w-12 h-8" />
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="font-semibold">Recommended By</div>
//               <div className="bg-white text-slate-900 p-2 rounded w-32">
//                 TripAdvisor
//               </div>
//             </div>
//           </div>

//           {/* Navigation Columns */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Destinations</h3>
//             <ul className="space-y-2">
//               {["Nepal", "Pakistan", "China", "India"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to="#"
//                     className="hover:text-orange-500 transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">7 Summits</h3>
//             <ul className="space-y-2">
//               {[
//                 "Mount Everest",
//                 "Cerro Aconcagua",
//                 "Kilimanjaro",
//                 "McKinley (Denali)",
//                 "Mount Elbrus",
//                 "Mount Vinson",
//                 "Carstensz Pyramid",
//               ].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to="#"
//                     className="hover:text-orange-500 transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4">Other Links</h3>
//             <ul className="space-y-2">
//               {[
//                 "Home",
//                 "Embassies & Consulate",
//                 "Company",
//                 "Contact Us",
//                 "News And Events",
//                 "Reviews",
//               ].map((item) => (
//                 <li key={item}>
//                   <Link
//                     href="#"
//                     className="hover:text-orange-500 transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <button className="text-orange-500 p-0 mt-2">SHOW MORE</button>
//           </div>
//         </div>

//         {/* Talk to Experts Section */}
//         <h2 className="text-xl font-bold mb-6">Talk to Experts</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
//           {[
//             {
//               name: "Mr. Lakpa Sherpa",
//               phone: "+977-9818288444",
//             },
//             {
//               name: "Mr. Lakpa Thendu Sherpa",
//               phone: "+977-9869532709",
//             },
//             {
//               name: "Mr. Pemba Sherpa",
//               phone: "+977-9803739705",
//             },
//           ].map((expert) => (
//             <div
//               key={expert.name}
//               className="bg-slate-800 rounded-lg p-4 flex items-center gap-4"
//             >
//               <img
//                 src="/placeholder.svg?height=80&width=80"
//                 alt={expert.name}
//                 width={80}
//                 height={80}
//                 className="rounded-full"
//               />
//               <div>
//                 <div className="font-semibold">{expert.name}</div>
//                 <div className="text-orange-500">{expert.phone}</div>
//                 <div className="flex gap-2 mt-2">
//                   <WhatsApp className="w-5 h-5" />
//                   <Phone className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Information */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
//           <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
//             <Phone className="w-6 h-6 text-orange-500" />
//             <div>
//               <div className="text-orange-500 text-sm">Phone Office</div>
//               <div>+977-9808721040</div>
//             </div>
//           </div>

//           <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
//             <Mail className="w-6 h-6 text-orange-500" />
//             <div>
//               <div className="text-orange-500 text-sm">Email Us</div>
//               <div>info@8kexpeditions.com</div>
//             </div>
//           </div>

//           <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
//             <MapPin className="w-6 h-6 text-orange-500" />
//             <div>
//               <div className="text-orange-500 text-sm">Visit Us</div>
//               <div>Kathmandu, Nepal</div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="max-w-xl mx-auto">
//           <h2 className="text-xl font-bold mb-2">Our Newsletter</h2>
//           <p className="text-slate-400 mb-4">
//             Subscribe for us to get contemporary travel updates.
//           </p>
//           <div className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="bg-white text-slate-900"
//             />
//             <button className="bg-orange-500 hover:bg-orange-600">
//               SUBSCRIBE
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
