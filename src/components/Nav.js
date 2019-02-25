import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav id="nav">
      <NavLink exact activeClassName="active" className="icon fa-home" to="/">
        <span>Home</span>
      </NavLink>

      <NavLink to="/work" activeClassName="active" className="icon fa-folder">
        <span>Work</span>
      </NavLink>

      <a href="//github.com/jocafrin" className="icon fa-github" target="_blank" rel="noopener noreferrer">
        <span>GitHub</span>
      </a>

      <a
        href="//linkedin.com/in/jocatherine-griggs"
        className="icon fa-linkedin" target="_blank" rel=" noopener noreferrer"
      >
        <span>LinkedIn</span>
      </a>
    </nav>
  );
};
