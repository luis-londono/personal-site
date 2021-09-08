import React from "react";
import Iframe from "./components/Iframe.jsx";
import resume from "../src/images/resume.pdf";

const Resume = () => {
  return (
    <div className="container body-content">
      <h1>Resume</h1>
      <div id="cv">
        <Iframe source={resume} />
      </div>
      <br />
      <div className="container-btn">
        <div className="center">
          {/* <button className="btn-download" onClick={buttonClick}>
            Download <i class="fa fa-download"></i>
          </button> */}
          <a
            class="btn-download"
            role="button"
            href={resume}
            download="luis_londono"
          >
            Download <i class="fa fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
