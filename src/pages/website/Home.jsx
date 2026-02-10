import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";
import SEO from "../../componets/common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="BIIRONIX TECH offers cutting-edge IT solutions including Generative AI, App Development, Web Development, and Cloud Computing to transform your business."
        keywords="BIIRONIX TECH, AI Development, App Development, Web Development, Cloud Computing, Generative AI, IT Solutions, Software Company"
      />
      <div id="banner" className="h-screen relative overflow-hidden">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute top-0 left-0 object-cover"
        />
        <div className="bg-gradient-to-r from-black/80 via-black/50 to-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full relative z-10">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-6 text-white md:max-w-[60rem]"
          >
            <div className="rounded-text-box border-red-500/50 bg-black/30 backdrop-blur-sm font-medium text-red-400 tracking-wider uppercase text-xs w-fit px-4 py-2">
              Next-Gen IT Solutions
            </div>
            <h1 className="heading-1 font-bold leading-tight">
              Pioneering the Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Intelligent AI
              </span>{" "}
              Technologies
            </h1>
            <p className="desc !text-white/90 text-lg max-w-2xl leading-relaxed">
              At BIIRONIX TECH, we are redefining the digital landscape. We craft
              cutting-edge, AI-driven solutions that empower businesses to
              innovate, scale, and lead in a rapidly evolving world. Experience
              the synergy of creativity and technology.
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="/contact-us" className="primary-btn">
                Get Started
              </Link>
              <Link to="/services" className="secondary-btn border-white text-white hover:bg-white hover:text-black">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-white text-black wrapper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-red-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0 mb-6"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-16 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-8">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <h2 className="heading-2 text-black">
                Enhancing Operations with <br />
                <span className="text-primary">Advanced AI Technology</span>
              </h2>
              <p className="desc text-gray-600 text-lg">
                Welcome to BIIRONIX TECH — where vision meets execution. We are
                more than just a tech company; we are your strategic partners in
                innovation. From Generative AI and Machine Learning to robust
                Web and App Development, we deliver bespoke solutions that solve
                complex challenges and unlock new opportunities. Our mission is
                to help you stay ahead of the curve in today’s fast-paced
                digital ecosystem.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-transparent opacity-20 rounded-2xl"></div>
            <img
              src={aboutUsImg}
              className="rounded-2xl shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              alt="About BIIRONIX TECH"
            />
          </div>
        </div>
      </section>

      <OurServices length={3} />

      <section className="py-[5rem] bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-red-900/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-6 items-center"
        >
          <div className="gradient-rounded-text-box mb-4 border-gray-700 bg-gray-800">
            Who We Are
          </div>
          <h1 className="heading-2 max-w-[60rem] mx-auto leading-tight">
            Dependable <span className="text-primary">AI-Powered</span> IT Support <br />
            Tailored for Your Business
          </h1>
          <p className="desc !text-gray-300 max-w-[50rem] mx-auto text-lg">
            At BIIRONIX TECH, we understand that your digital presence is the
            heart of your brand. It's not just about having a website or an app;
            it's about creating an intelligent ecosystem that interacts, learns,
            and grows with your audience. Our solutions go beyond the basics,
            incorporating AI-driven optimization, personalized user experiences,
            and data-driven insights to accelerate your business growth and
            ensure you lead the market.
          </p>
        </div>
      </section>

      <CommonProject />
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
