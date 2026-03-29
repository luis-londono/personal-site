import headshot from "../src/images/headshot.jpg";

const Intro = () => {
  return (
    <div className="container">
      <Greeting />
      <div className="row">
        <div id="description" className="col-md-6">
          <p />
          Hi, I’m Luis — a Senior Software Engineer working full-stack since
          2015. I focus on designing and implementing solutions, guiding
          technical decisions, and turning complex problems into working
          systems.
          <p />
          After graduating from the University of Missouri–Kansas City, I
          started at
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
          as a Software Developer and eventually became a Team Lead. In August
          2022, I joined
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
          as a Senior Software Engineer, where I continue to work on challenging
          projects across both front-end and back-end systems.
          <p />
          Outside of work, I spend time with family and friends, travel when I
          can, and support Kansas City sports teams.
          <p />
          Thanks for visiting my page!
        </div>
        <div className="col-md-6">
          <p />
          <img id="headshot" src={headshot} alt="headshot"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;

const hour = new Date().getHours();

const title =
  hour > 18
    ? "Good Evening! 🌃"
    : hour > 12
      ? "Good Afternoon! 🌤"
      : hour >= 0
        ? "Good Morning! 🌞"
        : "Hello!";

const Greeting = () => {
  return <h1 id="welcome">{title}</h1>;
};
