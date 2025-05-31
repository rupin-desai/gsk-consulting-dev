import React, { useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

const HomeColabs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.6 });

  // Animation variants
  const headingVariants = {
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

  // Use only one logo URL as requested
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Generic_Logo.svg/240px-Generic_Logo.svg.png";

  // Create array of logos (all the same image)
  const logos = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: logoUrl,
    alt: `Partner Logo ${i + 1}`,
  }));

  // Triple the logos array for seamless looping
  const tripleLogos = [...logos, ...logos, ...logos];

  // Calculate animation duration based on speed formula
  const speed = 10; // Default speed (higher = faster)
  const duration = 300 / speed;

  // Marquee animation variants with optimized transform3d
  const marqueeVariants = {
    animate: {
      transform: "translate3d(-33.33%, 0, 0)",
      transition: {
        transform: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      className="py-16 bg-gray-50"
      ref={sectionRef}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Marquee container with overflow hidden */}
        <div className="relative overflow-hidden w-full">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-gray-50 to-gray-50/0 z-10 pointer-events-none"></div>

          {/* Main marquee container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
              style={{
                width: "300%", // Triple width for the tripled logo array
                transform: "translate3d(0, 0, 0)", // Initial position
                willChange: "transform",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {tripleLogos.map((logo, index) => (
                <LogoItem key={`logo-${index}`} logo={logo} />
              ))}
            </motion.div>
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-gray-50 to-gray-50/0 z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

// Individual logo item with hover effects
const LogoItem = ({ logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Spring animation for hover effect
  const springConfig = {
    stiffness: 300,
    damping: 20,
  };

  const scale = useSpring(1, springConfig);

  // Handle hover state
  const onHoverStart = () => {
    setIsHovered(true);
    scale.set(1.05);
  };

  const onHoverEnd = () => {
    setIsHovered(false);
    scale.set(1);
  };

  return (
    <motion.div
      className={`flex-shrink-0 flex items-center justify-center mx-8 md:mx-12 h-12 md:h-16 bg-white ${
        isHovered ? "" : "grayscale opacity-70"
      } transition-all rounded-lg p-3`}
      style={{
        minWidth: "80px",
        scale,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ y: -3 }}
    >
      <img
        src={logo.image}
        alt={logo.alt}
        className="h-full w-auto object-contain"
        loading="eager"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/120x60?text=Logo";
        }}
      />
    </motion.div>
  );
};

export default HomeColabs;
