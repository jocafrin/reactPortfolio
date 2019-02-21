import React from "react";
import {Link} from "react-router-dom";


export default () => {
  return (
    <nav id="nav">
      <Link to="/" className="icon fa-home">
        <span>Home</span>
      </Link>
      <Link to="/work" className="icon fa-briefcase" >
        <span>Work</span>
      </Link>
      <Link to="/contact" className="icon fa-envelope">
        <span>Contact</span>
      </Link>
      <a href="https://twitter.com/ajlkn" className="icon fa-linkedin">
        <span>LinkedIn</span>
      </a>
    </nav>
  );
};



