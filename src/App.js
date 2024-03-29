import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
            </div>
        </BrowserRouter>
    );
}}

export default App;
