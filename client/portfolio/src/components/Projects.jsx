import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./Project.css";
import arrow from "./arrow.png";

const Projects = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  const projects = [
    { name: "EthTransferDAPP" },
    { name: "BlogDAPP" },
    { name: "ID-CardDApp" },
    { name: "PRODO" },
  ];

  return (
    <Element name="container-projects">
      <section id="container-projects">
        <div
          className={`projects-main fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
          <div className="project-names main">Projects</div>
          {projects.map((project, index) => (
            <div key={index} className="project-names">
              <a className="title">{project.name}</a>
              <img className="arrow" src={arrow} alt="Arrow" />
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
