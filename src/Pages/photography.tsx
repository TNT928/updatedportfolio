import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/photography.module.css';
import 'animate.css';

const photoCollections = [
  {
    title: 'Automotive',
    description: 'Detail-focused images that show off the design, lighting, and personality of every vehicle.',
    photos: [
      { file: 'cadillac1.JPG', alt: 'Cadillac LYRIQ front detail photographed at dusk by VanderLoon Media', priority: true },
      { file: 'cadillac2.JPG', alt: 'Cadillac LYRIQ automotive photography at dusk by VanderLoon Media' },
      { file: 'IMG_0851.JPG', alt: 'Red luxury car photographed by VanderLoon Media' },
    ],
  },
  {
    title: 'Real Estate & Interiors',
    description: 'Photography that helps a property feel inviting, spacious, and ready to explore.',
    photos: [
      { file: 'IMG_1346.JPG', alt: 'Bright living room interior photographed by VanderLoon Media' },
      { file: 'IMG_1349.JPG', alt: 'Modern living room and entertainment area photographed by VanderLoon Media' },
    ],
  },
  {
    title: 'Food & Hospitality',
    description: 'Close-up details and atmosphere that make food, drinks, and a space feel worth visiting.',
    photos: [
      { file: 'IMG_0834.png', alt: 'Wine bottle display photographed by VanderLoon Media' },
      { file: 'IMG_0840.JPG', alt: 'Fresh pastry display photographed by VanderLoon Media' },
      { file: 'IMG_1021.JPG', alt: 'Glass soda bottle and drink product photography by VanderLoon Media' },
    ],
  },
  {
    title: 'Lifestyle & Nature',
    description: 'A collection of natural details, outdoor scenes, and everyday moments captured with a cinematic eye.',
    photos: [
      { file: 'IMG_0734.JPG', alt: 'Weathered tree root detail photographed by VanderLoon Media' },
      { file: 'IMG_0764.JPG', alt: 'Tree bark texture photographed by VanderLoon Media' },
      { file: 'IMG_0818.JPG', alt: 'Palm tree against a bright blue sky photographed by VanderLoon Media' },
      { file: 'IMG_0830.JPG', alt: 'Outdoor sculpture and garden scene photographed by VanderLoon Media' },
      { file: 'IMG_0865.JPG', alt: 'Ocean shoreline and clouds photographed by VanderLoon Media' },
      { file: 'IMG_0869.JPG', alt: 'Close-up tree bark texture photographed by VanderLoon Media' },
      { file: 'IMG_0895.JPG', alt: 'Twisting tree roots photographed by VanderLoon Media' },
      { file: 'IMG_0900.JPG', alt: 'Tree trunk detail photographed by VanderLoon Media' },
      { file: 'IMG_0991.JPG', alt: 'Decorative gold sculpture photographed by VanderLoon Media' },
      { file: 'IMG_1374.JPG', alt: 'Indoor plant detail photographed by VanderLoon Media' },
      { file: 'IMG_1745.JPG', alt: 'Open grassy landscape photographed by VanderLoon Media' },
      { file: 'IMG_1750.JPG', alt: 'Wild grass and outdoor scene photographed by VanderLoon Media' },
    ],
  },
];

const Photography = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <header className={`${styles.headerSection} animate__animated animate__fadeIn`}>
          <h1 className={styles.title}>Photography Portfolio</h1>
          <p className={styles.subtitle}>
            Professional photography for South Florida automotive, real estate, hospitality, and lifestyle projects.
          </p>
          <div className={styles.accentLine}></div>
        </header>

        {photoCollections.map((collection) => (
          <section className={styles.photoSection} key={collection.title}>
            <div className={styles.sectionHeading}>
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
            </div>
            <div className={styles.gallery}>
              {collection.photos.map((photo) => (
                <figure className={`${styles.glassCard} animate__animated animate__fadeInUp`} key={photo.file}>
                  <img
                    src={`/Images/Photography/${photo.file}`}
                    alt={photo.alt}
                    className={styles.galleryImage}
                    loading={photo.priority ? 'eager' : 'lazy'}
                  />
                </figure>
              ))}
            </div>
          </section>
        ))}

        <section className={styles.ctaSection}>
          <h2>Need photography for your next project?</h2>
          <p>Let&apos;s create images that help your business, property, product, or event stand out.</p>
          <Link to="/contact" className={styles.ctaButton}>Start Your Project</Link>
        </section>
      </div>
    </main>
  );
};

export default Photography;
