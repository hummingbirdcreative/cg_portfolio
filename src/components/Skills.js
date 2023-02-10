import React from "react";

const Skills = () => {
  return (
    <main className="wrapper">
      <section
        data-scroll-index="2"
        className="section experience-section !pb-0"
      >
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
            <div className="lg:col-span-6 lg:pl-9">
              <div className="section-heading">
                <h3 className="m-0">
                  <span>My Skills</span>
                </h3>
              </div>
              <div className="skill-box">
                <div className="grid gap-4 grid-cols-12">
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-1">
                      <div className="icon">
                        <i className="fab fa-html5"></i>
                      </div>
                      <h6>HTML</h6>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-2">
                      <div className="icon">
                        <i className="fab fa-css3"></i>
                      </div>
                      <h6>CSS</h6>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-3">
                      <div className="icon">
                        <i className="fab fa-react"></i>
                      </div>
                      <h6>React JS</h6>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-4">
                      <div className="icon">
                        <i className="fab fa-js"></i>
                      </div>
                      <h6>JavaScript</h6>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-5">
                      <div className="icon">
                        <i className="fab fa-node-js"></i>
                      </div>
                      <h6>Node.js</h6>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="feature-box-02 bg-6">
                      <div className="icon">
                        <i className="fab fa-aws"></i>
                      </div>
                      <h6>AWS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
              <img
                className="mx-[auto]"
                src="assets/img/skills.png"
                title=""
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
