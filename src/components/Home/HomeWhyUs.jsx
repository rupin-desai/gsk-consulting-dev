import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TruckIcon,
  GlobeIcon,
  BriefcaseIcon,
  Users2Icon,
  Plane,
  LaptopIcon,
} from "lucide-react";

const WhyUsCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center relative overflow-hidden group h-full transition-all duration-300 hover:shadow-xl"
    >
      {/* Curtain overlay - hidden initially, slides down on hover */}
      <div className="absolute inset-0 bg-[#00B5CA]/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - stays above the curtain overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#00B5CA]/10 group-hover:bg-white/20 rounded-full text-[#00B5CA] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-12 h-1 bg-[#00B5CA] group-hover:bg-white transition-colors duration-300 mb-4"></div>

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

  // Title section variants - removed delay properties
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

  // Cards grid variants - removed delay properties
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
      icon: <TruckIcon size={32} />,
      title: "Logistics Specialization",
      description:
        "Tailored courses focused on logistics and supply chain management, equipping students with the skills and knowledge demanded by the industry.",
    },
    {
      icon: <BriefcaseIcon size={32} />,
      title: "Holistic Approach",
      description:
        "We offer comprehensive overseas education support, from university applications to skill training, preparing students for the global workforce.",
    },
    {
      icon: <GlobeIcon size={32} />,
      title: "Global Perspectives",
      description:
        "We are committed to global education, partnering with international institutions for student exchanges, collaborative research, and diverse learning experiences.",
    },
    {
      icon: <Users2Icon size={32} />,
      title: "Comprehensive Guidance",
      description:
        "Personalized counseling on academics, careers, and international universities to help students make informed, goal-aligned decisions.",
    },
    {
      icon: <Plane size={32} />,
      title: "Visa Processing Assistance",
      description:
        "We offer visa application support alongside counseling, ensuring a smooth transition for students studying abroad.",
    },
    {
      icon: <LaptopIcon size={32} />,
      title: "Technology Integration",
      description:
        "Our startup leverages advanced technology to enhance learning with virtual classrooms, and interactive modules, reflecting our commitment to innovation.",
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
            Why Choose Us
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#00B5CA] mx-auto mt-4 mb-6"
            variants={titleElementVariants}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            variants={titleElementVariants}
          >
            At IILOS, we provide unparalleled education and support in logistics
            and international education. Here's what sets us apart.
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
