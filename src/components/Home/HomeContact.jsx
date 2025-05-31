import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactCard from "../../ui/Components/ContactCard";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const HomeContact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const infoRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 });

  // Animation variants
  const titleVariants = {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const infoItemVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(-20px, 0, 0)",
    },
    visible: (i) => ({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: i * 0.1,
      },
    }),
  };

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "info@gskconsulting.com",
      link: "mailto:info@gskconsulting.com",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Office",
      details: "Andheri East, Mumbai, India",
      link: "https://maps.google.com",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section
      id="home-contact-section" // Added ID for scroll target
      className="py-16 bg-gray-50 relative overflow-hidden"
      ref={sectionRef}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-indigo-50 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-teal-50 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={contentRef}
          className="text-center max-w-3xl mx-auto mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Have a question or ready to explore how we can help? Reach out to
            our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact info sidebar */}
          <motion.div
            ref={infoRef}
            className="space-y-6 order-2 lg:order-1"
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={infoItemVariants}
                custom={index}
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className={`rounded-full p-3 bg-gradient-to-r ${item.color} text-white mr-4 flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      target={
                        item.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social media links */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            variants={cardVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
          >
            <ContactCard compact={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
