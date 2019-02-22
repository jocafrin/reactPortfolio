import React from "react";
import { Link } from "react-router-dom";

export default params => {
  return (
    <article id="home" className="panel intro">
      <header>
        <h1>JoCatherine Griggs</h1>
        <h3>Front End Web Developer</h3>
        <p>Lambda School Graduate</p>
      </header>
      <Link
        to="/work" className="jumplink pic">
        <span className="arrow icon fa-chevron-right">
          <span>See my work</span>
        </span>
        <img src="images/me1.jpg" alt="" />
      </Link>
    </article>
  );
};
