import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HigherModules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0); // Start with first item open

  const faqItems = [
    {
      title: "Key Modules Covered",
      content: [
        "Strategic Corporate Management",
        "Digital Business Models & Digital Supply Chain Management",
        "Robotics, AI, Cyber-Physical Systems & Industry 4.0",
        "Innovation & Change Management",
        "Technology Foresight & Virtual/Augmented Reality",
        "Intercultural Competence & International Management",
      ],
    },
    {
      title: "Eligibility Criteria",
      content: [
        "Bachelor's Degree (10+2+4) with 180 credits.",
        "GPA of at least 75% (or 2.7 on the German grading scale).",
        "12 months of work experience required (or qualify through MCQ/PSA evaluation).",
      ],
    },
    {
      title: "Fee Structure",
      content: ["Year 1 (India): ₹500,000", "Year 2 (Germany): €9,500"],
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 sm:-mt-42" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Program Details
          </h2>
          <div className="w-24 h-1 bg-[#00B5CA] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the Master in Business Engineering
            program.
          </p>
        </div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div key={index} className="mb-4" variants={itemVariants}>
              <div
                className={`flex justify-between items-center p-5 rounded-lg cursor-pointer transition-all ${
                  activeIndex === index
                    ? "bg-[#00B5CA] text-white"
                    : "bg-gray-100 hover:bg-gray-100"
                }`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="w-8 h-8 rounded-full bg-opacity-20 mr-3 flex items-center justify-center text-sm font-bold border-2 border-current">
                    {index + 1}
                  </span>
                  {item.title}
                </h3>
                <ChevronDown
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, translateY: -10 }}
                    animate={{ height: "auto", opacity: 1, translateY: 0 }}
                    exit={{ height: 0, opacity: 0, translateY: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white p-5 rounded-b-lg border-t-0 shadow-md">
                      <ul className="space-y-3">
                        {item.content.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#00B5CA] mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HigherModules;
