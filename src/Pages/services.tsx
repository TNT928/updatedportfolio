import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1 className={styles.title}>Video Production &amp; Photography Services</h1>
          <p className={styles.subtitle}>From pre-production to the final cut—bringing visual stories to life across South Florida.</p>
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

        <section className={styles.industriesSection}>
          <div className={styles.industriesContent}>
            <p className={styles.eyebrow}>Industries We Serve</p>
            <h2 className={styles.industriesTitle}>Visual content built around your business.</h2>
            <p className={styles.industriesDescription}>
              VanderLoon Media creates polished video and photography for businesses,
              brands, and occasions that deserve to stand out. Whether you are promoting
              a space, an experience, a product, or a milestone, we tailor the production
              to your goals and the audience you want to reach.
            </p>
            <p className={styles.locationCopy}>
              Serving Fort Lauderdale, Miami, Boca Raton, and businesses throughout South Florida.
            </p>
          </div>
          <div className={styles.industryList}>
            <span>Weddings &amp; Events</span>
            <span>Restaurants &amp; Hospitality</span>
            <span>Real Estate</span>
            <span>Automotive</span>
            <span>Small Businesses &amp; Brands</span>
            <span>Creators &amp; Personal Brands</span>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s talk about the visuals your business, brand, or event needs.</p>
          <Link to="/contact" className={styles.ctaButton}>Start Your Project</Link>
        </section>

      </div>
    </div>
  );
};

export default Services;
