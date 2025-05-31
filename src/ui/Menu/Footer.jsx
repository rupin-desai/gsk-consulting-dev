import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src="/logos/logo_full.png"
                alt="IILOS Logo"
                className="h-24 md:h-24 "
              />
            </Link>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Empowering education and innovation in logistics and supply chain
              management.
            </p>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00B5CA]">
              Programs that We Provide
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-[#00B5CA] transition-colors">
                <Link to="/international-education/mbe">
                  Master in Business Engineering (MBE)
                </Link>
              </li>
              <li className="text-gray-600 hover:text-[#00B5CA] transition-colors">
                <Link to="/higher-education/data-science">
                  PG Dip. in Data Science For Logistics
                </Link>
              </li>
              <li className="text-gray-600 hover:text-[#00B5CA] transition-colors">
                <Link to="/higher-education/drone-operations">
                  PG Dip. in Drones Operations- Logistics
                </Link>
              </li>
              <li className="text-gray-600 hover:text-[#00B5CA] transition-colors">
                <Link to="/higher-education/supply-chain">
                  PG Dip. in Supply Chain And Logistics Mgmt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00B5CA]">
              Contact US
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-[#00B5CA]" />
                <span className="text-gray-600 hover:text-[#00B5CA]">
                  <a href="tel:+9193226 06890">(+91) 93226 06890</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-[#00B5CA]" />
                <span className="text-gray-600 hover:text-[#00B5CA]">
                  <a href="mailto:contactus@iilos.org">contactus@iilos.org</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-[#00B5CA] flex-shrink-0 mt-1"
                />
                <span className="text-gray-600">
                  Sector 12, Kharghar, Navi Mumbai,
                  <br />
                  Maharashtra, India- 410210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            Copyright Reserved by DBS IDEaAS Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
