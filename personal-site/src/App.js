import "./App.css";
import Intro from "./Intro";
import Layout from "./Layout";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import Route from "./Route";

function App() {
  return (
    <>
      <div id="wrapper">
        <Layout />
        <Route path="/">
          <Intro />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    </>
  );
}

export default App;
