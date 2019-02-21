import React, { Component } from "react";

export default () => {
  return (
    <nav id="nav">
      <a href="#" className="icon fa-home">
        <span>Home</span>
      </a>
      <a href="#work" className="icon fa-folder">
        <span>Work</span>
      </a>
      <a href="#contact" className="icon fa-envelope">
        <span>Contact</span>
      </a>
      <a href="https://twitter.com/ajlkn" className="icon fa-linkedin">
        <span>LinkedIn</span>
      </a>
    </nav>
  );
};
