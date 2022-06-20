import logo from './logo.svg';
import './Styles/app.css';
import Navbar from './Component/Navbar';
import React  from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test React Mic Test
        </p>
        <div className='sass'>
          <h4>Import SASS</h4>
          <input type='checkbox'></input>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Study React
        </a>
      </header>
    </div>
  );
}

export default App;