import React from "react";
import { Element } from "react-scroll";
import "./Project.css";
import arrow from "./arrow.png";

export default function Projects() {
  return (
    <Element name="container-projects">
      <section id="container-projects">
        <div className="projects-main">
          {" "}
          <div className="project-names main">Projects</div>
          <div className="project-names">
            <a className="title"> EthTransferDAPP</a>

            <img className="arrow" src={arrow} />
          </div>
          <div className="project-names">
            <a className="title">BlogDAPP</a>{" "}
            <img className="arrow" src={arrow} />
          </div>
          <div className="project-names">
            <a className="title">ID-CardDApp</a>{" "}
            <img className="arrow" src={arrow} />
          </div>
          <div className="project-names">
            <a className="title">PRODO</a> <img className="arrow" src={arrow} />
          </div>
        </div>
      </section>
    </Element>
  );
}
