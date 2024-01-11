import React from "react";
import { Link } from "react-scroll";
import logo from "../components/logo.png";
import "../App.css";

import "../index.css";
function Navbar() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      <Link
        className="nav-items about"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        className="nav-items projects"
        to="container-projects"
        spy={true}
        smooth={true}
        duration={800}
      >
        Projects
      </Link>
      <Link
        className="nav-items skills"
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
      >
        Skills
      </Link>
    </nav>
  );
}

export default Navbar;
