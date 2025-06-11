import React from "react";
import styles from "../CSS/about.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>

        <h1 className={styles.header}>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.containerImage}> 
          <img
            src="Images\black and white me.jpg"
            className={`${styles.profileImage} animate__animated animate__zoomIn`}
          /></div>
          <div className={`${styles.text} animate__animated animate__slideInDown `}>
          <h3 >
          My name is Michael VanderLoon and for the past year and a half I have been running a Youtube channel focused on movie reviews
          tv show reviews and video game reviews. My journey into video editing began with Imovie, and then quickly moved over to Final Cut Pro where I honed my skills and found my love
          for using media to tell a story and connect to people. Eventually I began learning Apple Motion and I used that to create many excellent transitions, effects and text graphics. Now that I 
          feel confident using the Apple side of software I have begun to exploe the Adobe suite. I've transitioned my youtube channel to use Adobe Premiere Pro, After Effects and I even use Photoshop to create my thumbnails. 
          </h3><br></br>
          <h4>If you are in need of a skilled and dedicated video editor that loves using his creative energy than feel free to reach out to me at jenkins92886@gmail.com</h4>
          </div>
         
        </div>
      </div>

  );
};

export default About;
