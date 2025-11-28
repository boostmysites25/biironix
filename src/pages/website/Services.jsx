import React from "react";
// import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Banner from "../../componets/website/Banner";
import CommonProject from "../../componets/website/CommonProject";
import ServiceItems from "../../componets/common/ServiceItems";
import SEO from "../../componets/common/SEO";

const Services = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Explore our wide range of IT services including App Development, Web Development, AI Solutions, and Cloud Computing."
        keywords="IT Services, App Development Services, Web Development Services, AI Solutions, Cloud Services"
      />
      <Banner page="Services" />
      <ServiceItems />
      {/* <OurServices /> */}
      <CommonProject />
      <UnlockEfficiency />
      <Testimonials />
    </>
  );
};

export default Services;
