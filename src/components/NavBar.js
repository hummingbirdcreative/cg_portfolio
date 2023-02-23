import React, { useState } from "react";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

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
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
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

      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 10px;
          padding: 10px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 25px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: white;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }
        }
      `}</style>
    </header>
  );
}
