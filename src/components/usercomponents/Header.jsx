import blackLogo from "../../assets/img/logoblue.png";
import whiteLogo from "../../assets/img/logowhite.png";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
    setNavColor(window.scrollY > 10 ? "bg-white shadow-lg" : "bg-opacity-20 bg-[#082740]");
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
    { name: "Our Team", href: "/teampage" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div>
      {isNavVisible && (
        <nav className={`fixed top-0 w-full flex justify-between items-center transition-all duration-1000 z-20 px-4 md:px-10 lg:px-[10rem] h-20 ${navColor}`}>
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
                <Link to={item.href} className={`font-bold uppercase text-sm text-nowrap ${navColor.includes("bg-white") ? "text-black" : "text-white"}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-3xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={navColor.includes("text-gray-200") ? "text-black" : "text-white "} /> : <Menu className={navColor.includes("bg-white") ? "text-black" : "text-white"} />}
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-200 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className={` text-white fixed inset-y-0 right-0 max-w-xs w-full bg-primary shadow-xl z-40 overflow-y-auto flex flex-col justify-between transition-transform duration-200 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4">
          <button className="absolute top-4 right-4 text-2xl border-2 p-1 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
            <X />
          </button>

          <div className="icons_section flex gap-4 mt-10 text-yellow-500">
            <FaFacebookF size={25} />
            <FaInstagram size={25} />
            <FaYoutube size={25} />
            <FaTwitter size={25} />
          </div>
          <ul className="space-y-10 mt-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="block font-bold uppercase text-white hover:text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <img src={blackLogo} alt="Logo" className="w-32 mx-auto mb-4" />
      </div>
    </div>
  );
};

export default Header;
