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
            <i className="fa fa-home" aria-hidden="true"></i> Home
          </NavLink>{" "}
          <span className="vertical-pipe">|</span>{" "}
          <a href={resume} target="_blank" rel="noreferrer">
            <i className="fa fa-file" aria-hidden="true"></i> Resume
          </a>{" "}
          <span className="vertical-pipe">|</span>{" "}
          <NavLink to="/contact">
            <i className="fa fa-phone" aria-hidden="true"></i> Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
