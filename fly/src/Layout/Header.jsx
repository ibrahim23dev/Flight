import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
function Header() {
  return (
    <nav className="flex">
      <div className="flex">
        <SiConsul />
      </div>
      <div className="flex visible">
        <li className="flex">
          <BsPhoneVibrate />
          Support
        </li>
        <li className="flex">
          <AiOutlineGlobal />
          language
        </li>
      </div>
      <div>
        <span>Sing In</span>
        <span>Sing Out</span>
      </div>
    </nav>
  );
}

export default Header;
