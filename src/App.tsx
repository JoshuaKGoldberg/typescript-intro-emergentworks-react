import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Color } from "./Color";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color label="MY FAVORITE COLOR IS" value="c0ff33" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. MY FAVORITE COLOR IS
          PINK
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
  );
}

export default App;
