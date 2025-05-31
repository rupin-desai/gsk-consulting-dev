import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Container variants - removed delayChildren
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Text content variants - removed when property that could cause delays
  const textContentVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(-50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.08,
      },
    },
  };

  // Image variants - no changes needed here
  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Item variants - no changes needed here
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
    // Added ID here for scrolling target
    <section
      id="home-about-section"
      className="py-16 lg:py-24 px-12 md:px-24"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={textContentVariants}>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-800"
              variants={itemVariants}
            >
              About IILOS
            </motion.h2>

            {/* Decorative Blue Line */}
            <motion.div
              className="w-20 h-1 bg-[#00B5CA] mt-4 mb-6"
              variants={itemVariants}
            ></motion.div>

            <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
              The International Institute of Logistics and Occupational Services
              (IILOS) is a pioneer in logistics and supply chain management
              education. We partner with industry leaders to deliver
              cutting-edge programs that prepare students for the challenges of
              tomorrow's global logistics landscape.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#00B5CA]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">
                    Industry-Focused Curriculum:
                  </span>{" "}
                  Developed with input from leading logistics companies
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#00B5CA]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">Expert Faculty:</span> Learn
                  from professionals with decades of practical experience
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#00B5CA]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">Global Opportunities:</span>{" "}
                  International partnerships with leading universities and
                  corporations
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button to="/about" color="blue" variant="primary">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Images Grid */}
          <motion.div className="relative" variants={imageVariants}>
            {/* Main image */}
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="Logistics Drone Technology"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>

            {/* Two smaller images in a row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Students in classroom */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Students Learning"
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>

              {/* Logistics training/warehouse */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Logistics Training"
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#00B5CA]/10 rounded-lg -z-10"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#00B5CA]/10 rounded-lg -z-10"></div>


          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeAbout;
