import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {
        props && props.bio ? 
        <p>{props.bio}</p> :
        null
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}></Links>
    </div>
  );
}

export default About;
