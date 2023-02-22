import React from "react";

const Testimonial = () => {
  return (
    <main className="wrapper">
      <section className="section testimonial-section">
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Testimonial</span>
              </h3>
            </div>
          </div>
          <div className="owl-carousel lightbox-gallery testimonial_slider">
            <div className="feature-box-03">
              <div className="feature-img">
                <a
                  href="https://www.linkedin.com/in/daniel-j-scott/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/avatar-daniel.jpg"
                    title="Daniel Scott"
                    alt="Daniel Scott"
                  />
                </a>
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Christine is known amongst myself and her peers for her caring
                  nature and creative approach to problem-solving. She is
                  dedicated to her work and puts a lot of thought into every
                  solution she produces, ensuring that it is completed to the
                  highest standard. She is a valuable asset to any team.
                </p>
                <h6>Daniel Scott</h6>
                <span>Founder at DanielJS Digital Media Solutions</span>
              </div>
            </div>
            <div className="feature-box-03">
              <div className="feature-img">
                <a
                  href="https://www.linkedin.com/in/andrea-williams433/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/avatar-andrea.jpg"
                    title="Andrea Williams"
                    alt="Andrea Williams"
                  />
                </a>
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Christine has a natural talent for coding that is shown
                  through her clean code and ability to ask insightful
                  questions. Her projects were always solid and really well
                  thought out.
                </p>
                <h6>Andrea Williams</h6>
                <span>Software Engineer at Musicbuk</span>
              </div>
            </div>
            <div className="feature-box-03">
              <div className="feature-img">
                <a
                  href="https://www.linkedin.com/in/mike-bocon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/avatar-mike.jpg"
                    title="Mike Bocon"
                    alt="Mike Bocon"
                  />
                </a>
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Christine is a highly motivated software engineer with a
                  passion for technology and a strong attention to detail. She
                  has excellent problem-solving skills and a committed work
                  ethic, consistently delivering high-quality results. As a team
                  player, Christine works effectively in group environments,
                  bringing a unique perspective and creative solutions to
                  projects. I highly recommend Christine for any software
                  development project or team.
                </p>
                <h6>Mike Bocon</h6>
                <span>Instructional Associate at General Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
