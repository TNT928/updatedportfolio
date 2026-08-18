import React from "react";
import { Link } from "react-router-dom";
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
    poster="https://vanderloonmedia.b-cdn.net/Thumbnails/Screenshot%202026-08-18%20at%2012.22.40%E2%80%AFPM.png"
  >
    <source
      src="https://vanderloonmedia.b-cdn.net/Long%20Key%20Nature%20Center.mp4"
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
            VanderLoon Media is a Fort Lauderdale–based photography and video production company serving businesses, organizations, and individuals throughout South Florida. From promotional content and event coverage to portraits, products, properties, and the people behind a brand, we create polished visuals that feel true to each story.

            Whether you need a single photo session or a complete video project, we take the time to understand your goals and create content that connects with your audience.
          </p>

          <div className={styles.ctaGroup}>
            <Link to="/services" className={styles.primaryCta}>View Services</Link>
            <Link to="/contact" className={styles.secondaryCta}>Start Your Project</Link>
          </div>

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
