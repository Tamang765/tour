

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div
        className="w-full h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://8kexpeditions.com/uploaded_images/page/about-us-6.JPG')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About 8K Expeditions</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-28">
        <h1 className="text-black text-4xl font-[1000]">8K Expeditions</h1>
        <p className="text-yellow-500 text-lg font-bold mt-3 mb-5">About us </p>
        <p className="text-md text-black mb-1 text-justify">8K EXPEDITIONS is a world-class and transformational expedition and adventure company with its corporate office based in Kathmandu, one of the most picturesque places in the world.</p>
        <p className="text-md text-black mb-6 text-justify">
          We are a new start-up, carefully put together by three young tourism entrepreneurs, <strong>Mr. Lakpa Sherpa, Mr. Pemba Sherpa,</strong> and <strong>Mr. Lakpa Thendu Sherpa</strong>, each with more than a decade of experience in the tourism field. We believe a group of experienced youths can bring significant reforms to the tourism industry that others can look up to. We are committed to responsible and sustainable tourism, taking a holistic grassroots approach to travel and utilizing local guides and infrastructure.
        </p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Our Mission</h2>
        <p className="text-md text-black mb-6 text-justify">Our mission is to serve our adventure-seeking clients with life-changing trips ensured with top-notch service and a high level of safety. While we are driven by the vision to become one of the best travel and tourism service providers around the world, we continuously enhance our performance. We strive to become a reliable and highly recommended adventure company by showcasing our expertise, knowledge, and experience on and off the field.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Our Operations</h2>
        <p className="text-md text-black mb-6 text-justify">8K Expeditions operates across Nepal, Pakistan, Tibet, Bhutan, India, China, Europe, 7 Summits, and more. Our activities include leisure tours, hiking, trekking, peak climbing, mountaineering expeditions, and many other adventure sports. All trips are undertaken under the supervision of professional guides and qualified ground and field teams. Our itineraries cater to adventurers of all levels, from beginners to advanced expeditions.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Purpose of 8K Expeditions</h2>
        <ul className="flex flex-col items-start pl-8 text-md text-black space-y-2 list-disc">
          <li className="text-black">To provide quality service, with safety as our primary concern.</li>
          <li className="text-black">To take travelers to the locations less traveled and give them a unique experience.</li>
          <li className="text-black">To undertake sustainable and responsible tourism.</li>
          <li className="text-black">To provide practical and easy solutions for climbers and adventure lovers around the world.</li>
          <li className="text-black">To promote local, young professional guides to realize their potential and grow their brands.</li>
        </ul>
        <div className="mt-8 ">
          <a href="tel:+(977) 986200000" className="text-white bg-primary px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 transition">
            Call Now to Book a Package
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
