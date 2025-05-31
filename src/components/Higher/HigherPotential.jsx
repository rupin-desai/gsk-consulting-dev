import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HigherPotential = () => {
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
    hidden: { opacity: 0, y: 30 },
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

  const cards = [
    {
      title: "Fast-Track Your Career with a Job-Integrated Master's!",
      description: [
        "Qualify through Mentoring Colloquia (MCQ) or Project Study Assignment (PSA).",
        "Gain hands-on industry exposure while earning your degree.",
        "Strengthen your technical and business acumen for global roles.",
      ],
      theme: "Recent Graduate?",
    },
    {
      title: "A Professional & Ready to Lead the Future of Supply Chain?",
      description: [
        "Gain leadership skills in business, technology, and logistics.",
        "Work on industry projects that enhance real-world problem-solving.",
        "Expand career prospects with international exposure.",
      ],
      theme: "Experienced?",
    },
    {
      title: "Employed & Aspiring to Start Your Own Business in Logistics?",
      description: [
        "Master supply chain, AI-driven logistics, and business transformation.",
        "Develop entrepreneurial skills for launching and scaling a business.",
        "Access mentorship from industry experts and global leaders.",
      ],
      theme: "Entrepreneur?",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Unlock Your Potential
          </h2>
          <div className="w-24 h-1 bg-[#00B5CA] mx-auto mb-6"></div>
        </div>

        {/* Structure with separate mobile and desktop layouts */}
        <div className="relative">
          {/* Image Container */}
          <div className="relative h-80 md:h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Professional working environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          </div>

          {/* DESKTOP: Cards Container (md and up screens) */}
          <motion.div
            className="hidden md:flex flex-row gap-6 absolute top-[70%] left-0 right-0 px-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-[#00B5CA] rounded-lg shadow-xl flex-1 transform transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                variants={cardVariants}
              >
                <div className="p-8 h-full flex flex-col relative">
                  {/* Card Theme */}
                  {/* <div className="text-[#00B5CA] font-medium mb-2 relative z-10">
                    {card.theme}
                  </div> */}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-4 relative z-10">
                    {card.title}
                  </h3>

                  {/* Description Points */}
                  <ul className="space-y-3 mt-2 text-gray-700 relative z-10">
                    {card.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00B5CA] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* MOBILE: Cards Container (below md screens) */}
          <motion.div
            className="md:hidden block -mt-16 relative z-10 space-y-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-[#00B5CA] rounded-lg shadow-xl transform transition-all hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                variants={cardVariants}
              >
                <div className="p-6 flex flex-col relative">
                  {/* Card Theme */}
                  <div className="text-[#00B5CA] font-medium mb-2 relative z-10">
                    {card.theme}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-4 relative z-10">
                    {card.title}
                  </h3>

                  {/* Description Points */}
                  <ul className="space-y-3 mt-2 text-gray-700 relative z-10">
                    {card.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00B5CA] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Spacer for desktop layout only */}
        <div className="hidden md:block h-80"></div>
      </div>
    </section>
  );
};

export default HigherPotential;
