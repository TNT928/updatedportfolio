import React from "react";
import styles from "../CSS/projects.module.css";
import Button from "react-bootstrap/Button";
import "animate.css";

const Projects = () => {
  const projects = [
  {
    name: "After Effects Demo",
    vimeoId: "1092567274",
    builtWith: "Adobe After Effects",
  },
  {
    name: "Final Cut Pro",
    vimeoId: "1092570276",
    builtWith: "Final Cut Pro, Apple Motion",
  },
  {
    name: "Final Cut Pro",
    vimeoId: "1092573026",
    builtWith: "Final Cut Pro, Apple Motion",
  },
];

  return (
    <div className={styles.wrapper}>
     
 
           <h1 style={{textAlign:"center", color:'white', marginTop:'2em'}}>My Projects</h1>
      
          <div className={styles.scrollableContainer}>
            {projects.map((site: any) => (
              <div
                className={`${styles.project} animate__animated animate__fadeIn`}
              >
                <h3>{site.name}</h3>
                <iframe
  src={`https://player.vimeo.com/video/${site.vimeoId}`}
  width="640"
  height="360"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="Vimeo Video"
/>
                <p>Built Using: {site.builtWith}</p>

            
              </div>
            ))}

            
          </div>
        </div>
 
  );
};

export default Projects;
