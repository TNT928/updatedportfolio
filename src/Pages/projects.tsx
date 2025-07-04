import React from 'react';
import styles from '../CSS/projects.module.css';
import Button from 'react-bootstrap/Button';
import 'animate.css';

const Projects = () => {
  const projects = [
    {
      name: 'After Effects Demo',
      vimeoId: '1092567274',
      builtWith: 'Adobe After Effects'
    },
    {
      name: 'Premiere Pro Preset Transitions',
      vimeoId: '1093280132',
      builtWith: 'Adobe Premiere Pro'
    },
    {
      name: 'Custom Titles',
      vimeoId: '1094691042?h=daea667b00',
      builtWith: 'Adobe Premiere Pro, After Effects'
    },
    {
      name: 'Mobile Demo',
      vimeoId: '1094691093?h=2d4a960051',
      builtWith: 'Adobe Premiere Pro, After Effects'
    },
    {
      name: 'Tiktok / Youtube Shorts',
      youtubeId: 'GmiugZnjrTk',
      builtWith: 'After Effects'
    },
    {
      name: 'Tiktok / Youtube Shorts',
      youtubeId: '2C_jN_Dvbvo',
      builtWith: 'Adobe Premiere Pro, After Effects'
    },
    {
      name: 'Tiktok / Youtube Shorts',
      youtubeId: 'NjIQsBgfi2Q',
      builtWith: 'After Effects'
    },
    {
      name: 'After Effects advertisement',
      vimeoId: '1095566897?h=9325ca1985',
      builtWith: 'Adobe Premiere Pro, After Effects'
    },
    {
      name: 'Final Cut Pro Demo W Voice Over',
      vimeoId: '1092570276',
      builtWith: 'Final Cut Pro, Apple Motion'
    },
    {
      name: 'Final Cut Pro Demo',
      vimeoId: '1092573026',
      builtWith: 'Final Cut Pro, Apple Motion'
    },
    
    
  ];

  return (
    <div className={styles.wrapper}>
      <h1 style={{textAlign: 'center', color: 'white', marginBottom: '1em', paddingBottom:'1em'}} className={styles.header}>
        My Projects
      </h1>

      <div className={styles.scrollableContainer}>
        {projects.map((site: any) =>
          <div
            className={`${styles.project} animate__animated animate__rollIn`}
          >
            <h3>
              {site.name}
            </h3>
           { site.vimeoId ? <iframe
              className={styles.video}
              src={`https://player.vimeo.com/video/${site.vimeoId}`}
              // width="640"
              // height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            /> : <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${site.youtubeId}`}
              width="300"
              // height="360"
              frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            title="YouTube video player" 
            />
            
            }
            <p>
              Built Using: {site.builtWith}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
