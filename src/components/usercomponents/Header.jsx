// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import blackLogo from "../../assets/img/logoblue.png";
import whiteLogo from "../../assets/img/logowhite.png";
// import "./assets/main.css";

// const Header = ({ projectSectionRef }) => {
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [navSize, setNavSize] = useState("5rem");
//   const [navColor, setNavColor] = useState("rgba(8, 39, 64, 0.2)");
//   const [isInProjectSection, setIsInProjectSection] = useState(false);

//   const listenScrollEvent = () => {
//     if (!isInProjectSection && window.scrollY > 10) {
//       setIsNavVisible(true);
//     } else if (window.scrollY <= 10) {
//       setIsNavVisible(true);
//     }
//     setNavColor(window.scrollY > 10 ? "#ffff" : "rgba(8, 39, 64, 0.2)");
//     setNavSize(window.scrollY > 10 ? "5rem" : "5rem");
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInProjectSection(entry.isIntersecting);
//         setIsNavVisible(entry.isIntersecting || window.scrollY <= 10);
//       },
//       { threshold: 0.1 }
//     );

//     if (projectSectionRef.current) {
//       observer.observe(projectSectionRef.current);
//     }

//     return () => {
//       if (projectSectionRef.current) {
//         observer.unobserve(projectSectionRef.current);
//       }
//     };
//   }, [projectSectionRef]);

//   useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//     return () => {
//       window.removeEventListener("scroll", listenScrollEvent);
//     };
//   }, [isInProjectSection]);

//   return (
//     <div>
//       {isNavVisible && (
//         <nav
//           className={`fixed top-0  w-full flex  justify-between items-center transition-all duration-1000  z-20 px-[10rem]`}
//           style={{
//             backgroundColor: navColor,
//             height: navSize,
//           }}
//         >
//           <img
//             src={navColor === "#ffff" ? blackLogo : whiteLogo} // Switch logo based on background color
//             alt="Logo"
//             className="w-[150px] h-36" // Adjust the size as needed
//           />
//           <ul className={`flex items-center list-none p-0 m-0 gap-10`}>
//             {/* Logo */}

//             <li>
//               <Link
//                 to={"TeamPage"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 About Ngodu
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 Expeditions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"trekking"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 Trekking
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"activities"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 {" "}
//                 Other activities
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"useful-info"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 Useful Info
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"about-company"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 Company
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"contact-us"}
//                 className={`font-bold uppercase ${
//                   navColor === "#ffff" ? "text-black" : "text-white"
//                 }`}
//               >
//                 {" "}
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Header;

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ projectSectionRef }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [navColor, setNavColor] = useState("bg-opacity-20 bg-[#082740]");
  const [isInProjectSection, setIsInProjectSection] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const listenScrollEvent = () => {
    if (!isInProjectSection && window.scrollY > 10) {
      setIsNavVisible(true);
    } else if (window.scrollY <= 10) {
      setIsNavVisible(true);
    }
    setNavColor(
      window.scrollY > 10 ? "bg-white shadow-lg" : "bg-opacity-20 bg-[#082740] "
    );
  };

  useEffect(() => {
    if (projectSectionRef && projectSectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInProjectSection(entry.isIntersecting);
          setIsNavVisible(entry.isIntersecting || window.scrollY <= 10);
        },
        { threshold: 0.1 }
      );

      observer.observe(projectSectionRef.current);

      return () => {
        observer.unobserve(projectSectionRef.current);
      };
    }
  }, [projectSectionRef]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [isInProjectSection]);

  const navItems = [
    { name: "About Ngodu", href: "/about-company" },
    { name: "Expeditions", href: "/activities" },
    { name: "Trekking", href: "/trekking" },
    { name: "Other activities", href: "/activities" },
    { name: "Useful Info", href: "/useful-info" },
    { name: "Company", href: "/about-company" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div>
      {isNavVisible && (
        <nav
          className={`fixed top-0 w-full flex justify-between items-center transition-all duration-1000 z-20 px-4 md:px-10 lg:px-[10rem] h-20  ${navColor}`}
        >
          {/* <img
            src={
              navColor === "bg-white"
                ? "/img/logoblue.png"
                : "/img/logowhite.png"
            }
            alt="Logo"
            width={150}
            height={144}
            className="w-[100px] h-24 md:w-[150px] md:h-36"
          /> */}
          <Link to={"/"}>
            <img
              src={navColor !== "#ffff" ? blackLogo : whiteLogo} // Switch logo based on background color
              alt="Logo"
              className="w-[150px] h-36" // Adjust the size as needed
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center list-none p-0 m-0 gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`font-bold uppercase text-sm text-nowrap ${
                    navColor.includes("bg-white") ? "text-black" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={
                  navColor.includes("bg-white") ? "text-black" : "text-white "
                }
              />
            ) : (
              <Menu
                className={
                  navColor.includes("bg-white") ? "text-black" : "text-white"
                }
              />
            )}
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-40 overflow-y-auto flex  flex-col  justify-between">
            <div className="p-4">
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </button>
              <ul className="mt-8 space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block font-bold uppercase text-black hover:text-gray-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={blackLogo}
              // src={navColor !== "#ffff" ? blackLogo : whiteLogo} // Switch logo based on background color
              alt="Logo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
