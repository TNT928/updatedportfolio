import React, { useState, useEffect } from 'react';
import styles from '../CSS/photography.module.css';
import 'animate.css';

const Photography = () => {
  const [loading, setLoading] = useState(true);

  // 1. Define your array of images here. Swap out these placeholders with your actual image links.
//   const photos = [
//     {
//       id: 1,
//       name: "Urban Exploration",
//       category: "Street Photography",
//       imageUrl: "https://via.placeholder.com/600x400", // Replace with your image link
//     },
//     {
//       id: 2,
//       name: "Golden Hour",
//       category: "Landscape",
//       imageUrl: "https://via.placeholder.com/600x400", // Replace with your image link
//     },
//     {
//       id: 3,
//       name: "Neon Nights",
//       category: "Cyberpunk / City",
//       imageUrl: "https://via.placeholder.com/600x400", // Replace with your image link
//     },
//     {
//       id: 4,
//       name: "Minimalist Architecture",
//       category: "Abstract",
//       imageUrl: "https://via.placeholder.com/600x400", // Replace with your image link
//     }
//   ];

  const photos = [
  '/Images/Photography/cadillac1.JPG',
  '/Images/Photography/cadillac2.JPG',
  '/Images/Photography/IMG_0734.JPG',
  '/Images/Photography/IMG_0764.JPG',
  '/Images/Photography/IMG_0818.JPG',
  '/Images/Photography/IMG_0830.JPG',
  '/Images/Photography/IMG_0834.png',
  '/Images/Photography/IMG_0840.JPG',
  '/Images/Photography/IMG_0851.JPG',
  '/Images/Photography/IMG_0865.JPG',
  '/Images/Photography/IMG_0869.JPG',
  '/Images/Photography/IMG_0895.JPG',
  '/Images/Photography/IMG_0900.JPG',
  'Images/Photography/IMG_0991.JPG',
  'Images/Photography/IMG_1021.JPG',
  'Images/Photography/IMG_1346.JPG',
  'Images/Photography/IMG_1349.JPG',
  'Images/Photography/IMG_1374.JPG',
  'Images/Photography/IMG_1745.JPG',
  'Images/Photography/IMG_1750.JPG'

];

  useEffect(() => {
    // Gives the images a moment to handle initial layout safely
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Render the loading state if true
  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loaderText}>Loading Gallery ...</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <header className={`${styles.headerSection} animate__animated animate__fadeIn`}>
          <h1 className={styles.title}>Photography</h1>
          <p className={styles.subtitle}>A curated showcase of captured moments and visual storytelling.</p>
          <div className={styles.accentLine}></div>
        </header>

        {/* The Gallery Grid */}
     <div className={styles.grid}>
  {photos.map((photo, index) => (
    <div
      key={index}
      className={`${styles.glassCard} animate__animated animate__fadeInUp`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={photo}
          alt={`VanderLoon Media photography portfolio item ${index + 1}`}
          className={styles.galleryImage}
          loading="lazy"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Photography;
