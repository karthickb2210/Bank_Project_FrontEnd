import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [on, setOn] = useState(false);
  return (
    <nav className="relative container mx-auto p-6 z-30 bg-white ">
      <div className=" flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="hidden space-x-8 md:flex">
          <a
            href="#"
            className="text-grayish-blue hover:text-black duration-300 "
          >
            Home
          </a>
          <a
            href="#"
            className="text-grayish-blue hover:text-black duration-300 "
          >
            About
          </a>
          <a
            href="#"
            className="text-grayish-blue hover:text-black duration-300 "
          >
            Contact
          </a>
          <a
            href="#"
            className="text-grayish-blue hover:text-black duration-300 "
          >
            Blog
          </a>
          <a
            href="#"
            className="text-grayish-blue hover:text-black duration-300 "
          >
            Careers
          </a>
        </div>
        <div className=" flex space-x-3">
          <Link to="/login">
            {" "}
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Account
            </button>
          </Link>
        </div>
        <div onClick={() => setOn((prev) => !prev)} className="md:hidden">
          <img
            src={hamburger}
            alt="icon"
            className={`w-8 h-8 ${on ? "hidden" : ""}`}
          />
          <img
            src={close}
            alt="icon"
            className={`w-8 h-8 ${on ? "" : "hidden"}`}
          />
        </div>

        <div
          className={`md:hidden ${
            !on ? "hidden" : ""
          } bg-white z-20 absolute flex flex-col items-center top-20 left-1/2 -translate-x-1/2 shadow-md rounded-sm w-2/3`}
        >
          <a href="#" className="font-medium text-black p-2 ">
            Home
          </a>
          <span className="h-[2px] bg-light-gray w-[150px] mx-auto"></span>
          <a href="#" className="font-medium text-black p-2">
            About
          </a>
          <span className="h-[2px] bg-light-gray w-[150px] mx-auto"></span>
          <a href="#" className="font-medium text-black p-2">
            Contact
          </a>
          <span className="h-[2px] bg-light-gray w-[150px] mx-auto"></span>
          <a href="#" className="font-medium text-black p-2">
            Blog
          </a>
          <span className="h-[2px] bg-light-gray w-[150px] mx-auto"></span>
          <a href="#" className="font-medium text-black p-2 ">
            Careers
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
