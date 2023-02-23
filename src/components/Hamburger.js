import { useState } from "react";

export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU lg:hidden mobile_toggle menu_open w-[40px] flex flex-col">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="inline-block h-0.5 w-8 animate-pulse bg-slate-900"></span>
            <span className="inline-block h-0.5 w-8 animate-pulse bg-slate-900"></span>
            <span className="inline-block h-0.5 w-8 animate-pulse bg-slate-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-slate-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#home">Home</a>
              </li>
              <li className="border-b border-slate-900 my-8 uppercase">
                <a href="#blog">Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#skill">Skills</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#work">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contactus">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
