import StatsSection, { AboutFounder } from "../../AboutStat";

const About = () => {
  return (
    <section id="about" className="py-20 bg-mapbg w-full">
      <div className="w-full px-[1rem] lg:px-[5rem] lg:w-full md:px-[3rem] sm:px-[2rem] ">
        <StatsSection />
        <br />
        <AboutFounder />
      </div>
    </section>
  );
};

export default About;
