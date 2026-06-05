import React from 'react';
import styles from '../CSS/services.module.css';

const Services = () => {
  const serviceList = [
    {
      title: "Videography",
      description: "Professional high-definition camera operations, framing, and movement tailored for cinematic look and commercial content.",
      icon: "🎥"
    },
    {
      title: "Lighting Design",
      description: "Crafting atmospheric lighting to shape depth and mood on set.",
      icon: "💡"
    },
    {
      title: "Sound & Audio Editing",
      description: "Crisp dialogue leveling, background noise cleanup, EQ, and getting your microphone dialed in perfectly.",
      icon: "🎙️"
    },
    {
      title: "Video Editing",
      description: "Finding the right pacing and assembly to turn messy raw footage into a polished, compelling video.",
      icon: "🎬"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic lower thirds, animated overlays, titles, and clean transitions that enhance visual branding.",
      icon: "✨"
    },
    {
      title: "On-Camera Talent",
      description: "Confident host, reviewer, or presenter capabilities with natural delivery, timing, and direct-to-lens engagement.",
      icon: "🗣️"
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={`${styles.headerSection} animate__animated animate__slideInDown`}>
          <h1 className={styles.title}>Services Offered</h1>
          <p className={styles.subtitle}>From pre-production to the final cut—bringing visual stories to life.</p>
          <div className={styles.accentLine}></div>
        </header>

        {/* Services Grid */}
        <div className={styles.grid}>
          {serviceList.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;