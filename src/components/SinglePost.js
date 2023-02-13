import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import BarBlog from "./BarBlog.js";
import Contact from "./Contact.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title, 
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }, 
        body,
        "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <>
      <BarBlog />

      <main className="wrapper">
        <section data-scroll-index="3" className="section bg-orange-50">
          <div className="container">
            <article className="mx-auto bg-white">
              <header className="relative">
                <div className="absolute h-full w-full flex items-center justify-center p-8">
                  <div className="bg-white bg-opacity-75 p-12">
                    <h1 className=" text-3xl lg:text-6xl mb-4">
                      {singlePost.title}
                    </h1>
                    <div className="flex justify-center text-black">
                      <img
                        src={urlFor(singlePost.authorImage).url()}
                        alt={singlePost.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="cursive flex items-center pl-2 text-2xl">
                        {singlePost.name}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.title}
                  className="w-full object-cover rounded-t"
                  style={{ height: "400px" }}
                />
              </header>
              <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                <BlockContent
                  blocks={singlePost.body}
                  projectId="cmc4cnq4"
                  dataset="production"
                />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default SinglePost;
