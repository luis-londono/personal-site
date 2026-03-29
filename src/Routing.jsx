import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Intro from "./Intro";
import Resume from "./Resume";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<Intro />} />
      <Route exact path="/personal-site" element={<Intro />} />
      <Route path="/personal-site/resume" element={<Resume />} />
      <Route path="/personal-site/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
