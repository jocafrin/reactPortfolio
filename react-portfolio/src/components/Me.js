import React from "react";
import { Link } from "react-router-dom";

export default params => {
  return (
    <article id="home" className="panel intro">
      <header>
        <h1>Jane Doe</h1>
        <p>Senior Astral Projectionist</p>
      </header>
      <Link
        to="/work" className="jumplink pic">
        <span className="arrow icon fa-chevron-right">
          <span>See my work</span>
        </span>
        <img src="images/me.jpg" alt="" />
      </Link>
    </article>
  );
};
