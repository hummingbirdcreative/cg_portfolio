import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" ]{
          title,
          date,  
          place,
          description,
          projectType,
          link,
          tags, 
          mainImage 
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="wrapper">
      <section data-scroll-index="3" className="section bg-orange-50">
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <span>
                <h3>Latest Projects</h3>
              </span>
            </div>
          </div>
          <div className="ligthbox-gallery portfolio-box">
            {projectData &&
              projectData.map((project, index) => (
                <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                  <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                    <div className="portfolio-img">
                      <img
                        src={project.mainImage}
                        title={project.title}
                        alt={project.title}
                      />
                      <a
                        href={project.link}
                        className="gallery-link gallery-link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                    <div class="portfolio-text">
                      <h6>
                        <span>{project.projectType}</span>
                      </h6>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div class="btn-bar">
                        <a
                          class="px-btn px-btn-theme px_modal"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Project;
