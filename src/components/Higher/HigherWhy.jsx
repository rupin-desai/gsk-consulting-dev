import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Briefcase,
  FileCheck,
  UserPlus,
  PlaneTakeoff,
} from "lucide-react";

const HigherWhy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const features = [
    {
      title: "Global Dual-Country Learning Experience",
      description:
        "Study in India (LSC) for theoretical foundations in the first year, then move to Germany (Steinbeis University) for hands-on project work and thesis in the second year.",
      icon: <Globe size={48} className="text-[#00B5CA]" />,
    },
    {
      title: "German Language Training & Visa Support",
      description:
        "Prepare for life in Germany with language training in India, with the option to apply for a German Language Course Visa (3–12 months, 18+ hours per week).",
      icon: <FileCheck size={48} className="text-[#00B5CA]" />,
    },
    {
      title: "Paid Internship & Post-Study Work Visa",
      description:
        "Gain practical work experience in Germany with a paid internship and secure an 18-month post-study work visa to explore global career opportunities.",
      icon: <Briefcase size={48} className="text-[#00B5CA]" />,
    },
    {
      title: "Real-World Industry Project Integration",
      description:
        "Work on a company-assigned project throughout the program, applying knowledge to solve real business and technological challenges.",
      icon: <GraduationCap size={48} className="text-[#00B5CA]" />,
    },
    {
      title: "Pathway for Fresh Graduates",
      description:
        "No prior work experience? Qualify through Mentoring Colloquia (MCQ) or Project Study Assignment (PSA) and start your international career journey.",
      icon: <UserPlus size={48} className="text-[#00B5CA]" />,
    },
    {
      title: "Comprehensive Visa & Migration Assistance",
      description:
        "LSC provides full support for credit mapping, visa processing, and student migration, ensuring a seamless transition to Germany.",
      icon: <PlaneTakeoff size={48} className="text-[#00B5CA]" />,
    },
  ];

  // Helper function to determine column by index (for 2-column layout)
  const getColumn = (index) => {
    return index % 2; // 0 = first column, 1 = second column
  };

  // Helper function to determine position within column (0 = first card in column, 1 = second card in column, etc.)
  const getPositionInColumn = (index) => {
    return Math.floor(index / 2);
  };

  // Helper function to determine if card should be aligned left or right (alternating within each column)
  const shouldAlignLeft = (index) => {
    const positionInColumn = getPositionInColumn(index);
    return positionInColumn % 2 === 0; // Even positions align left, odd positions align right
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why This Program?
          </h2>
          <div className="w-24 h-1 bg-[#00B5CA] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Master in Business Engineering program offers unique advantages
            that prepare you for a global career.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const alignLeft = shouldAlignLeft(index);

            return (
              <div key={index} className="flex justify-center">
                <motion.div
                  variants={cardVariants}
                  className={`bg-white rounded-lg shadow-lg w-full max-w-lg border-t-4 border-[#00B5CA] hover:shadow-xl transition-shadow ${
                    alignLeft
                      ? "lg:-translate-x-12 xl:-translate-x-16" // Align left
                      : "lg:translate-x-12 xl:translate-x-16" // Align right
                  }`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Icon Column */}
                    <div className="flex-shrink-0 p-5 md:p-6 bg-blue-50 sm:bg-transparent rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none flex items-center justify-center">
                      <div className="bg-blue-50 p-3 md:p-5 rounded-full">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 p-5 md:p-6 sm:pl-3 md:pl-4">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HigherWhy;
