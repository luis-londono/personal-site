import "./app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Routing from "./Routing";
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-8HFGBY4GR4');

  return (
    <>
      <div id="wrapper">
        <Header />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
