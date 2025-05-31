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

const WhyUsCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center relative overflow-hidden group h-full transition-all duration-300 hover:shadow-xl"
    >
      {/* Curtain overlay - hidden initially, slides down on hover */}
      <div className="absolute inset-0 bg-[#e6b400]/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - stays above the curtain overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e6b400]/10 group-hover:bg-white/20 rounded-full text-[#e6b400] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-12 h-1 bg-[#e6b400] group-hover:bg-white transition-colors duration-300 mb-4"></div>

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

  const features = [
    {
      icon: <TrophyIcon size={32} />,
      title: "Experienced Professionals",
      description:
        "Our team brings decades of industry experience across various sectors, delivering expertise you can rely on for your most critical business challenges.",
    },
    {
      icon: <UsersIcon size={32} />,
      title: "Client-Focused Approach",
      description:
        "We listen first, then collaborate closely with you to develop solutions that align perfectly with your business goals and organizational culture.",
    },
    {
      icon: <ScaleIcon size={32} />,
      title: "Scalable Solutions",
      description:
        "Our services and solutions scale with your business, ensuring sustainable growth and adaptability to changing market conditions.",
    },
    {
      icon: <BarChartIcon size={32} />,
      title: "Proven Track Record",
      description:
        "We've successfully delivered hundreds of projects across industries, consistently exceeding client expectations with measurable results.",
    },
    {
      icon: <PieChartIcon size={32} />,
      title: "Data-Driven Strategy",
      description:
        "Our recommendations are backed by comprehensive analysis and industry insights, ensuring decisions are based on solid evidence rather than assumptions.",
    },
    {
      icon: <BriefcaseIcon size={32} />,
      title: "End-to-End Solutions",
      description:
        "From initial strategy to final implementation, we provide complete project oversight and management, ensuring seamless execution at every stage.",
    },
  ];

  return (
    <section className="py-16 px-12 sm:px-24" ref={ref}>
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
            className="w-20 h-1 bg-[#e6b400] mx-auto mt-4 mb-6"
            variants={titleElementVariants}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            variants={titleElementVariants}
          >
            At GSK Consultants, we provide unparalleled consulting and project
            management services. Here's what sets us apart.
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
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeWhyUs;
