import React from 'react'
import './intro.css'
import Plx from "react-plx";

function intro() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let parallaxData, parallaxData2;
  if (isMobile) {

    parallaxData = [
      {
        start: 'self',
        duration: 300,
        properties: [
          {
            startValue: -280,
            endValue: 20,
            property: "translateX",
          },
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
        ],
      },
    ];
    parallaxData2 = [
      {
        start: 'self',
        duration: 300,
        properties: [
          {
            startValue: 2,
            endValue: 0,
            property: "translateX",
          },
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
          {
            startValue: .5,
            endValue: .9,
            property: "scale",
          },
        ],
      },
    ];
  } else {
    parallaxData = [
      {
        start: 'self',
        duration: 600,
        properties: [
          {
            startValue: -280,
            endValue: 20,
            property: "translateX",
          },
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
        ],
      },
    ];

    parallaxData2 = [
      {
        start: 'self',
        duration: 600,
        properties: [
          {
            startValue: 200,
            endValue: 0,
            property: "translateX",
          },
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
          {
            startValue: .5,
            endValue: .9,
            property: "scale",
          },
        ],
      },
    ];
  }


  return (
    <div>
      <div id="about" className=" container">
        <Plx parallaxData={parallaxData}>
          <div className="content">
            <p className="box">
              Hello! I'm Manuel Landeros, a web developer skilled in HTML, CSS, JavaScript, Node.js, NPM, and React. My journey began as a designer, but I found my passion in web development and made the switch. I've worked on various projects, including a complex facial recognition website. This page, showcasing all my hard work and projects, is my proudest achievement. In my free time, I enjoy reading, watching films, and listening to music. Check out my portfolio and Github profile to learn more. Thanks for visiting!
            </p>
            <Plx parallaxData={parallaxData2}>

              <img className="code" src="code.jpg" alt="pic" />
            </Plx>
          </div>
        </Plx>
      </div>
    </div >
  );
}

export default intro;