import React from "react";
import styles from "../CSS/home.module.css";
import "animate.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>

      {/* VIDEO HERO */}
      <div className={styles.videoHero}>
        <iframe
  className={styles.videoPlayer}
  src="https://www.youtube.com/embed/Z6k8_UN6er0?autoplay=1&mute=1"
  title="Demo Reel"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/><div className={styles.videoHero}>
  
</div>
      </div>

      {/* TEXT SECTION ONLY */}
      <div className={styles.bodyWrapper}>
        
        <div className={`${styles.leftSide} animate__animated animate__zoomIn`}>
          <h1 className={styles.header}>Michael VanderLoon</h1>
          
          <h2 className={styles.subheader}>
            Video Editor | Content Creator | Photographer | Videographer
          </h2>

          <div className={styles.accentLine}></div>

          <p className={styles.text}>
            I’m a creative video editor, motion designer, photographer and videographer with a passion for storytelling, 
            pacing, and polished visuals. I specialize in editing engaging content for YouTube, 
            social media, branded campaigns, and cinematic pieces using Adobe Premiere Pro, 
            After Effects, Apple Motion, and Final Cut Pro.
          </p>

          <div className={styles.linkContainer}>
            <p className={styles.linkLabel}>Check out my Youtube Channel:</p>
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

      </div>
    </div>
  );
};

export default Home;