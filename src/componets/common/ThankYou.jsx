import React from "react";
import { Link } from "react-router-dom";
import {  logoImg, } from "../../constant";
import WebsiteFooter from "../website/WebsiteFooter";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-primary/5">
      <div className="py-4 top-0 w-full bg-black/10 backdrop-blur-md z-50 text-black">
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
            <Link to="/" className="cursor-pointer relative">
              <img src={logoImg} className="h-[4rem] md:h-[5rem] " alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper h-full flex flex-col items-center py-[8rem] gap-3 text-[#2e2e45] text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc !font-semibold">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4 text-black">
          Home
        </Link>
      </div>
      <WebsiteFooter/>
    </div>
  );
};

export default Thankyou;
