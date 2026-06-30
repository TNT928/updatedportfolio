import React from 'react';
import styles from '../CSS/about.module.css';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Column: Image & Brand Element */}
        <div className={styles.imageColumn}>
          <div className={styles.containerImage}>
            {/* Swapped backslash to forward slash for clean web routing */}
            <img
              src="Images/Me_in_hat.jpg"
              alt="Michael VanderLoon"
              className={`${styles.profileImage} animate__animated animate__fadeIn`}
            />
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div
          className={`${styles.textColumn} animate__animated animate__slideInDown`}
        >
          <h1 className={styles.header}>About Me</h1>
          <div className={styles.accentLine} />

          <h3 className={styles.bioText}>
            My name is Michael VanderLoon, and for the past three years I’ve
            been running a YouTube channel focused on movie, TV, and video game
            reviews. That experience is where I developed my foundation in
            storytelling, pacing, and audience engagement through video.
          </h3>

          <h3 className={styles.bioText}>
            I originally started editing in iMovie before moving into Final Cut
            Pro, where I really began to refine my craft and discover my passion
            for using media to tell stories that connect with people. Over time,
            I expanded into Apple Motion to create custom transitions, motion
            graphics, and text animations that elevated my work beyond basic
            editing.
          </h3>
          <h3 className={styles.bioText}>
            Alongside Final Cut Pro and Apple Motion, I’ve built strong
            experience using Adobe Premiere Pro, After Effects, Adobe Audition,
            and Photoshop, allowing me to work across the full post-production
            workflow.
          </h3>

          <h3 className={styles.bioText}>
            Today, I’m focused on applying these skills in a more professional
            capacity through VanderLoon Media, helping businesses, brands, and
            creators bring their ideas to life through high-quality video
            content. My goal is to combine creative storytelling with technical
            execution to produce content that not only looks polished, but also
            helps businesses communicate more clearly and connect more
            effectively with their audience.
          </h3>

          <div className={styles.contactBox}>
            <h4>
              If you are in need of a skilled and dedicated video editor that
              loves using creative energy, feel free to reach out to me at: <a
              href="mailto:vanderloonmedia@gmail.com"
              className={styles.emailLink}
            >
              vanderloon@gmail.com
            </a>
            </h4>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
