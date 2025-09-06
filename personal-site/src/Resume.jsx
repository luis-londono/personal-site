import React from "react";
import resume from "../src/images/resume.pdf";

const Resume = () => {
  return (
    <div className="container body-content">
      <h1>Resume</h1>
      <div id="cv">
        <div className="col-md-12">
          <div className="emdeb-responsive">
            <iframe
              title="resume"
              src={resume}
              width="900"
              height="600"
              style={{ textAlign: "center", marginLeft: "60px" }}
            ></iframe>
          </div>
        </div>
      </div>
      <br />
      <div className="container-btn">
        <div className="center">
          <a
            className="btn-download"
            role="button"
            href={resume}
            download="luis_londono"
          >
            Download <i className="fa fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
