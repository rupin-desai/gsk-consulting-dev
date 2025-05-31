import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Text content variants
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

  // Image variants
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

  // Item variants
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
              About GSK Consultants
            </motion.h2>

            {/* Decorative Yellow Line */}
            <motion.div
              className="w-20 h-1 bg-[#e6b400] mt-4 mb-6"
              variants={itemVariants}
            ></motion.div>

            <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
              At GSK Consultants, we help businesses turn ideas into impactful
              results. With our deep expertise in consulting and project
              management, we work alongside organizations to solve challenges,
              optimize operations, and lead projects to success — on time and
              within budget.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#e6b400]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">
                    Business & Management Consulting:
                  </span>{" "}
                  Expert advice to enhance decision-making and drive growth
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#e6b400]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">
                    Project Management Services:
                  </span>{" "}
                  From planning to delivery, we handle every phase with
                  precision
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#e6b400]"></div>
                </div>
                <p className="ml-4 text-gray-600">
                  <span className="font-semibold">Customized Solutions:</span>{" "}
                  We tailor our services to meet your exact needs
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button to="/about" color="yellow" variant="primary">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Images Grid */}
          <motion.div className="relative" variants={imageVariants}>
            {/* Main image */}
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="Business Meeting"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>

            {/* Two smaller images in a row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Project Planning"
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#e6b400]/10 rounded-lg -z-10"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#e6b400]/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeAbout;
