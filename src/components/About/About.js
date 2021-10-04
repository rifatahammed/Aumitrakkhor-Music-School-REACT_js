import React from "react";
import band from "../../images/aumitrakkhor.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Aumitrakkhor Band </h1>
      <img src={band} alt="" />
      <p>
        Aumitrakkhor is a new comer band in our music industry. They are a
        psychedelic rock band. <br /> Fb page is facebook.com/aumitrakkhor
      </p>
    </div>
  );
};

export default About;
