import StatsSection, { AboutFounder } from "../../AboutStat";

const About = () => {
  return (
    <section id="about" className="py-20 bg-mapbg">
      <div className="container mx-auto max-w-6xl mobile:px-4 medium:px-6">
        <StatsSection />
        <br />
        <AboutFounder />
      </div>
    </section>
  );
};

export default About;
