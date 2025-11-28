import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-14 bg-gray-900 border-t border-gray-800">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-start max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} className="h-[6rem] object-contain" alt="BIIRONIX TECH" />
            </div>
            <p className="desc text-sm !text-gray-300 leading-relaxed">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation and enhanced operational efficiency.
              Empowering businesses with AI-driven solutions.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold text-lg text-primary">Quick Links</h6>
              <div className="flex flex-col gap-2">
                {routes.map(({ name, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold text-lg text-primary">Contact Us</h6>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</h6>
                  <Link
                    to={`tel:${companyDetails.phone}`}
                    className="text-gray-300 text-sm hover:text-primary transition-colors"
                  >
                    {companyDetails.phone}
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</h6>
                  <Link
                    to={`mailto:${companyDetails.email}`}
                    className="text-gray-300 text-sm hover:text-primary transition-colors"
                  >
                    {companyDetails.email}
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Address</h6>
                  <p className="text-gray-300 text-sm max-w-[15rem]">
                    {companyDetails.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 border-t border-gray-800 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
            <p className="!text-gray-300 text-sm">
              © {new Date().getFullYear()} BIIRONIX TECH. All rights reserved.
            </p>
            <div className="flex gap-5 items-center">
              <Link className="group">
                <BsFacebook className="text-xl text-gray-400 group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group">
                <BsTwitter className="text-xl text-gray-400 group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group">
                <BsLinkedin className="text-xl text-gray-400 group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link className="group">
                <BsYoutube className="text-xl text-gray-400 group-hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFooter;
