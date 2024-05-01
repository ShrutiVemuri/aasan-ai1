import React from 'react'

import './About.css'

export default function About() {
    return (
        
                       
        
        <div className="about-container">

            

            
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                {/* <p className="about-content">
                    Yoga has been the way of life for centuries. By building Urban Yogi we have built a Yoga trainer website where learners can select the pose that they intend to do and then our unique pose detection and pose correction software shall help them navigate their learning experience.
                    This is an open source project by a bunch of third year students.
                </p> */}
                <p className="about-content">
          AasanAI is users' personal Yoga AI trainer which is an AI based web
          application that detects yoga poses in real time. This is a virtual
          yoga trainer that monitors user's posture using Tensorflow. It detects
          user's Yogasana position and helps them perfect their posture by
          giving virtual feedback. It uses a Movenet Model for classification of
          the yoga pose by detecting key points of the various body parts.
        </p>
        <p className="about-content">
          User can choose from different asanas provided by the web app. AasanAI
          provides timer for each aasana to keep track of current and best time
          that gradually helps user to progress in workout.
        </p>
                {/* <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
                        I love to work with technology and love to share on my youtube channel, 
                        I hope this project will help you. 
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
                    <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
                    <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a>
                </div> */}
            </div>
        </div>
    )
}
