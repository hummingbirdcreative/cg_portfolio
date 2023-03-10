import React from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <header className="main-header fixed left-0 right-0 z-[111]">
      <div className="container flex items-center justify-between one-page-nav relative py-5 lg:py-3">
        <div className="logo">
          <a href="#">
            <img
              src="assets/img/cglogobg.png"
              title="CG Logo"
              alt="CG Logo"
              style={{ width: "100px", height: "29px", paddingTop: "5px" }}
            />
          </a>
        </div>
        {/* <Hamburger /> */}
        <button className="lg:hidden mobile_toggle w-[40px] flex flex-col">
          <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
          <span className="w-[25px] h-[2px] bg-slate-900 inline-block my-[5px]"></span>
          <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
        </button>

        <div className="navbar-collapse flex">
          <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
            <li>
              <a className="active" data-scroll-nav="0" href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav="1" href="#blog">
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav="2" href="#skill">
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav="3" href="#work">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a data-scroll-nav="4" href="#contactus">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="ms-auto hidden lg:flex">
          <a
            className="px-btn px-btn-theme"
            data-scroll-nav="4"
            href="#contactus"
          >
            Contact Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
