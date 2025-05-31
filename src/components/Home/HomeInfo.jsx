import React, { useRef } from "react";
import Button from "../../ui/Components/Button";
import { motion, useInView } from "framer-motion";

const HomeInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants - removed all delays
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const decorationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const quoteMarkVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    visible: {
      opacity: 0.1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Title animation - removed delay and when property
  const titleVariants = {
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
        staggerChildren: 0.05,
      },
    },
  };

  // Content after title - removed delay and when property
  const contentVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.05,
      },
    },
  };

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
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#00B5CA]/5 rounded-full translate-x-1/3 translate-y-1/3"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>

      <motion.div
        className="absolute top-1/2 left-3/4 w-10 h-10 bg-[#00B5CA]/10 rounded-full"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>

      {/* Diagonal lines decoration */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full h-px bg-[#00B5CA]/20 rotate-45 absolute top-5"></div>
        <div className="w-full h-px bg-[#00B5CA]/20 -rotate-45 absolute top-5"></div>
      </motion.div>

      <div className="mx-auto px-8 sm:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Decorative quote marks */}
          <motion.span
            className="text-8xl text-[#00B5CA]/10 font-serif absolute -top-10 left-0 md:left-10"
            variants={quoteMarkVariants}
          >
            "
          </motion.span>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative"
            variants={titleVariants}
          >
            <div className="flex flex-wrap justify-center gap-x-2 mb-2">
              <motion.span
                className="inline-block relative pb-3"
                variants={itemVariants}
              >
                #Redefining
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#00B5CA]"></div>
              </motion.span>
              <motion.span className="inline-block" variants={itemVariants}>
                Employability Education
              </motion.span>
            </div>
            <motion.span className="block mt-3 md:mt-2" variants={itemVariants}>
              with a Focus on Logistics
            </motion.span>
          </motion.h2>

          {/* Content */}
          <motion.p
            className="text-gray-600 mb-8 text-lg leading-relaxed"
            variants={contentVariants}
          >
            We aim to redefine overseas education by integrating
            logistics-focused industry knowledge, skill development, and a
            global perspective. Our mission is to shape future global leaders
            who will confidently navigate the complexities of the world.
            Standing at the intersection of education and industry, our startup
            is committed to unlocking boundless opportunities for aspiring
            individuals.
          </motion.p>

          <motion.div
            className="flex justify-center"
            variants={contentVariants}
          >
            <Button to="/about" color="blue" className="px-8 py-3">
              Learn More About Our Vision
            </Button>
          </motion.div>

          {/* Decorative quote marks */}
          <motion.span
            className="text-8xl text-[#00B5CA]/10 font-serif absolute -bottom-20 right-0 md:right-10"
            variants={quoteMarkVariants}
          >
            "
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeInfo;
