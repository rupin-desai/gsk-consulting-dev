import React from "react";
import ContactCard from "../ui/Components/ContactCard";

const ContactPage = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Page container */}
      <div className="container mx-auto">
        {/* Page title */}
        

        {/* Contact card */}
        <ContactCard />

        {/* Map section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Our Location
          </h2>

          {/* Map container with responsive sizing */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.963870875241!2d73.067763!3d19.042537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2164dbbc321%3A0xb60a32a655d291de!2sSector%2012%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210%2C%20India!5e0!3m2!1sen!2sus!4v1746272248936!5m2!1sen!2sus"
                className="w-full h-[450px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IILOS Location Map"
              ></iframe>
            </div>
          </div>

          {/* Address information below map */}
          <div className="mt-8 text-center">
            
            <p className="text-gray-600">
              Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
