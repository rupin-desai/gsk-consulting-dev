import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Briefcase, Users, Award, Globe } from "lucide-react";

const HomeStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px",
  });

  // Animation variants using transform3d for better performance
  const statItemVariants = {
    initial: {
      opacity: 0,
      transform: "translate3d(0px, 30px, 0px)",
    },
    animate: (index) => ({
      opacity: 1,
      transform: "translate3d(0px, 0px, 0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2 + index * 0.15,
      },
    }),
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      transform: "scale3d(0.8, 0.8, 1)",
    },
    animate: (index) => ({
      opacity: 1,
      transform: "scale3d(1, 1, 1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.3 + index * 0.15,
      },
    }),
  };

  const countVariants = {
    initial: {
      opacity: 0.4,
    },
    animate: (index) => ({
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.4 + index * 0.15,
      },
    }),
  };

  const separatorVariants = {
    initial: {
      transform: "scale3d(1, 0, 1)",
      opacity: 0,
    },
    animate: {
      transform: "scale3d(1, 1, 1)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  // Define icon colors for a professional look
  const iconColors = [
    "text-indigo-600",
    "text-sky-600",
    "text-teal-600",
    "text-violet-600",
  ];

  // Stats data
  const stats = [
    {
      icon: <Briefcase size={28} />,
      value: 250,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <Users size={28} />,
      value: 120,
      suffix: "+",
      label: "Satisfied Clients",
    },
    {
      icon: <Award size={28} />,
      value: 15,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <Globe size={28} />,
      value: 20,
      suffix: "+",
      label: "Countries Served",
    },
  ];

  return (
    <section
      ref={ref}
      className="pt-16 bg-gray-50"
      style={{
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      <div
        className="container mx-auto px-4"
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Stats Row - Compact Layout but slightly bigger */}
        <div
          className="flex flex-wrap md:flex-nowrap justify-center items-center"
          style={{
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <motion.div
                className="text-center px-4 py-5 md:py-3 md:px-6 w-1/2 md:w-auto"
                variants={statItemVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                custom={index}
                style={{
                  willChange: "transform, opacity",
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Icon with circular background */}
                  <motion.div
                    className={`w-14 h-14 mb-3 md:mb-0 md:mr-4 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-full flex items-center justify-center ${iconColors[index]}`}
                    variants={iconVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    custom={index}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translate3d(0, 0, 0)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  <div className="md:text-left">
                    {/* Count number */}
                    <motion.div
                      className="text-3xl md:text-5xl font-bold text-gray-800 flex items-end justify-center md:justify-start"
                      variants={countVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      custom={index}
                      style={{
                        transform: "translate3d(0, 0, 0)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {isInView ? (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          useEasing={true}
                          delay={0.4 + index * 0.15}
                        />
                      ) : (
                        <span>0</span>
                      )}
                      <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                        {stat.suffix}
                      </span>
                    </motion.div>

                    {/* Stat label - hidden on smaller screens to save space */}
                    <h3 className="text-sm md:text-base font-medium text-gray-600 mt-1 hidden md:block">
                      {stat.label}
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Vertical separator line (except after the last item) */}
              {index < stats.length - 1 && (
                <motion.div
                  className="hidden md:block h-16 w-px bg-gradient-to-b from-indigo-200 via-sky-200 to-teal-200 mx-4"
                  variants={separatorVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  style={{
                    transformOrigin: "center",
                    willChange: "transform, opacity",
                    transform: "translate3d(0, 0, 0)",
                  }}
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
