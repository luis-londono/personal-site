import React from "react";
import { NavLink } from "react-router-dom";
import banner from "../src/images/luis_banner.png";
import resume from "../src/images/resume.pdf";

const Header = () => {
  return (
    <>
      <img id="banner" src={banner} alt="Luis Londono"></img>
      <div id="nav">
        <nav>
          <NavLink to="/">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </NavLink>{" "}
          |{" "}
          <a href={resume} target="_blank" without rel="noreferrer">
            <i class="fa fa-file" aria-hidden="true"></i> Resume
          </a>{" "}
          |
          <NavLink to="/contact">
            <i class="fa fa-phone" aria-hidden="true"></i> Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
