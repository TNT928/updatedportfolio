import React, { useState, useEffect } from 'react';
import styles from '../CSS/projects.module.css';
import 'animate.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  const projects = [
      { name: 'Detective Skit', youtubeId: 'd_lPn4BcXEE', builtWith: 'Final Cut Pro' },
      { name: 'After Effects Demo', vimeoId: '1092567274', builtWith: 'Adobe After Effects' },
    { name: 'After Effects Demo', vimeoId: '1100987036', builtWith: 'Adobe After Effects' },
    { name: 'Premiere Pro Preset Transitions', vimeoId: '1093280132', builtWith: 'Adobe Premiere Pro' },
    // { name: 'Custom Titles', vimeoId: '1094691042?h=daea667b00', builtWith: 'Adobe Premiere Pro, After Effects' },
    { name: 'Mobile Demo', vimeoId: '1094691093?h=2d4a960051', builtWith: 'Adobe Premiere Pro, After Effects' },
    { name: 'Tiktok / Youtube Shorts', youtubeId: 'GmiugZnjrTk', builtWith: 'After Effects' },
    { name: 'Tiktok / Youtube Shorts', youtubeId: '2C_jN_Dvbvo', builtWith: 'Adobe Premiere Pro, After Effects' },
    { name: 'Tiktok / Youtube Shorts', youtubeId: 'duptNx1UyRU', builtWith: 'Adobe Premiere Pro, After Effects' },
  
    { name: 'Wolf Lake Park Photography', youtubeId: 'jPz4JbUM-UE', builtWith: 'Final Cut Pro' },
    { name: 'Tiktok / Youtube Shorts', youtubeId: 'NjIQsBgfi2Q', builtWith: 'After Effects' },
    { name: 'After Effects advertisement', vimeoId: '1095566897?h=9325ca1985', builtWith: 'Adobe Premiere Pro, After Effects' },
    { name: 'Final Cut Pro Demo W Voice Over', vimeoId: '1092570276', builtWith: 'Final Cut Pro, Apple Motion' },
    { name: 'Final Cut Pro Demo', vimeoId: '1092573026', builtWith: 'Final Cut Pro, Apple Motion' },
  ];

  useEffect(() => {
    // Gives the iframes 1.5 seconds to claim their layout box dimensions safely
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 💡 Render the loading state if true
  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loaderText}>Loading Production Showroom...</p>
      </div>
    );
  }

  // Once loading is false, render your flawless grid layout
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <header className={`${styles.headerSection} animate__animated animate__fadeIn`}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>A showroom of video editing, motion graphics, and post-production work.</p>
          <div className={styles.accentLine}></div>
        </header>

        <div className={styles.grid}>
          {projects.map((site: any, index: number) => (
            <div 
              key={index} 
              className={`${styles.card} animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className={styles.videoWrapper}>
                {site.vimeoId ? (
                  <iframe
                    className={styles.video}
                    src={`https://player.vimeo.com/video/${site.vimeoId}`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={site.name}
                  />
                ) : (
                  <iframe
                    className={styles.video}
                    src={`https://www.youtube.com/embed/${site.youtubeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={site.name}
                  />
                )}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{site.name}</h3>
                <div className={styles.tagLine}>
                  <span className={styles.tagLabel}>Built Using:</span> {site.builtWith}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;