import React from "react";
import styles from "../CSS/home.module.css";
import "animate.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        
        {/* Left Column: Text & Branding Info */}
        <div className={`${styles.leftSide} animate__animated animate__zoomIn`}>
          <h1 className={styles.header}>Michael VanderLoon</h1>
          <h2 className={styles.subheader}>Video Editor & Content Creator</h2>
          <div className={styles.accentLine}></div>
          
          <p className={styles.text}>
            I’m a creative video editor and motion designer with a passion for storytelling, 
            pacing, and polished visuals. I specialize in editing engaging content for YouTube, 
            social media, branded campaigns, and cinematic pieces using Adobe Premiere Pro, 
            After Effects, Apple Motion, and Final Cut Pro.
          </p>
          
          <div className={styles.linkContainer}>
            <p className={styles.linkLabel}>Check out my content portfolio:</p>
            <a 
              href="https://www.youtube.com/@ShowtimeandJoysticks" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.youtubeLink}
            >
              🎥 Showtime and Joysticks
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className={styles.rightSide}>
          <div className={styles.imageFrame}>
            {/* Standardized path with forward slashes */}
            <img
              src="Images/Me_in_hat.jpg"
              alt="Michael VanderLoon"
              className={`${styles.profileImage} animate__animated animate__fadeIn`}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;