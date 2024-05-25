import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

//import image details

import { image } from "../data/user";

//export 
export default About; 