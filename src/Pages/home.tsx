import React from "react";
import styles from "../CSS/home.module.css";

const Home = () => {
  return (
  
    <div className={styles.wrapper}>
          <div className={styles.overlay}>
      <div className={styles.bodyWrapper}>
        <div className={styles.rightSide}>
          <h1>Hello I'm Michael VanderLoon</h1>
          <h3>A Web Developer</h3>
          <h3 style={{textAlign:"center"}}>
            I am an hard working fullstack web developer with a focus on the frontend using <span style={{fontWeight:"bold", color:"red"}}>React</span>,
            skillfully crafting dynamic and visually appealing web sites
            that seamlessly integrate functionality.
          </h3>
        </div>
        <div className={styles.leftSide}>
          <img
            src="Images\Michael_Vanderloon_2.jpg"
          
            className={`${styles.profileImage} animate__animated animate__fadeIn`}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
