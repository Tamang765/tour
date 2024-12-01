import React from "react";
import cover from "../../assets/img/photo/himalayaexpenditure.jpeg";
import About from "../../components/PagesComponent/Home/About";
import OtherActivities from "../../components/PagesComponent/Home/Activities";
import Why8KExpeditions from "../../components/PagesComponent/Home/AllDetails";
import { ExpeditionHero } from "../../components/PagesComponent/Home/ExpeditionStats";
import ExplorePackages from "../../components/PagesComponent/Home/ExplorePackage";
import MountainList from "../../components/PagesComponent/Home/Mountains";
import UpcomingTrips from "../../components/PagesComponent/Home/UpcomingTrips";

const Homepage = ({ projectSectionRef }) => {
  return (
    <div className="bg-mapbg">
      <section className="relative" style={{ height: "calc(100vh - 5rem)" }}>
        <img src={cover} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full  bg-[#08274066] z-10"></div>
      </section>

      <About />
      {/* <ExpeditionStats /> */}
      <ExpeditionHero />
      <MountainList />
      <UpcomingTrips />
      <OtherActivities />
      <ExplorePackages />
      <Why8KExpeditions />
    </div>
  );
};

export default Homepage;
