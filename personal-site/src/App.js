import "./app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Routing from "./Routing";
import ReactGA from 'react-ga';

  // G-8HFGBY4GR4

function App() {
  ReactGA.initialize('G-R3FLXSY8JP');

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
