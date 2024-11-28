import React, { useState, useEffect } from "react";
import "./assets/main.css";
import blackLogo from "../../assets/img/logoblue.png";
import whiteLogo from "../../assets/img/logowhite.png";
import { Link } from "react-router-dom";

const Header = ({ projectSectionRef }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [navSize, setNavSize] = useState("5rem");
  const [navColor, setNavColor] = useState("rgba(8, 39, 64, 0.2)");
  const [isInProjectSection, setIsInProjectSection] = useState(false);

  const listenScrollEvent = () => {
    if (!isInProjectSection && window.scrollY > 10) {
      setIsNavVisible(true);
    } else if (window.scrollY <= 10) {
      setIsNavVisible(true);
    }
    setNavColor(window.scrollY > 10 ? "#ffff" : "rgba(8, 39, 64, 0.2)");
    setNavSize(window.scrollY > 10 ? "5rem" : "5rem");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInProjectSection(entry.isIntersecting);
        setIsNavVisible(entry.isIntersecting || window.scrollY <= 10);
      },
      { threshold: 0.1 }
    );

    if (projectSectionRef.current) {
      observer.observe(projectSectionRef.current);
    }

    return () => {
      if (projectSectionRef.current) {
        observer.unobserve(projectSectionRef.current);
      }
    };
  }, [projectSectionRef]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [isInProjectSection]);

  return (
    <div>
      {isNavVisible && (
        <nav
          className={`fixed top-0 w-full flex justify-between items-center transition-all duration-1000 pl-10 pr-3 z-20`}
          style={{
            backgroundColor: navColor,
            height: navSize,
          }}
        >
          <img
            src={navColor === "#ffff" ? blackLogo : whiteLogo} // Switch logo based on background color
            alt="Logo"
            className="w-[150px] h-36" // Adjust the size as needed
          />
          <ul className={`flex items-center list-none p-0 m-0 `}>
            {/* Logo */}

            <li>
              <Link
                to={"TeamPage"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                About Ngodu
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                Expeditions
              </Link>
            </li>
            <li>
              <Link
                to={"trekking"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                Trekking
              </Link>
            </li>
            <li>
              <Link
                to={"activities"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                {" "}
                Other activities
              </Link>
            </li>
            <li>
              <Link
                to={"useful-info"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                Useful Info
              </Link>
            </li>
            <li>
              <Link
                to={"about-company"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to={"contact-us"}
                className={`font-bold uppercase ${
                  navColor === "#ffff" ? "text-black" : "text-white"
                }`}
              >
                {" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
