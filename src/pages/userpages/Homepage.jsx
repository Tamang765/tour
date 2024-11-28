import React from "react";
import cover from "../../assets/img/photo/himalayaexpenditure.jpeg";
import About from "../../components/PagesComponent/Home/About";
import ExpeditionStats from "../../components/PagesComponent/Home/ExpeditionStats";
import ExplorePackages from "../../components/PagesComponent/Home/ExplorePackage";
import MountainList from "../../components/PagesComponent/Home/Mountains";
import UpcomingTrips from "../../components/PagesComponent/Home/UpcomingTrips";
import OtherActivities from "../../components/PagesComponent/Home/Activities";
import Why8KExpeditions from "../../components/PagesComponent/Home/AllDetails";

const Homepage = ({ projectSectionRef }) => {
  return (
    <div>
      <section className="h-[900px] relative">
        <img src={cover} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full  bg-[#08274066] z-10"></div>
      </section>

      <About />
      <ExpeditionStats />
      <MountainList />
      <UpcomingTrips />
      <OtherActivities />
      <ExplorePackages />
      <Why8KExpeditions />
    </div>
  );
};

export default Homepage;
