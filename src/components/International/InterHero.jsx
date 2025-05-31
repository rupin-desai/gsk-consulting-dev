import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Components/Button";

const InterHero = ({ data }) => {
  // Function to scroll directly to the program-info section
  const scrollToNextSection = () => {
    const programInfoSection = document.getElementById("program-info");
    if (programInfoSection) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = 80; // Estimated height of the navbar
      const sectionPosition =
        programInfoSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative h-screen min-h-[600px] w-full bg-cover bg-center hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data.backgroundImage})`,
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>

      {/* Circle decoration */}

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 pointer-events-none">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4 }}
          >
            {data.title}
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#00B5CA]"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {data.subtitle}
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="pointer-events-auto flex justify-center gap-4"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button onClick={scrollToNextSection}>Explore Program</Button>
            <Button to="/contact" variant="outline" color="white">
              Enroll Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InterHero;
