import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../src/images/resume.pdf";

const Navigation = () => {
  return (
    <div id="nav">
      <nav>
        <NavLink to="personal-site">
          <i className="fa fa-home" aria-hidden="true"></i> Home
        </NavLink>{" "}
        <span className="vertical-pipe">|</span>{" "}
        <a href={resume} target="_blank" rel="noreferrer">
          <i className="fa fa-file" aria-hidden="true"></i> Resume
        </a>{" "}
        <span className="vertical-pipe">|</span>{" "}
        <NavLink to="personal-site/contact">
          <i className="fa fa-phone" aria-hidden="true"></i> Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
