import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav id="nav">
      <NavLink exact activeClassName="active" className="icon fa-home" to="/">
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/work"
        activeClassName="active"
        className="icon fa-folder"
      >
        <span>Work</span>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="active"
        className="icon fa-envelope"
      >
        <span>Contact</span>
      </NavLink>

      <a href="https://twitter.com/ajlkn" className="icon fa-linkedin">
        <span>LinkedIn</span>
      </a>
    </nav>
  );
};
