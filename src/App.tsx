import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const clickFetch = () => {
    console.log('fetch...')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <input type="button" value="Fetch" onClick={clickFetch} />
      </div>
    </div>
  );
}

export default App;
