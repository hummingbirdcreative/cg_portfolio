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
          <div
            className="owl-carousel lightbox-gallery"
            data-items="2"
            data-nav-dots="true"
            data-lg-items="2"
            data-md-items="1"
            data-sm-items="1"
            data-xs-items="1"
            data-space="30"
            data-autoplay="true"
          >
            <div className="feature-box-03">
              <div className="feature-img">
                <img src="assets/img/avatar-1.jpg" title="" alt="" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <h6>Jennifer Lutheran</h6>
                <span>CEO at pxdraft</span>
              </div>
            </div>
            <div className="feature-box-03">
              <div className="feature-img">
                <img src="assets/img/avatar-2.jpg" title="" alt="" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <h6>Jennifer Lutheran</h6>
                <span>CEO at pxdraft</span>
              </div>
            </div>
            <div className="feature-box-03">
              <div className="feature-img">
                <img src="assets/img/avatar-3.jpg" title="" alt="" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <h6>Jennifer Lutheran</h6>
                <span>CEO at pxdraft</span>
              </div>
            </div>
            <div className="feature-box-03">
              <div className="feature-img">
                <img src="assets/img/avatar-4.jpg" title="" alt="" />
              </div>
              <div className="feature-content">
                <div className="icons">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <h6>Jennifer Lutheran</h6>
                <span>CEO at pxdraft</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
