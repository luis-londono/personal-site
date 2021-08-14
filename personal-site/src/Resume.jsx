import React from "react";
import Iframe from "./components/Iframe.jsx";
import resume from "../src/images/resume.pdf";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <div id="cv">
        <Iframe source={resume} />
      </div>
    </div>
  );
};

export default Resume;
