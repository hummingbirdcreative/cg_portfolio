import React from "react";

const Interest = () => {
  return (
    <>
      <main className="wrapper">
        <section className="py-10 bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-8 md:col-span-7 text-center md:text-left">
                <h4 className="text-[25px] md:text-[30px] lg:text-[35px] m-0 text-white font-[600]">
                  Intrested working with me?
                </h4>
              </div>
              <div className="col-span-12 lg:col-span-4 md:col-span-5 text-center text-md-end">
                <a
                  className="px-btn px-btn-theme2"
                  data-scroll-nav="4"
                  href="#contactus"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Interest;
