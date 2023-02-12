import React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
          <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0">
            <img
              className="mx-auto border-black border-8 border-solid"
              src="assets/img/zigzags.jpg"
              title="zigzags"
              alt="zigzags"
            />
          </div>
          <div className="lg:col-span-6 lg:pl-12">
            <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">
              I'm a Freelancer Front-end Developer with an interest in
              accessibility.
            </h3>
            <p className="text-[16px] md:text-[18px]">
              I am a full-stack web developer who enjoys creating precise code
              to solve problems creatively. With a background in design and
              customer service, I am passionate about visual aesthetics and good
              design that works uniquely for each client’s needs. I am a problem
              solver who has cultivated the ability to adapt quickly and find
              concise solutions.
            </p>
            {/* <div className="grid grid-cols-12 pt-5">
              <div className="col-span-6 sm:col-span-4">
                <h5 className="text-[26px] text-orange-600 font-[600]">285+</h5>
                <span>Projet Completed</span>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <h5 className="text-[26px] text-orange-600 font-[600]">190+</h5>
                <span>Happy Clients</span>
              </div>
            </div> */}
            <div className="pt-6">
              <a
                className="px-btn px-btn-theme mr-4"
                data-scroll-nav="4"
                href="#contactus"
              >
                Contact Me
              </a>
              <a
                className="px-btn px-btn-dark"
                data-scroll-nav="3"
                href="#work"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
