import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Header from './Header';

function App() {

  return (
    <>
      <h1> THIS IS A TEST!</h1>
      <Header />
      <Intro />

      <div className="App">
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
      </div>
    </>
  );
}

export default App;
