import React from "react";

const Testimonial = () => {
  return (
    <main className="wrapper">
      <section class="section testimonial-section">
        <div class="container">
          <div class="grid section-heading">
            <div class="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Testimonial</span>
              </h3>
            </div>
          </div>
          <div
            class="owl-carousel lightbox-gallery"
            data-items="2"
            data-nav-dots="true"
            data-lg-items="2"
            data-md-items="1"
            data-sm-items="1"
            data-xs-items="1"
            data-space="30"
            data-autoplay="true"
          >
            <div class="feature-box-03">
              <div class="feature-img">
                <a href="https://www.linkedin.com/in/daniel-j-scott/">
                  <img
                    src="assets/img/avatar-daniel.jpg"
                    title="Daniel Scott"
                    alt="Daniel Scott"
                  />
                </a>
              </div>
              <div class="feature-content">
                <div class="icons">
                  <i class="fas fa-quote-left"></i>
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
            <div class="feature-box-03">
              <div class="feature-img">
                <a href="https://www.linkedin.com/in/andrea-williams433/">
                  <img
                    src="assets/img/avatar-andrea.jpg"
                    title="Andrea Williams"
                    alt="Andrea Williams"
                  />
                </a>
              </div>
              <div class="feature-content">
                <div class="icons">
                  <i class="fas fa-quote-left"></i>
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
            <div class="feature-box-03">
              <div class="feature-img">
                <a href="https://www.linkedin.com/in/mike-bocon/">
                  <img
                    src="assets/img/avatar-mike.jpg"
                    title="Mike Bocon"
                    alt="Mike Bocon"
                  />
                </a>
              </div>
              <div class="feature-content">
                <div class="icons">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
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
