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
        backgroundImage: `url('https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Welcome to GSK Consultants
          </motion.h1>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            variants={subheadingVariants}
          >
            <span className="text-[#e6b400]">Your Trusted Partner</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-8 mx-auto"
            variants={paragraphVariants}
          >
            Expert consulting and project management to turn your ideas into
            impactful results.
          </motion.p>

          <motion.div className="flex justify-center" variants={buttonVariants}>
            <Button to="/contact" color="yellow" variant="primary">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
