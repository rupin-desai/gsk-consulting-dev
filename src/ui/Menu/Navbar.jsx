import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  PlaneTakeoff,
  Globe,
  Rocket,
  Search,
  Package2,
  GraduationCap,
  CircleDot,
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Button from "../Components/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const bannerControls = useAnimation();
  const currentYear = new Date().getFullYear();

  // Timeout ref for delayed dropdown closing
  const closeTimeoutRef = useRef(null);

  // States for scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to show dropdown - clear any pending timeout
  const showDropdown = (dropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  // Function to hide dropdown with delay
  const hideDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  // Check if a path is active
  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Handle navigation changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setVisible(true);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Banner scrolling animation
  useEffect(() => {
    bannerControls.start({
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [bannerControls]);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-[#00B5CA] text-white overflow-hidden py-1">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-8 mx-4 text-sm font-medium"
            animate={bannerControls}
          >
            <div className="flex items-center gap-1.5">
              <PlaneTakeoff size={14} className="stroke-[2.5]" />
              <span>International Education Opportunities</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="stroke-[2.5]" />
              <span>Build a Global Career in Logistics</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Rocket size={14} className="stroke-[2.5]" />
              <span>Master in Business Engineering (MBE)</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Search size={14} className="stroke-[2.5]" />
              <span>Data Science for Logistics</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <PlaneTakeoff size={14} className="stroke-[2.5]" />
              <span>Drone Operations Program</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Package2 size={14} className="stroke-[2.5]" />
              <span>Supply Chain Management</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <GraduationCap size={14} className="stroke-[2.5]" />
              <span>
                Enroll Now for {currentYear}/{currentYear + 1} Intake
              </span>
            </div>

            {/* Second set for continuous scrolling */}
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <PlaneTakeoff size={14} className="stroke-[2.5]" />
              <span>International Education Opportunities</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="stroke-[2.5]" />
              <span>Build a Global Career in Logistics</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Rocket size={14} className="stroke-[2.5]" />
              <span>Master in Business Engineering (MBE)</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Search size={14} className="stroke-[2.5]" />
              <span>Data Science for Logistics</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <PlaneTakeoff size={14} className="stroke-[2.5]" />
              <span>Drone Operations Program</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Package2 size={14} className="stroke-[2.5]" />
              <span>Supply Chain Management</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <GraduationCap size={14} className="stroke-[2.5]" />
              <span>
                Enroll Now for {currentYear}/{currentYear + 1} Intake
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <header
        className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo - Updated to use image */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/logo_full.png"
              alt="IILOS Logo"
              className="h-18 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-[#00B5CA] relative nav-link nav-link-active"
                  : "font-medium text-gray-700 hover:text-[#00B5CA] relative nav-link transition-colors"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-[#00B5CA] relative nav-link nav-link-active"
                  : "font-medium text-gray-700 hover:text-[#00B5CA] relative nav-link transition-colors"
              }
            >
              About
            </NavLink>

            {/* Higher Education Dropdown - Contains PG diploma programs */}
            <div className="relative">
              {/* Button trigger only - reduced hitbox */}
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => showDropdown("higher")}
                onMouseLeave={hideDropdown}
              >
                <NavLink
                  to="/higher-education/data-science"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-[#00B5CA] relative nav-link nav-link-active"
                      : "font-medium text-gray-700 hover:text-[#00B5CA] relative nav-link transition-colors"
                  }
                >
                  Higher Education
                </NavLink>
                <ChevronDown
                  size={16}
                  className={`transition-colors ${
                    isPathActive("/higher-education")
                      ? "text-[#00B5CA]"
                      : "text-gray-600 hover:text-[#00B5CA]"
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={() => showDropdown("higher")}
                onMouseLeave={hideDropdown}
              >
                <div
                  className={`bg-white shadow-lg rounded-md py-2 w-72 transform transition-all duration-200 ${
                    activeDropdown === "higher"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/higher-education/supply-chain"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00B5CA]"
                  >
                    PG Dip. in Supply Chain And Logistics Mgmt
                  </Link>
                  <Link
                    to="/higher-education/drone-operations"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00B5CA]"
                  >
                    PG Dip. in Drones Operations- Logistics
                  </Link>
                  <Link
                    to="/higher-education/data-science"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00B5CA]"
                  >
                    PG Dip. in Data Science For Logistics
                  </Link>
                </div>
              </div>
            </div>

            {/* International Education Dropdown - Now contains MBE */}
            <div className="relative">
              {/* Button trigger only - reduced hitbox */}
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => showDropdown("international")}
                onMouseLeave={hideDropdown}
              >
                <NavLink
                  to="/international-education"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-[#00B5CA] relative nav-link nav-link-active"
                      : "font-medium text-gray-700 hover:text-[#00B5CA] relative nav-link transition-colors"
                  }
                >
                  International Education
                </NavLink>
                <ChevronDown
                  size={16}
                  className={`transition-colors ${
                    isPathActive("/international-education")
                      ? "text-[#00B5CA]"
                      : "text-gray-600 hover:text-[#00B5CA]"
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={() => showDropdown("international")}
                onMouseLeave={hideDropdown}
              >
                <div
                  className={`bg-white shadow-lg rounded-md py-2 w-64 transform transition-all duration-200 ${
                    activeDropdown === "international"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/international-education/mbe"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00B5CA]"
                  >
                    Master in Business Engineering (MBE)
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-[#00B5CA] relative nav-link nav-link-active"
                  : "font-medium text-gray-700 hover:text-[#00B5CA] relative nav-link transition-colors"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button to="/contact">ENROLL NOW</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 hover:text-[#00B5CA]"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* CSS for the underline animation */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding-bottom: 2px;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #00b5ca;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-out;
        }

        .nav-link:hover::after,
        .nav-link-active::after {
          transform: scaleX(1);
        }

        .nav-link-active::after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
