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
              src="Images/Modified Cartoon.png"
              alt="Michael VanderLoon Cartoon Avatar"
              className={`${styles.profileImage} animate__animated animate__zoomIn`}
            />
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div className={`${styles.textColumn} animate__animated animate__slideInDown`}>
          <h1 className={styles.header}>About Me</h1>
          <div className={styles.accentLine}></div>
          
          <h3 className={styles.bioText}>
            My name is Michael VanderLoon and for the past 3 years I
            have been running a YouTube channel focused on movie reviews, TV show
            reviews, and video game reviews. My journey into video editing began
            with iMovie, and then quickly moved over to Final Cut Pro where I
            honed my skills and found my love for using media to tell a story
            and connect with people. 
          </h3>
          
          <h3 className={styles.bioText}>
            Eventually, I began learning Apple Motion and I used that to create 
            excellent transitions, effects, and text graphics. In addition to my skills 
            with Final Cut Pro and Apple Motion, I am also highly experienced with 
            Adobe Premiere Pro, Adobe After Effects, Adobe Audition, and Photoshop.
          </h3>
          
          <div className={styles.contactBox}>
            <h4>
              If you are in need of a skilled and dedicated video editor that
              loves using his creative energy, feel free to reach out to me at:
            </h4>
            <a href='mailto:showtimeandjoysticks@gmail.com' className={styles.emailLink}>
              showtimeandjoysticks@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;