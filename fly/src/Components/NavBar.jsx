import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "offer", label: "Offer" },
    { to: "destination", label: "Destination" },
    { to: "service", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  const mobileMenuContent = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <div className="flex items-center justify-center py-4">
        <span className="text-3xl font-bold text-white">Logo</span>
      </div>
      <ul className="text-center text-xl">
        {navLinks.map((link) => (
          <li
            key={link.to}
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
          >
            <Link spy={true} smooth={true} to={link.to} onClick={handleClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="h-16vh flex justify-between z-50 text-white lg:py-5 px-6 md:px-10 lg:px-20 py-4 flex-1 bg-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Logo
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
          <div
            className={`lg:flex md:flex items-center ${
              click ? "flex" : "hidden"
            }`}
          >
            <ul className="lg:flex md:flex gap-8 mr-4 md:mr-8 text-[16px] md:text-[18px]">
              {navLinks.map((link) => (
                <li
                  key={link.to}
                  className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
                >
                  <Link
                    spy={true}
                    smooth={true}
                    to={link.to}
                    onClick={handleClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {click && mobileMenuContent}
        <button
          className="block lg:hidden md:hidden sm:hidden transition"
          onClick={handleClick}
          aria-expanded={click}
          role="button"
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
