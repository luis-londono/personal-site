import React, { useEffect } from "react";
import headshot from "../src/images/headshot.jpg";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const Intro = () => {
  ReactGA.initialize('G-8HFGBY4GR4');
  
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <div className="container">
        <Greeting />
        <div className="row">
          <div id="description" className="col-md-6">
            <p />
            My name's Luis and I'm a software developer. I've been professionaly
            writing
            <code id="code"> &lt;code/&gt; </code>
            since 2015 and absolutely love what I do!
            <p />
            Shortly after graduating from the University of Missouri-Kansas
            City, I found a really great job at
            <a
              id="neu"
              className="job-link"
              href="https://www.neuanalytics.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              NeuAnalytics
            </a>{" "}
            as a Software Developer and Team Lead. In August of 2022, I began
            working at{" "}
            <a
              id="psi"
              className="job-link"
              href="https://www.psiexams.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              PSI
            </a>{" "}
            as a Senior Software Engineer. I'm excited for the future and I try
            and push myself to become a better developer each day.
            <p />
            I love spending my time with family, hanging out with my friends,
            traveling the
            <span className="emoji earth" />
            and supporting local Kansas City sports teams.
            <p />
            Thanks for visiting my page!
          </div>
          <div className="col-md-6">
            <p />
            <img id="headshot" src={headshot} alt="headshot"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

const Greeting = () => {
  const hour = new Date().getHours();

  const howdy =
    hour > 18
      ? "Good Evening! 🌃"
      : hour > 12
      ? "Good Afternoon! 🌤"
      : hour >= 0
      ? "Good Morning! 🌞"
      : "Hello!";

  return (
    <>
      <h1 id="welcome">{howdy}</h1>
    </>
  );
};
