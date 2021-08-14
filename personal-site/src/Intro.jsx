import React, { useEffect, useState } from "react";
import niko from "../src/images/niko.jpg";
import katherine_and_i from "../src/images/katherine_and_i.jpg";

const Intro = () => {
  var howdy;
  var hour = new Date().getHours();
  const [greeting, setGreeting] = useState(null);
  let [slideIndex, setSlideIndex] = useState(1);

  function welcome() {
    if (hour > 18) {
      howdy = "Good Evening!";
    } else if (hour > 12) {
      howdy = "Good Afternoon!";
    } else if (hour >= 0) {
      howdy = "Good Morning!";
    } else {
      howdy = "";
    }
    setGreeting(howdy);
  }

  // function nextImage() {
  //   showNextImage(slideIndex);
  // }

  // function showNextImage(n) {
  //   var x = document.getElementsByClassName("mySlides");
  //   if (x.length > 0) {
  //     if (n > x.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = x.length;
  //     }
  //     for (var i = 0; i < x.length; i++) {
  //       x[i].style.display = "none";
  //     }
  //     x[slideIndex - 1].style.display = "block";
  //     setSlideIndex(slideIndex + 1);
  //   }
  // }

  useEffect(() => {
    welcome();
    // showNextImage(1);
  }, []);

  return (
    <>
      <div className="container body-content">
        <h1 id="welcome">{greeting}</h1>
        <div className="row">
          <div className="col-md-5">
            <p />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name's Luis and I'm a software
            developer. I've been professionaly writing code since 2015 and
            absolutely love what I do!
            <p />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shortly after graduating from the
            University of Missouri-Kansas City, I found a really great job at
            <a id="neu" href="https://www.neuanalytics.com">
              {" "}
              NeuAnalytics
            </a>{" "}
            where I've had the opportunity to work with some amazing mentors and
            advance my career in the Fintech industry. I'm excited for the
            future and I try and push myself to become a better developer each
            day.
            <p />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I love spending my time with family,
            hanging out with my friends, traveling the and supporting local
            Kansas City sports teams.
            <p />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks for visiting my page!
          </div>

          <div className="col-md-7">
            <div className="w3-content w3-display-container">
              <img className="mySlides" src={niko} />
              {/* <img className="mySlides" src={katherine_and_i} /> */}
              {/* <button
                className="w3-button w3-black w3-display-left"
                onClick={() => nextImage()}
              >
                &#10094;
              </button>
              <button
                className="w3-button w3-black w3-display-right"
                onClick={() => nextImage()}
              >
                &#10095;
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
