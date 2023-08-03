import React from 'react'
import './project.css'
// import './photo1.png'
import Tilt from 'react-parallax-tilt'
import Plx from "react-plx";

function intro() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let parallaxData;
  if (isMobile) {

    parallaxData = [
      {
        start: 'self',
        duration: 300,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "scale",
          },
        ],
      },

    ];

  } else {
    parallaxData = [
      {
        start: 'self',
        duration: 700,
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "scale",
          },
        ],
      },

    ];


  }

  return (
    <div>
      <h1 id="project">Projects</h1>

      <br></br>

      <div className="container">
        <Plx parallaxData={parallaxData}>
          <div className="card">
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="all" glareBorderRadius="20px">


              <h2 className="project-title">Smart Brain</h2>
              <img src="photo1.png" alt="smart brain" />
            </Tilt>
            <div className="project-description">
              <p>
                Facial Recognition website using HTML, CSS, JavaScript, and React. Easily locate and highlight faces in any image URL. Ideal for photographers and researchers. Try it now! Back-end code in "About" section.
              </p>
            </div>
          </div>

          <a href="https://github.com/manuelLanderos/Smart-brain" target="_blank" rel="noreferrer"><button class="bn632-hover bn25">Github</button></a>
          <a href="https://smart-brain-mwde.onrender.com/" target="_blank" rel="noreferrer"><button class="bn633-hover bn25">Website</button></a>

        </Plx>
        <Plx parallaxData={parallaxData}>
          <div className="card">
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="all" glareBorderRadius="20px">
              <h2 className="project-title">RoboFriends</h2>
              <img src="photo2.png" alt="robofriends" />
            </Tilt>
            <div className="project-description">
              <p>RoboFriends - Interactive "Social Media Page" using HTML, CSS, JavaScript, and React. Join now for an exciting digital experience, connecting with ease. Let RoboFriends revolutionize your social interactions!</p>
            </div>
          </div>
          <a href="https://github.com/manuelLanderos/robofriends" target="_blank" rel="noreferrer"><button class="bn632-hover bn25">Github</button></a>
          <a href="https://robo-friends-lwew.onrender.com" target="_blank" rel="noreferrer"><button class="bn633-hover bn25">Website</button></a>
        </Plx>
        <Plx parallaxData={parallaxData}>

          <div className="card">
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="all" glareBorderRadius="20px">
              <h2 className="project-title">To-do List</h2>
              <img src="photo3.png" alt="to do list" />
            </Tilt>
            <div className="project-description">
              <p>A powerful Todo List app built with HTML, CSS, JavaScript, and React!  Easily add, check off, and delete items from your list. Stay organized and on top of your game with this user-friendly interface. </p>
            </div>
          </div>
          <a href="https://github.com/manuelLanderos/ToDo" target="_blank" rel="noreferrer"><button class="bn632-hover bn25">Github</button></a>
          <a href="https://todo-list-ybix.onrender.com/" target="_blank" rel="noreferrer"><button class="bn633-hover bn25">Website</button></a>
        </Plx>
        <Plx parallaxData={parallaxData}>
          <div className="card">
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="all" glareBorderRadius="20px">


              <h2 className="project-title">Manuel Landeros Portfolio</h2>
              <img src="portfolio1.png" alt="smart brain" />
            </Tilt>
            <div className="project-description">
              <p>
                Welcome to my portfolio! Experience my skills in front-end web development using React, HTML, JavaScript, and CSS. Explore engaging projects that showcase impactful user experiences. Get inspired by the possibilities of React and my expertise!
              </p>
            </div>
          </div>
          <a href="https://github.com/manuelLanderos/portfolio" target="_blank" rel="noreferrer"><button class="bn632-hover bn25">Github</button></a>
          <a href="https://manuel-landeros-portfolio.onrender.com" target="_blank" rel="noreferrer"><button class="bn633-hover bn25">Website</button></a>



        </Plx>
      </div>
    </div >






  );
}

export default intro;