import React from "react";
import Intro from './Intro';
import Resume from "./Resume";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;
