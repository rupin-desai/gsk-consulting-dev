import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  GraduationCap,
  Globe,
  Award,
} from "lucide-react";

const HigherHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
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

  const subtitleVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
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

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
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

  const criteriaItems = [
    {
      icon: <Clock size={36} />,
      title: "Duration",
      value: "1 Yr (India) 1 Yr (Germany)",
    },
    {
      icon: <BookOpen size={36} />,
      title: "Program Type",
      value: "Offline",
    },
    {
      icon: <Calendar size={36} />,
      title: "Intake",
      value: "April/October",
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Eligibility Criteria",
      value: "Bachelor Degree in Any Stream",
    },
    {
      icon: <Globe size={36} />,
      title: "Language",
      value: "English/German",
    },
    {
      icon: <Award size={36} />,
      title: "Degree Title",
      value: "Masters",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Course Title */}
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Master In Business Engineering
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00B5CA]"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Logistics & Supply Chain Management
          </motion.h2>
        </div>

        {/* Criteria Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {criteriaItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-colors duration-300 h-24"
              variants={cardVariants}
            >
              <div className="flex h-full">
                {/* Icon container - now full height with centered icon */}
                <div className="bg-[#00B5CA] flex items-center justify-center px-6">
                  {item.icon}
                </div>

                {/* Content container - vertically centered */}
                <div className="flex-1 flex flex-col justify-center px-4">
                  <h3 className="text-sm font-medium opacity-80 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HigherHero;
