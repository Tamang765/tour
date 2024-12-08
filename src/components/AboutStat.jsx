import { Flag, Group, Handshake, Stars } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Stars,
      number: "12+",
      label: "Years of Expertise",
    },
    {
      icon: Flag,
      number: "1500+",
      label: "Successful Summits",
    },
    {
      icon: Handshake,
      number: "40+",
      label: "Partners",
    },
    {
      icon: Group,
      number: "15000+",
      label: "Client Served",
    },
  ];

  return (
    <div className="w-full mobile:px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mobile:grid-cols-1 mobile:gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col w-fit items-center justify-center group cursor-pointer"
          >
            <div className="relative p-4 border-2 rounded-full bg-white  mb-4 group-hover:border-blue-500  ">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 group transition-colors duration-500 hover:bg-blue-200 ">
                <stat.icon className="w-8 h-8 text-gray-800 group-hover:text-orange-500" />
              </div>
            </div>
            <h3 className="text-4xl mobile:text-xl font-bold mb-2">{stat.number}</h3>
            <p className="text-gray-600 text-center mobile:text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const AboutFounder = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center mt-16">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 group">
        <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
          <img
            // src="../../../assets/img/photo/cover.jpeg"
            src="https://8kexpeditions.com/uploaded_images/feature/8k-expeditions-the-responsible-climbers-114057.jpeg"
            alt="Ngodu Sherpa"
            className="w-full h-96  object-cover transition-transform duration-300 group-hover:scale-105 mobile:h-72"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left ">
        <h2 className="text-5xl font-extrabold text-gray-800">
          Ngodu <span className="text-blue-500">Sherpa</span>
        </h2>

        <p className="text-lg font-bold  py-3">THE RESPONSIBLE CLIMBERS</p>
        <p className="text-gray-700 mt-4 mb-6 mobile:text-start ">
          Ngodu Sherpa is a world-class and transformational expedition and
          adventure company with its corporate office based in Kathmandu, one of
          the most picturesque places in the world. We are a new start-up,
          carefully put together by three young tourism entrepreneurs
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-600 transition mobile:items-start mobile:flex">
          ABOUT COMPANY
        </button>
      </div>
    </div>
  );
};

export { AboutFounder };
