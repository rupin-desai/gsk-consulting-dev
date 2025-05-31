import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";

const HomeHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
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

  const subheadingVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
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

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
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
      className="relative h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            variants={headingVariants}
          >
            International Education
          </motion.h1>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            variants={subheadingVariants}
          >
            <span className="text-[#00B5CA]">Global Career</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-8 mx-auto"
            variants={paragraphVariants}
          >
            With expert-led learning, Become the force behind Smarter supply
            chains & Logistics Management.
          </motion.p>

          <motion.div className="flex justify-center" variants={buttonVariants}>
            <Button to="/contact" color="blue" variant="primary">
              Enroll Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
