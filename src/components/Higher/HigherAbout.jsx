import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HigherAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    visible: {
      opacity: 1,
      transform: "translateX(0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, transform: "translateX(20px)" },
    visible: {
      opacity: 1,
      transform: "translateX(0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, transform: "translateY(10px)" },
    visible: {
      opacity: 0.2, // Slightly increased opacity for theme color
      transform: "translateY(0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-12">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Text - Added text-center for mobile */}
          <motion.div
            className="space-y-0 text-center lg:text-left"
            variants={textVariants}
          >
            {/* Group title and underline with reduced spacing - centered on mobile */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                About The Program
              </h2>
              {/* Centered underline on mobile */}
              <div className="w-20 h-1 bg-[#00B5CA] mt-2 mx-auto lg:mx-0"></div>
            </div>

            {/* First paragraph with number - Changed number color and centered on mobile */}
            <div className="relative">
              {/* <motion.span
                className="absolute -left-3 lg:-left-3 -top-10 text-8xl font-bold text-[#00B5CA]"
                variants={numberVariants}
              >
                1
              </motion.span> */}
              <p className="relative pl-2 lg:pl-2 px-4 md:px-6 lg:px-0 text-gray-600 leading-relaxed">
                Master of Business Engineering (MBE) – A Global Career
                Accelerator. The Master of Business Engineering (MBE) is a
                practical, industry-focused program that integrates business,
                technology, and logistics. Developed in collaboration with
                Steinbeis University, Germany, and LSC, it follows a
                dual-country model—students gain academic foundations in India
                before transitioning to hands-on project work and a Master's
                thesis in Germany. This structure provides global exposure,
                industry collaboration, and career-enhancing expertise for
                professionals and graduates.
              </p>
            </div>

            {/* Increased spacing between paragraphs - Changed number color and centered on mobile */}
            <div className="relative mt-10">
              {/* <motion.span
                className="absolute -left-3 lg:-left-3 -top-10 text-8xl font-bold text-[#00B5CA]"
                variants={numberVariants}
              >
                2
              </motion.span> */}
              <p className="relative pl-2 lg:pl-2 px-4 md:px-6 lg:px-0 text-gray-600 leading-relaxed">
                Built on the Project-Competence Model, the program connects
                learning with real-world industry challenges. Students engage in
                company-assigned projects, combining structured coursework,
                independent study, and digital learning to develop skills that
                meet international business and technology demands.
              </p>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div className="relative h-full" variants={imageVariants}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Master of Business Engineering students"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-lg border-4 border-[#00B5CA]/20 -z-10"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HigherAbout;