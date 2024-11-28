import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/usercomponents/Layout";
import Homepage from "./pages/userpages/Homepage";
import SinglePackage from "./pages/userpages/SingleTrekkingPackage";
import AboutPage from "./pages/userpages/Aboutpage";
import TrekkingPage from "./pages/userpages/Trekkingpage";
import SingleTrekkingProductPage from "./pages/userpages/SingleTrekkingProductpage";
import ActivitiesPage from "./pages/userpages/ActivitiesPage";
import CityTourPage from "./pages/userpages/CityTourPage";
import ContactUsPage from "./pages/userpages/ContactUsPage";
import UsefulInfoPage from "./pages/userpages/UsefulPage";
import TeamPage from "./pages/userpages/TeamPage";

const Myroute = () => {
  const projectSectionRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout projectSectionRef={projectSectionRef} />}
        >
          <Route
            index
            element={<Homepage projectSectionRef={projectSectionRef} />}
          />
          <Route path={`packages/:slug`} element={<SinglePackage />} />
          <Route path={`about-company`} element={<AboutPage />} />
          <Route path={`trekking`} element={<TrekkingPage />} />
          <Route
            path={`singletreakingpage`}
            element={<SingleTrekkingProductPage />}
          />
          <Route path="TeamPage" element={<TeamPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="city-tour" element={<CityTourPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="useful-info" element={<UsefulInfoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Myroute;
