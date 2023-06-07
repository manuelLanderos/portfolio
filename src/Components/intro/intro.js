import React from 'react'
import './intro.css'
import Plx from "react-plx";



function intro() {
  const parallaxData = [
    {
      start: 'self',
      duration: 1000,
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
  const parallaxData2 = [
    {
      start: 'self',
      duration: 1000,
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

  return (
    <div>
      <div id="about" className=" container">
        <Plx parallaxData={parallaxData}>
          <div className="content">
            <p className="box">
              Hi, I'm Manuel Landeros, and I'm a web developer with experience in both front-end and back-end development. I'm proficient in HTML, CSS, Javascript, Node.js, NPM, and React.
              <br />
              I got into web development when I was working as a designer and realized I wanted to expand my skill set. I enjoyed the technical aspect of designing and decided to pursue web development as a career. Before I made the switch, I worked with artists to create advertisements for emails, art exhibitions, and project pitches.
              <br />
              I've since gained experience working on a variety of projects, from creating a complex facial recognition website with front and back end properties. My biggest achievement is creating THIS page, all by myself, listing all my projects and everything needed to show myself off and all the hard work I have put into my work.
              <br />
              In my free time, I enjoy reading, watching films, and listening to music. If you're interested in learning more about my work, please check out my portfolio and Github profile. Thanks for visiting my site!
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