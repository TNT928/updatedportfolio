import React from "react";
import styles from "../CSS/projects.module.css";
import Button from "react-bootstrap/Button";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      name: "Agudah",
      image: "Images/projectImages/agudah.png",
      builtWith: "NextJs, HTML, CSS, Redux",
      link: "https://agudaharchive.org/",
    },
    {
      name: "Lamayim",
      image: "Images/projectImages/lamayim.png",
      builtWith: "Shopify",
      link: "https://lamayim.com/",
    },
    {
      name: "EmiYoshi",
      image: "Images/projectImages/emiyoshi.png",
      builtWith: "ReactJS, HTML, CSS, Zustand",

      link: "https://emiyoshi.com/",
    },
    {
      name: "ThankYouRebbi",
      image: "Images/projectImages/thankyourebbi.png",
      builtWith: "ReactJS, HTML, CSS, Context Api",
      link: "https://thankyourebbi.com/",
    },
    {
      name: "TLC Financing",
      image: "Images/projectImages/TLC.png",
      builtWith: "NextJs, HTML, CSS, Redux",
      link: "https://app.tlcfinancing.com/",
    },
    {
      name: "Marine Elements",
      image: "Images/projectImages/marineelements.png",
      builtWith: "Shopify",

      link: "https://marinelements.com/",
    },
    {
      name: "Model Dinners",
      image: "Images/projectImages/modeldinners.png",
      builtWith: "HTML, CSS, Javascript",
      link: "https://modeldinners.com/",
    },
    {
      name: "Open Roads",
      image: "Images/projectImages/openroad.png",
      builtWith: "Angular, HTML, CSS",
      link: "https://tnt928.github.io/Angular_Final_Project/",
    },
    {
      name: "MK Lashes",
      image: "Images/projectImages/mklashes.png",
      builtWith: "Wordpress",
      link: "https://mk-lashes.com/",
    },
    {
      name: "Memory Game",
      image: "Images/projectImages/memory.png",
      builtWith: "HTML, CSS, Javascript",
      link: "https://tnt928.github.io/MemoryGame/",
    },
   
  ];

  return (
    <div className={styles.wrapper}>
     
      {/* <div className={styles.overlay}> */}
           <h1 style={{textAlign:"center", color:'white', marginTop:'2em'}}>My Projects</h1>
      {/* <h1 style={{textAlign:"center", color:"white", }}>Projects</h1> */}
          <div className={styles.scrollableContainer}>
            {projects.map((site: any) => (
              <div
                className={`${styles.project} animate__animated animate__fadeIn`}
              >
                <h3>{site.name}</h3>
                <img src={site.image} style={{ width: "300px" }} />
                <p>Built Using: {site.builtWith}</p>

                <Button variant="secondary" className={styles.linkBtn}>
                  <a href={site.link} target="_blank" className={styles.link}>
                    See the site
                  </a>
                </Button>
              </div>
            ))}

            
          </div>
        </div>
      // </div>
   
    // <div className={styles.wrapper}>
    //   <div className={styles.overlay}>
    //     <div className={styles.bodyWrapper}>
    //       <div className={styles.container}>
    //         {projects.map((site: any) => (
    //           <div
    //             className={`${styles.project} animate__animated animate__fadeIn`}
    //           >
    //             <h3>{site.name}</h3>
    //             <img src={site.image} style={{ width: "300px" }} />
    //             <p>Built Using: {site.builtWith}</p>

    //             <Button variant="secondary" className={styles.linkBtn}>
    //               <a href={site.link} target="_blank" className={styles.link}>
    //                 See the site
    //               </a>
    //             </Button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
