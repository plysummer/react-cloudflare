import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  
  const fetchWorker = () => {
    axios.post('https://helloworker.ipfsummer789.workers.dev/post', {}).then(res => {
      console.log(res)
    })
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
        <input type="button" value="Fetch" onClick={fetchWorker} />
      </div>
    </div>
  );
}

export default App;
