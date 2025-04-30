//import logo from './logo.svg';
import './App.css';
import React from "react";
import MultiButton from './cgu_multiButton.js';
import HelloCGU from './cgu_hello.js';


function App() {
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        { MultiButton(10)}
      </div>
    </div>
  );
}


export default App;
