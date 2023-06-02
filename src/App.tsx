import React from 'react';
import logo from './logo.svg';
import './App.css';
import request from './request'

function App() {
  const onClicker = () => {
    console.log(process.env)
  }
  const fetchWorker = () => {
    request.get('/getKV').then(res => {
      console.log('KV:', res)
    })
  }
  const fetchVersion = () => {
    request.get('/version').then(res => {
      console.log('version:', res)
    })
  }
  const fetchStuff = () => {
    request.get('/stuff').then(res => {
      console.log('stuff:', res)
    })
  }
  const fetchPost = () => {
    const params = {
      name: 'test-post',
      age: 20
    }
    request.post('/post', params).then(res => {
      console.log('post:', res)
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
        <input type="button" value="点击" onClick={onClicker} />
        <input type="button" value="Fetch-KV" onClick={fetchWorker} />
        <input type="button" value="Fetch-Version" onClick={fetchVersion} />
        <input type="button" value="Fetch-Stuff" onClick={fetchStuff} />
        <input type="button" value="Fetch-Post" onClick={fetchPost} />
      </div>
    </div>
  );
}

export default App;
