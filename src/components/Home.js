import React from "react";
import Brands from "./Brands";
import About from "./About";
import Post from "./Post";
import Skills from "./Skills";
import Interest from "./Interest";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import NavBar from "./NavBar";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="wrapper">
        <section
          data-scroll-index="0"
          className="home-section pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden"
        >
          <div className="container relative z-[1]">
            <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
              <div className="lg:col-span-6">
                <div className="text-center lg:text-start mb-[50px] lg:mb-0">
                  <h6 className="text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]">
                    👋, My name is Christine Graybosch
                  </h6>
                  <h1 className="text-black font-[600] text-[40px] md:text-[70px] leading-[1] mb-[25px] md:mb-[35px]">
                    I'm a <TypeIt>Developer</TypeIt>
                  </h1>
                  <p className="text-[16px] md:text-[20px] mb-[8px] md:mb-[16px]">
                    Based in Los Angeles, California.
                  </p>
                  <div className="pt-[10px]">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      Let's Start
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="home-image text-center">
                  <img
                    className="border-black border-8 border-solid"
                    src="assets/img/pexels-vlada-karpovich-4050312.jpg"
                    title="typing"
                    alt="typing"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Brands />
      <About />
      <Post />
      <Skills />
      <Interest />
      <Project />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
