// import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro";
import Header from "./Header";
// import Resume from "./Resume";
// import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Intro />
        {/* <Resume /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
