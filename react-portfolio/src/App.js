import React, { Component } from 'react';
import {Footer, Section, Nav, Contact, Work} from './components/'



// import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">

      {/* <!-- Nav --> */}
      <Nav />

      {/* <!-- Main --> */}
        <div id="main">

          {/* <!-- Me --> */}
            <article id="home" className="panel intro">
              <header>
                <h1>Jane Doe</h1>
                <p>Senior Astral Projectionist</p>
              </header>
              <a href="#work" className="jumplink pic">
                <span className="arrow icon fa-chevron-right"><span>See my work</span></span>
                <img src="images/me.jpg" alt="" />
              </a>
            </article>


            <Work />
            <Section />

             <Contact />

        </div>

      <Footer />

    </div>
    );
  }
}

export default App;
