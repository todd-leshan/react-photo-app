import React from "react";
import logo from "./assets/logo.svg";

import { Link } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/cutup" className="App-link">
          Cutup Page - adaptive view
        </Link>
        <Link to="/cutup-grid-view" className="App-link">
          Cutup Page - grid view
        </Link>
        <Link to="/home" className="App-link">
          Home
        </Link>
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
