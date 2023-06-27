import React from "react";
import styles from "../CSS/about.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>

        <h1 className={styles.header}>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.containerImage}> 
          <img
            src="Images\IMG_7844.jpg"
            className={`${styles.profileImage} animate__animated animate__zoomIn`}
          /></div>
          <div className={`${styles.text} animate__animated animate__slideInDown `}>
          <p >
            My name is Michael VanderLoon and I'm a front end web developer who
            grew up in Michigan but recently relocated to nice and warm south
            Florida. I've been a fan of computers all my life and after many
            years persuing things that didn't truly interest me, I decided it
            was time to go for something that did. I discovered web development
            at the beginning of 2019 through the website Udemy and since then
            I've not only attented 3 classes on there, but also attented a
            part-time in person bootcamp that lasted 6 months. Grand Circus,
            located in Grand Rapids, Michigan is a bootcamp that got it's start
            in Detroit before expanding and opening a second location. Their
            focus is on getting students ready for the work force, by putting
            them through an intense and informative 3 - 6 month training. It was
            a blast and not only did I learn alot but I made friends and learned
            how to work on a team. Since graduating I have been spending my time
            working on perfecting my craft and continuing to expand my knowledge
            at a company called 3Nom, who took a chance on me when no one else
            would.
          </p>
          </div>
         
        </div>
      </div>

  );
};

export default About;
