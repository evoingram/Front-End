import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Header from "./components/header/Header"
import HomePage from "../src/pages/homepage/HomePage";
import LoginPage from "../src/pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <h1>Prisoner Skills 2</h1>
      <Header />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
    </div>
  );
}

export default App;
