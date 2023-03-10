import logo from './logo.svg';
import './App.css';

function sumNumbers(number) {
  return number + 1
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sumNumbers(4)}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
