import React, { useEffect, useState } from "react";
import headshot from "../src/images/headshot.jpg";

const Intro = () => {
  const [greeting, setGreeting] = useState(null);
  let howdy;
  let hour = new Date().getHours();

  const welcome = () => {
    if (hour > 18) {
      howdy = "Good Evening! 🌃";
    } else if (hour > 12) {
      howdy = "Good Afternoon! 🌤";
    } else if (hour >= 0) {
      howdy = "Good Morning! 🌞";
    } else {
      howdy = "";
    }
    setGreeting(howdy);
  };

  useEffect(() => {
    welcome();
  });

  return (
    <>
      <div className="container">
        <h1 id="welcome">{greeting}</h1>
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
            </a>
            {" "}
            as a Software Developer. In August of 2022, I
            began working at{" "}
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
            as a Senior Software Engineer. I have been lucky to work with
            incredible talent and strive to achieve my career goals. I'm excited
            for the future and I try and push myself to become a better
            developer each day.
            <p />
            I love spending my time with family, hanging out with my friends,
            traveling the
            <span class="emoji earth" />
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
