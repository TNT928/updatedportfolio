import React from "react";
import styles from "../CSS/home.module.css";

const Home = () => {
  return (
 
      <div className={styles.bodyWrapper}>
        <div className={styles.rightSide}>
          <h1>Michael VanderLoon</h1>
          <h3 >Video Editor</h3>
          <h3 style={{textAlign:"center"}} className={styles.text}>
           I’m a creative video editor and motion designer with a passion for storytelling, pacing, and polished visuals. I specialize in editing engaging content for YouTube, social media, branded campaigns, and cinematic pieces using Adobe Premiere Pro, After Effects, Apple Motion and Final Cut Pro.
          </h3>
          <h3>To see my youtube channel please visit this link <br></br><a href="http://www.youtube.com/@ShowtimeandJoysticks">Showtime and Joysticks</a></h3>
        </div>
        <div className={styles.leftSide}>
          <img
            src="Images\Me_in_hat.jpg"
          
            className={`${styles.profileImage} animate__animated animate__fadeIn`}
          />
        </div>
      </div>
    
  );
};

export default Home;
