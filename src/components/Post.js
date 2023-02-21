import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" ]{
          title, 
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="wrapper">
      <section
        data-scroll-index="1"
        className="section services-section bg-gray"
        style={{
          backgroundImage: "url(assets/img/effect/bg-effect-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Recent Blog Post</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData &&
              postData.map((post, index) => (
                <article>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full object-cover absolute"
                      />
                      <span
                        className="relative h-full flex justify-end items-end pr-4 pb-4"
                        key={index}
                      >
                        <div className="btn-bar">
                          <h3 className="px-btn px-btn-theme">{post.title}</h3>
                        </div>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
