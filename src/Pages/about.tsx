import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1 className={styles.header}>About VanderLoon Media</h1>
          <div className={styles.accentLine} />

          <p className={styles.bioText}>
            VanderLoon Media is a South Florida creative production studio focused on professional video production,
            photography, editing, and motion graphics. I help businesses, brands, and creators turn ideas into
            polished visual content that captures attention and tells a clear story.
          </p>

          <p className={styles.bioText}>
            My name is Michael VanderLoon. For the past several years, I have created and produced video content for
            my own entertainment channel, building a strong foundation in storytelling, pacing, audience engagement,
            and on-camera communication. That hands-on experience taught me how to shape a strong idea into content
            people want to watch.
          </p>

          <p className={styles.bioText}>
            Today, I bring that same creative focus to client projects—whether that means showcasing a restaurant,
            filming an event, highlighting a property, capturing an automotive feature, or creating social media
            content for a growing business. Every project is approached with care, from planning and filming through
            editing, color, sound, and final delivery.
          </p>

          <p className={styles.bioText}>
            VanderLoon Media combines creative storytelling with reliable technical execution to create visuals that
            feel professional, purposeful, and true to your brand.
          </p>

          <div className={styles.contactBox}>
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s talk about how we can bring it to life.</p>
            <Link to="/contact" className={styles.contactButton}>Start Your Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
