import React, { useRef } from "react";
import Button from "../../ui/Components/Button";
import { motion, useInView } from "framer-motion";
import { Target, Users, Award, Briefcase, ChevronRight } from "lucide-react";

const HomeAbout = () => {
  // Create refs for each section we want to animate when in view
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const imageRef = useRef(null);

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.4 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.4 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  // Simplified animation variants with transform3d
  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(20px, 0, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  // Core values data
  const values = [
    {
      title: "Excellence",
      description: "We pursue excellence in everything we do",
      icon: <Target size={20} />,
      color: "from-indigo-600 to-sky-600",
    },
    {
      title: "Collaboration",
      description: "We work alongside our clients as true partners",
      icon: <Users size={20} />,
      color: "from-sky-600 to-teal-600",
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards",
      icon: <Award size={20} />,
      color: "from-teal-600 to-indigo-600",
    },
    {
      title: "Innovation",
      description: "We embrace creative solutions to complex problems",
      icon: <Briefcase size={20} />,
      color: "from-indigo-600 to-teal-600",
    },
  ];

  return (
    <section
      id="home-about-section"
      className="py-16 md:px-24 relative overflow-hidden bg-gray-50"
      ref={sectionRef}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-teal-50 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About GSK Consultants
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mb-6"></div>
          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - company info */}
          <div className="space-y-8">
            {/* Company overview */}
            <motion.div
              ref={storyRef}
              variants={itemVariants}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
              className="space-y-3"
              style={{ willChange: "transform, opacity" }}
            >
              
              <p className="text-gray-600">
                GSK Consultants is a premier management consulting firm helping
                businesses navigate complex challenges and seize opportunities.
                Our diverse team of industry veterans brings decades of
                experience to every project, guiding organizations across
                sectors to achieve sustainable growth.
              </p>
              <p className="text-gray-600">
                Founded in 2013 in Mumbai, we've grown to a team of over 50
                consultants serving clients across India and internationally.
                Our approach combines deep industry knowledge with innovative
                solutions to deliver measurable results.
              </p>
            </motion.div>

            {/* Core values - simplified grid */}
            <motion.div
              ref={valuesRef}
              variants={itemVariants}
              initial="hidden"
              animate={isValuesInView ? "visible" : "hidden"}
              className="space-y-3"
              style={{ willChange: "transform, opacity" }}
            >
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}
                      >
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  to="/about"
                  color="gradient"
                  variant="primary"
                  className="flex items-center"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right column - image replacement */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="relative"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Business team collaborating"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-indigo-200 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg -z-10"></div>

            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm italic">
                "Our mission is to empower businesses with the strategic
                insights and operational excellence they need to thrive in
                today's competitive landscape."
              </p>
              <p className="text-right text-indigo-600 font-medium text-sm mt-2">
                — Founder & CEO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
