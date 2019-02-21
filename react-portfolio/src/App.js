import React, { Component } from 'react';
import Footer from './components/footer'
import Section from './components/section';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">

      {/* <!-- Nav --> */}
        <nav id="nav">
          <a href="#" className="icon fa-home"><span>Home</span></a>
          <a href="#work" className="icon fa-folder"><span>Work</span></a>
          <a href="#contact" className="icon fa-envelope"><span>Contact</span></a>
          <a href="https://twitter.com/ajlkn" className="icon fa-twitter"><span>Twitter</span></a>
        </nav>

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

          {/* <!-- Work --> */}
            <article id="work" className="panel">
              <header>
                <h2>Work</h2>
              </header>
              <p>
                Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                luctus elit eget interdum.
              </p>

            </article>
            <Section />
          {/* <!-- Contact --> */}
            <article id="contact" className="panel">
              <header>
                <h2>Contact Me</h2>
              </header>
              <form action="#" method="post">
                <div>
                  <div className="row">
                    <div className="col-6 col-12-medium">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-medium">
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" placeholder="Message" rows="6"></textarea>
                    </div>
                    <div className="col-12">
                      <input type="submit" value="Send Message" />
                    </div>
                  </div>
                </div>
              </form>
            </article>

        </div>

      <Footer />

    </div>
    );
  }
}

export default App;
