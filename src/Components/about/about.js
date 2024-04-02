import React from 'react'
import './about.css'
import Plx from "react-plx";

function About() {
  const parallaxData = [
    {
      start: 'self',
      duration: 1470,
      properties: [
        {
          startValue: 0,
          endValue: 1350,
          property: "translateY",
        },
      ],
    },
  ];
  return (

    <div id="container">
      <Plx parallaxData={parallaxData}>

        <a className="link" href="https://www.linkedin.com/in/manuel-landeros-a4332b219/" target="_blank" rel="noreferrer"><img src='me.jpeg' alt="me" /> </a>
        <div class="box-text">
          <h1>About Me Hello</h1>
          <p>Hello! My name is Manuel Landeros </p>
        </div>
      </Plx>
    </div>
  );
}

export default About;