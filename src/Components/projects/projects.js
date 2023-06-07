import React from 'react'
import './project.css'
// import './photo1.png'
import Tilt from 'react-parallax-tilt'
import Plx from "react-plx";

const parallaxData = [
  {
    start: 'self',
    duration: 1000,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "scale",
      },
    ],
  },

];



function intro() {
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
              <p>This is the facial recognition website! My site provides a simple and easy-to-use sign in page where you can enter your login details and access our amazing image recognition feature. With our image recognition tool, you can input the URL of any image, and our algorithm will locate and highlight the face present within it. This feature is incredibly useful for individuals and organizations that need to sort or categorize images by the faces that appear within them, making it a valuable tool for a wide range of applications. Whether you're a professional photographer, a researcher, or simply someone who wants to organize their personal photo collection, our face recognition feature can help you save time and effort. So why wait? Sign in and start using our site's amazing face recognition feature today!
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
              <p>RoboFriends, the interactive "Social Media Page" where you can search for friends in a unique way! Our friendly bots are here to assist as you experiment with our innovative search engine. Discover profiles by entering names or emails, making connections easier than ever. Experience the seamless responsiveness as you navigate through our platform. RoboFriends combines technology and imagination, creating a captivating digital experience. Join us now and unleash the excitement of exploring, searching, and connecting with ease. Let RoboFriends revolutionize your social interactions and make your online friendships come alive!</p>
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
              <p>This is a simple yet powerful tool that helps you keep track of your daily necessities and ensures you dont forget to do anything important in your daily schedule.  With this app, it prioritizes adding To do items, check them off once completed, and delete them once you dont need them in your list anymore
                <br></br>
                The user-friendly interface allows any user to easily add, mark, and delete your task as needed. Whether you're a busy professional or a student with a hectic schedule, this Todo List page can help you stay organized and on top of your game.</p>
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
              <p>Does this look a little familiar? Its because your experiencing it right now! Here you'll find a showcase of my skills, experience, and projects that I've built from scratch using React, HTML, JavaScript, and CSS. As a passionate web developer with 1 year of experience, specializing in front-end web development, I've honed my skills in creating engaging and user-friendly web applications. Through this website, I aim to demonstrate my proficiency in crafting interactive and visually appealing experiences. From developing the HTML structure to implementing dynamic functionality with JavaScript and enhancing the aesthetics with CSS, every aspect of this portfolio reflects my dedication to delivering high-quality front-end solutions. Explore my projects to see firsthand how I leverage these technologies to create impactful and seamless user experiences. Get inspired by the possibilities that can be achieved through the power of React and my expertise in front-end web development!
              </p>
            </div>
          </div>
          <a href="https://github.com/manuelLanderos/Smart-brain" target="_blank" rel="noreferrer"><button class="bn632-hover bn25">Github</button></a>
          <a href="https://smart-brain-mwde.onrender.com/" target="_blank" rel="noreferrer"><button class="bn633-hover bn25">Website</button></a>



        </Plx>
      </div>
    </div >






  );
}

export default intro;