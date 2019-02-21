import React, { Component } from "react";
import { Footer, Section, Nav, Contact, Work, Me } from "./components/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Nav />
        <div id="main">
        <Route exact path="/" component={Me} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
