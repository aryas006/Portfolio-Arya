import React from "react";
import "../App.css";
import profile from "../components/profile.png";
import "../index.css";
function About() {
  return (
    <section>
      {" "}
      <div className="container">
        <div className="about-info">
          <a className="info">Hi,I am Arya</a>
          <p>
            Hey there, I'm Arya! Aspiring Web 3.0 enthusiast and coding
            aficionado, I'm on an exhilarating journey of mastering Solidity and
            crafting decentralized marvels. Join me as I explore the realms of
            blockchain technology, learn the intricacies of smart contract
            development, and collaborate on projects that push the boundaries of
            what's possible in the world of Web 3.0.
          </p>
          <img className="profile" src={profile} alt="" />
          <div className="connect">
            <strong>I'm always happy to talk</strong>
            <p>
              If you want to work with me, feel free to email me or dm on my
              social network ! I’m always up for a talk about new project over a
              coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
