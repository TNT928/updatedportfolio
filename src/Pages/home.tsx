import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/home.module.css";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (preference.matches) videoRef.current?.pause();
      else videoRef.current?.play().catch(() => setPlaying(false));
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.hero} aria-labelledby="home-heading">
        <video
          ref={videoRef}
          className={styles.video}
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://vanderloonmedia.b-cdn.net/Thumbnails/Drone%20Demo%20Thumbnail.png"
          aria-hidden="true"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setPlaying(false)}
        >
          <source src="https://vanderloonmedia.b-cdn.net/Website%20video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Fort Lauderdale · South Florida</p>
          <h1 id="home-heading" className={styles.header}>
            <span>VanderLoon</span> Media
          </h1>
          <p className={styles.subheader}>Films | Photography</p>
          <p className={styles.heroText}>
            Photography and video that bring your business, your people, and your story into focus.
          </p>
          <div className={styles.ctaGroup}>
            <Link to="/projects" className={styles.primaryCta}>Watch Our Work</Link>
            <Link to="/contact" className={styles.secondaryCta}>Start Your Project</Link>
          </div>
        </div>
        <button type="button" className={styles.playback} onClick={togglePlayback}
          aria-label={playing ? "Pause background video" : "Play background video"}>
          {playing ? "Ⅱ Pause video" : "▷ Play video"}
        </button>
      </section>
      <section className={styles.intro} aria-label="About VanderLoon Media">
        <p className={styles.certificationBadge}>✦ FAA Part 107 Certified Drone Pilot</p>
        <p>
          VanderLoon Media is a Fort Lauderdale–based photography and video production company serving businesses, organizations, and individuals throughout South Florida. From promotional content and event coverage to portraits, products, properties, and the people behind a brand, we create polished visuals that feel true to each story.
        </p>
        <p>
          Whether you need a single photo session or a complete video project, we take the time to understand your goals and create content that connects with your audience.
        </p>
        <Link to="/services" className={styles.servicesLink}>Explore Our Services →</Link>
      </section>
    </main>
  );
};

export default Home;
