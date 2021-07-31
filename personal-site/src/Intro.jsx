import React, { useEffect, useState } from 'react';

const Intro = () => {
  var today = new Date();
  var year = today.getFullYear();
  var hourNow = today.getHours();
  var howdy;
  var slideIndex = 1;
  const [greeting, setGreeting] = useState(null);

  function welcome() {
    if (hourNow > 18) {
      howdy = 'Good evening!';
    } else if (hourNow > 12) {
      howdy = 'Good afternoon!';
    } else if (hourNow >= 0) {
      howdy = 'Good morning!';
    } else {
      howdy = '';
    }
    setGreeting(howdy);
  }

  useEffect(() => {
    welcome();
  }, []);

  return (
    <>
      <h1 id="welcome">{greeting}</h1>
      <div>
        <p />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to my page! My name's Luis and I'm a software developer.
        I"ve been professionaly writing code since 2015 and absolutely love what I do!
        <p />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shortly after graduating from the University of Missouri-Kansas City, I found a really great job at 
        <a id="neu" href="https://www.neuanalytics.com"> NeuAnalytics</a> where I've had the opportunity to work with some amazing mentors and advance my career in the Fintech industry. I'm excited for the future and I try and push myself to become a better developer each day.
        <p />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I love spending my time with family, hanging out with my friends, traveling the and supporting local Kansas City sports teams.
        <p />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks for visiting my page!

      </div>
    </>
  );
};

export default Intro;