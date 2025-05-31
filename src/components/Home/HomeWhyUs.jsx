import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrophyIcon,
  UsersIcon,
  ScaleIcon,
  BarChartIcon,
  PieChartIcon,
  BriefcaseIcon,
} from "lucide-react";

const WhyUsCard = ({ icon, title, description, variants, iconColor }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center relative overflow-hidden group h-full transition-all duration-300 hover:shadow-xl"
    >
      {/* Curtain overlay - hidden initially, slides down on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-sky-600/90 to-teal-600/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - stays above the curtain overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <div
          className={`w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-r from-${iconColor}-100 to-sky-100 group-hover:bg-white/20 rounded-full text-${iconColor}-600 transition-colors duration-300`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 group-hover:bg-white transition-colors duration-300 mb-4"></div>

        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HomeWhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Main container variants - just handles opacity
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Title section variants
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Individual title element variants
  const titleElementVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Cards grid variants
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Individual card variants
  const cardVariants = {
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
      },
    },
  };

  // Features with reduced text content and added icon colors
  const features = [
    {
      icon: <TrophyIcon size={32} />,
      title: "Experienced Professionals",
      description:
        "Industry experts with decades of experience across diverse sectors.",
      iconColor: "indigo",
    },
    {
      icon: <UsersIcon size={32} />,
      title: "Client-Focused Approach",
      description:
        "Solutions tailored to your specific business goals and culture.",
      iconColor: "teal",
    },
    {
      icon: <ScaleIcon size={32} />,
      title: "Scalable Solutions",
      description:
        "Services that grow with your business and adapt to market changes.",
      iconColor: "sky",
    },
    {
      icon: <BarChartIcon size={32} />,
      title: "Proven Track Record",
      description:
        "Hundreds of successful projects with measurable client results.",
      iconColor: "indigo",
    },
    {
      icon: <PieChartIcon size={32} />,
      title: "Data-Driven Strategy",
      description:
        "Recommendations backed by thorough analysis and industry insights.",
      iconColor: "teal",
    },
    {
      icon: <BriefcaseIcon size={32} />,
      title: "End-to-End Solutions",
      description:
        "Complete project oversight from strategy to implementation.",
      iconColor: "sky",
    },
  ];

  return (
    <section className="py-16 px-12 sm:px-24 bg-gray-50" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          variants={titleContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-800"
            variants={titleElementVariants}
          >
            Why Choose GSK Consultants
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mt-4 mb-6"
            variants={titleElementVariants}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            variants={titleElementVariants}
          >
            What sets our consulting and project management services apart.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <WhyUsCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={cardVariants}
              iconColor={feature.iconColor}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeWhyUs;
