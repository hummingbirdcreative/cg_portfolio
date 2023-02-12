import React from "react";

const Project = () => {
  return (
    <main className="wrapper">
      <section data-scroll-index="3" className="section bg-orange-50">
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Latest Projects</span>
              </h3>
            </div>
          </div>
          <div className="lightbox-gallery portfolio-box">
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="https://i.imgur.com/g97RV6k.png"
                    title="Vita"
                    alt="Vita"
                  />
                  <a
                    href="https://vita-life-story.herokuapp.com/"
                    className="gallery-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Python</span>
                  </h6>
                  <h4>Vita Life Story</h4>
                  <p>
                    Group project using Python, Django, SQL, and AWS to create a
                    photo sharing app. In which I acted as the backend
                    developer.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="https://vita-life-story.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="https://i.imgur.com/5J583XW.png"
                    title="Record Crate"
                    alt="Record Crate"
                  />
                  <a
                    href="https://record-project.netlify.app/"
                    className="gallery-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>MERN</span>
                  </h6>
                  <h4>Record Crate</h4>
                  <p>
                    MERN application using Node.js, MongoDB, Mongoose, Express
                    and React.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="https://record-project.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="https://i.imgur.com/bYQlMgb.png"
                    title="Wardrobe Catalog"
                    alt="Wardrobe Catalog"
                  />
                  <a
                    href="https://wardobe-catalog.herokuapp.com/users/login"
                    className="gallery-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>CRUD</span>
                  </h6>
                  <h4>Wardrobe Catalog</h4>
                  <p>
                    Full-CRUD application using Node.js, MongoDb, Mongoose,
                    Express, and EJS
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="https://wardobe-catalog.herokuapp.com/users/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="https://i.imgur.com/dm6XdK2.png"
                    title="Clean Beauty"
                    alt="Clean Beauty"
                  />
                  <a
                    href="https://serene-cascaron-dc9f3f.netlify.app/#"
                    className="gallery-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>API</span>
                  </h6>
                  <h4>Clean Beauty</h4>
                  <p>
                    Website displays and filters beauty products by type and
                    “clean” tag making fetch calls to a beauty API.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="https://serene-cascaron-dc9f3f.netlify.app/#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Project;
