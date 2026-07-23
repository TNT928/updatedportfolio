import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/projects.module.css';
import 'animate.css';

const bunny = 'https://vanderloonmedia.b-cdn.net/';

const projects = [
  {
    name: 'ArtsPark At Young Circle',
    category: 'Lifestyle · Travel',
    description: 'A cinematic tour of ArtsPark designed to make the audience feel as though they are walking through themselves.',
    file: 'ArtsPark%20at%20Young%20Cicrle.mp4',
    poster: 'Thumbnails/ArtsPark.png',
    orientation: 'portrait',
  },
  {
    name: 'Cadillac LYRIQ Showcase',
    category: 'Automotive',
    description: 'I put this together to show off the LYRIQ’s sleek details, lighting, and movement in a cinematic way.',
    file: 'Cadillac%20Broll.mp4',
    poster: 'Thumbnails/cadillac-broll.png',
  },
  {
    name: 'Real Estate Demo',
    category: 'Real Estate',
    description: 'A real estate demo showing how I would highlight a home’s space, light, and best features on video.',
    file: 'Real%20Estate%20Demo.mp4',
    poster: 'Thumbnails/real-estate-demo.png',
  },
  {
    name: 'Cadillac Social Reel',
    category: 'Automotive · Social Media',
    description: 'A vertical version of the Cadillac video made to feel right at home on Instagram, Facebook, or TikTok.',
    file: 'Cadillac%20Vertical.mp4',
    poster: 'Thumbnails/cadillac-demo-mobile.png',
    orientation: 'portrait',
  },
  {
    name: 'Birthday Event Highlight',
    category: 'Events',
    description: 'A birthday highlight focused on the fun moments, the people, and the energy of the day.',
    file: 'Silas%20Birthday.mp4',
    poster: 'Thumbnails/birthday-demo.png',
  },
  {
    name: 'Morikami Japanese Garden',
    category: 'Lifestyle · Travel',
    description: 'A cinematic look at Morikami Japanese Garden, built around the atmosphere, scenery, and small details.',
    file: 'Morikami%20Japanese%20Garden.mp4',
    poster: 'Thumbnails/morikami-garden.png',
  },
  {
    name: 'Wolf Lake Park Social Reel',
    category: 'Social Media',
    description: 'A quick vertical outdoor reel showing how a simple location can feel more cinematic in a short social video.',
    file: 'Wolf%20Lake%20Park%20Mobile.mp4',
    poster: 'Thumbnails/wolf-lake-park.png',
    orientation: 'portrait',
  },
  
  {
    name: 'Mobile Social Media Demo',
    category: 'Social Media · Motion Graphics',
    description: 'A short-form video demo showing my editing style, pacing, and use of visual effects for social content.',
    file: 'Mobile%20Demo.mp4',
    poster: 'Thumbnails/mobile-landscape.png',
  },
  {
    name: 'Custom Title Demo',
    category: 'Motion Graphics',
    description: 'A quick example of the custom titles, animated text, and transitions I can add to make a video feel more polished.',
    file: 'Custom%20Title%20Demo.mp4',
    poster: 'Thumbnails/custom-title.png',
  },
  {
    name: 'After Effects Demo',
    category: 'Motion Graphics',
    description: 'A motion graphics demo showing some of the animation, compositing, and visual effects work I enjoy creating.',
    file: 'After%20Effects%20Demo%20.mp4',
    poster: 'Thumbnails/after-effects-demo.png',
  },
];

const Projects = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <header className={`${styles.headerSection} animate__animated animate__fadeIn`}>
          <h1 className={styles.title}>Video Production Portfolio</h1>
          <p className={styles.subtitle}>
            A selection of automotive, real estate, event, social media, and motion graphics work.
          </p>
          <div className={styles.accentLine}></div>
        </header>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`${styles.card} ${project.orientation === 'portrait' ? styles.portraitCard : ''} animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  controls
                  preload="metadata"
                  playsInline
                  poster={`${bunny}${project.poster}`}
                >
                  <source src={`${bunny}${project.file}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.category}>{project.category}</p>
                <h2 className={styles.cardTitle}>{project.name}</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.ctaSection}>
          <h2>Have a project in mind?</h2>
          <p>Let&apos;s create visuals that help your business, brand, or event stand out.</p>
          <Link to="/contact" className={styles.ctaButton}>Start Your Project</Link>
        </section>
      </div>
    </main>
  );
};

export default Projects;
