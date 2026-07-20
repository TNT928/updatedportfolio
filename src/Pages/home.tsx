import React from "react";
import styles from "../CSS/home.module.css";
import "animate.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>

      {/* VIDEO HERO */}
  <div className={styles.videoHero}>
  <video
    className={styles.videoPlayer}
    autoPlay
    muted
    loop
    playsInline
    controls={true}
  >
    <source
      src="https://vanderloonmedia.b-cdn.net/Cadillac%20Broll.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

      {/* TEXT SECTION ONLY */}
      <div className={styles.bodyWrapper}>
        
        <div className={`${styles.leftSide} animate__animated animate__zoomIn`}>
          <h1 className={styles.header}>  <span style={{color:"#D1A551"}} >VanderLoon</span> <span style={{color:"#F2E1C9"}}>Media</span></h1>
          
          <h2 className={styles.subheader}>
            Films | Photography 
          </h2>

          <div className={styles.accentLine}></div>

          <p className={styles.text}>
           VanderLoon Media is a creative production studio focused on video production, editing, motion graphics, and photography. We create engaging visual content for businesses, brands, creators, and organizations, with a focus on clear storytelling and polished execution.

From YouTube content and social media videos to promotional and cinematic-style projects, the goal is to combine strong storytelling with technical precision. We work with industry-standard tools like Adobe Premiere Pro, After Effects, Apple Motion, and Final Cut Pro to bring ideas to life with a clean, professional finish.
          </p>

          {/* <div className={styles.linkContainer}>
            <p className={styles.linkLabel}>Check out my Youtube Channel:</p>
            <a
              href="https://www.youtube.com/@ShowtimeandJoysticks"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeLink}
            >
              🎥 Showtime and Joysticks
            </a>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Home;