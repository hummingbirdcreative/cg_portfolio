import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer bg-slate-900 border-t border-white border-opacity-10 py-4">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
            <div className="flex justify-center md:justify-start w-full">
              <a
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="https://www.linkedin.com/in/christinegrayb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size="2rem" />
              </a>
              <a
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="https://cdn.hihello.me/o/172322f9-7ec2-40b8-a3c7-a1b2b1dbd4d4.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFilePdf size="2rem" />
              </a>
              <a
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="https://github.com/hummingbirdcreative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="2rem" />
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 text-center md:text-right">
            <p className="m-0 text-white text-opacity-75">
              © 2023 copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
