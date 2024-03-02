import React from "react";
import "./about2.css";
import profile from "../components/profile.png";

function About() {
  return (
    <section className="w-full">
      <div className="containermain">
        <div className="about-info font-black text-center md:text-left md:flex md:items-center md:justify-between">
          <a className="info font-serif">Hi, I am <a className="title-focus">Arya</a></a>
          <p className="font-light md:ml-4 md:w-2/3">
            Hey there, I'm! Aspiring Web 3.0 enthusiast and coding
            aficionado, I'm on an exhilarating journey of mastering Solidity and
            crafting decentralized marvels. Join me as I explore the realms of
            blockchain technology, learn the intricacies of smart contract
            development, and collaborate on projects that push the boundaries of
            what's possible in the world of Web 3.0.
          </p>
          <img className="profile mt-4 md:mt-0" src={profile} alt="" />
        </div>
        <div className="connect text-center md:text-left">
          <strong>I'm always happy to talk</strong>
          <p className="font-light">
            If you want to work with me, feel free to email me or DM me on my
            social network! I’m always up for a talk about a new project over a
            coffee.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
