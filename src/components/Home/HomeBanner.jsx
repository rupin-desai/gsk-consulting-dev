import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";

const HomeBanner = () => {
  // Function to scroll to the next section (HomeAbout)
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("home-about-section");
    if (nextSection) {
      const navbarHeight = 80; // Estimated navbar height
      const sectionPosition =
        nextSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Animation variants for the banner container
  const bannerVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(-50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  // Animation variants for the content container
  const contentVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for content items
  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <motion.section
      className="relative z-10 container mx-auto px-4 mt-[-80px]"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full lg:w-3/4 mx-auto overflow-hidden rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Image Column - Updated with a truck shipment image */}
        <motion.div
          className="w-full md:w-1/2 h-48 md:h-64"
          variants={imageVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
            alt="Logistics Truck Transportation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Column - Updated content */}
        <motion.div
          className="w-full md:w-1/2 bg-[#00B5CA] p-5 lg:p-8 flex flex-col justify-center"
          variants={contentVariants}
        >
          <motion.h2
            className="text-white text-xl lg:text-2xl font-bold mb-2"
            variants={itemVariants}
          >
            Redefining Logistics Education
          </motion.h2>

          <motion.p
            className="text-white text-base mb-4"
            variants={itemVariants}
          >
            IILOS combines industry expertise, global perspectives, and
            innovative technology to deliver specialized training in supply
            chain management and logistics.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              color="white"
              onClick={scrollToNextSection}
              className="text-sm"
            >
              Discover More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeBanner;
