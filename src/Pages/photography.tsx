import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/photography.module.css';
import 'animate.css';

const photoCollections: { title: string; description: string; photos: { file: string; alt: string; priority?: boolean; height?: number }[] }[] = [
  {
    title: 'Automotive',
    description: 'Detail-focused images that show off the design, lighting, and personality of every vehicle.',
    photos: [
      { file: 'cars-coffee-lamborghini-pair.jpg', alt: 'Orange and blue-green Lamborghinis displayed at Cars and Coffee with Cops in Davie, Florida', priority: true },
      { file: 'cars-coffee-orange-lamborghini.jpg', alt: 'Front view of a custom orange Lamborghini at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-white-lamborghini.jpg', alt: 'White Lamborghini photographed beneath palm trees at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-matte-black-lamborghini.jpg', alt: 'Matte black Lamborghini Sterrato photographed at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-white-lamborghini-urus.jpg', alt: 'White Lamborghini Urus photographed head-on at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-yellow-lamborghini-urus.jpg', alt: 'Yellow Lamborghini Urus photographed at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-blue-green-lamborghini.jpg', alt: 'Blue and green custom Lamborghini photographed from the rear at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cars-coffee-rolls-royce.jpg', alt: 'Gold and white Rolls-Royce convertible photographed at Cars and Coffee with Cops in Davie, Florida' },
      { file: 'cadillac1.JPG', alt: 'Cadillac LYRIQ front detail photographed at dusk by VanderLoon Media' },
      { file: 'cadillac2.JPG', alt: 'Cadillac LYRIQ automotive photography at dusk by VanderLoon Media' },
      { file: 'IMG_0851.JPG', alt: 'Red luxury car photographed by VanderLoon Media' },
    ],
  },
  {
    title: 'Real Estate & Interiors',
    description: 'Photography that helps a property feel inviting, spacious, and ready to explore.',
    photos: [
      { file: 'real-estate-living-dining.jpg', alt: 'Sunlit open-plan living and dining room' },
      { file: 'real-estate-kitchen.jpg', alt: 'Kitchen with wood-grain cabinets and stainless steel appliances' },
      { file: 'real-estate-bedroom.jpg', alt: 'Bedroom with a wooden headboard and ceiling fan' },
      { file: 'real-estate-bathroom-round-mirror.jpg', alt: 'Bathroom with a round mirror and blue striped shower curtain' },
      { file: 'real-estate-bathroom-window.jpg', alt: 'Bathroom with a white vanity, window, and patterned shower curtain' },
      { file: 'real-estate-living-room.jpg', alt: 'Living room with wide windows and a vaulted ceiling' },
      { file: 'real-estate-dining-room.jpg', alt: 'Wood dining table beside geometric wall decor' },
      { file: 'real-estate-rustic-interior.jpg', alt: 'Rustic wood-paneled interior with pendant lights and round tables' },
      { file: 'real-estate-hotel-atrium.jpg', alt: 'Multi-story hotel atrium with skylights and indoor palms' },
      { file: 'real-estate-covered-porch.jpg', alt: 'Covered front porch with potted plants overlooking a lawn' },
      { file: 'real-estate-home-office.jpg', alt: 'Home office with a desk, ceiling fan, and exercise equipment' },
    ],
  },
  {
    title: 'Drone & Aerial',
    description: 'See how a property sits within its surroundings, from overhead details to wide neighborhood views.',
    photos: [
      { file: 'drone-aerial-21.jpg', alt: 'Wide aerial view of homes surrounding a lake', height: 1200 },
      { file: 'drone-aerial-18.jpg', alt: 'Drone view along a residential street lined with tile-roof homes', height: 1200 },
      { file: 'drone-aerial-20.jpg', alt: 'Overhead view of neighboring homes with bright blue pools', height: 1200 },
      { file: 'drone-aerial-23.jpg', alt: 'Overhead view of a curving street, backyards, and pools', height: 1200 },
      { file: 'drone-aerial-14.jpg', alt: 'Overhead view of a tile-roof home and its fenced backyard', height: 1200 },
      { file: 'drone-aerial-16.jpg', alt: 'Overhead view of red tile roofs and neighboring driveways', height: 1200 },
    ],
  },
  {
    title: 'Portraits & People',
    description: 'Professional headshots and relaxed environmental portraits that help people and personalities stand out.',
    photos: [
      { file: 'profile-headshot-2.jpg', alt: 'Professional studio headshot photographed by VanderLoon Media' },
      { file: 'jabari-park.jpg', alt: 'Outdoor portrait at a South Florida park photographed by VanderLoon Media' },
      { file: 'derek-and-donkey.jpg', alt: 'Lifestyle portrait with a donkey at a South Florida farm photographed by VanderLoon Media' },
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

const photoUrl = (file: string) =>
  '/Images/Photography/web/' + file.replace(/\.[^.]+$/, '.jpg');

const Photography = () => {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const trigger = React.useRef<HTMLButtonElement | null>(null);
  const swipe = React.useRef<{ x: number; y: number } | null>(null);
  const [collection, setCollection] = React.useState(photoCollections[0]);
  const [index, setIndex] = React.useState(0);

  function openGallery(group: typeof collection, photo: number, button: HTMLButtonElement) {
    trigger.current = button;
    setCollection(group);
    setIndex(photo);
    dialog.current?.showModal();
  }

  function move(offset: number) {
    setIndex(current => (current + offset + collection.photos.length) % collection.photos.length);
  }

  const activePhoto = collection.photos[index] ?? collection.photos[0];

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
              <button type="button" className={styles.galleryButton}
                onClick={event => openGallery(collection, 0, event.currentTarget)}>
                View gallery · {collection.photos.length} photos
              </button>
              <p>{collection.description}</p>
            </div>
            <div className={styles.gallery}>
              {collection.photos.slice(0, 3).map((photo, photoIndex) => (
                <figure className={`${styles.glassCard} animate__animated animate__fadeInUp`} key={photo.file}>
                  <button type="button" className={styles.previewButton}
                    aria-label={`Enlarge: ${photo.alt}`}
                    onClick={event => openGallery(collection, photoIndex, event.currentTarget)}>
                  <img
                    src={photoUrl(photo.file)}
                    alt={photo.alt}
                    className={styles.galleryImage}
                    loading={photo.priority ? 'eager' : 'lazy'}
                    decoding="async"
                    width="1600"
                    height={photo.height ?? (photo.file === 'cars-coffee-rolls-royce.jpg' ? 1301 : 1066)}
                  />
                  </button>
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
      <dialog ref={dialog} className={styles.viewer} aria-labelledby="gallery-title"
        onClose={() => trigger.current?.focus({ preventScroll: true })}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}>
        <header className={styles.viewerHeader}>
          <h2 id="gallery-title">{collection.title}</h2>
          <button type="button" autoFocus onClick={() => dialog.current?.close()}>Close ×</button>
        </header>
        <div className={styles.stage}
          onTouchStart={event => {
            const touch = event.touches[0];
            swipe.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
          }}
          onTouchCancel={() => { swipe.current = null; }}
          onTouchEnd={event => {
            const start = swipe.current;
            swipe.current = null;
            if (!start) return;
            const touch = event.changedTouches[0];
            const dx = touch.clientX - start.x;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(touch.clientY - start.y)) {
              move(dx < 0 ? 1 : -1);
            }
          }}>
          <img src={photoUrl(activePhoto.file)} alt={activePhoto.alt} draggable={false} />
          <button type="button" aria-label="Previous photo" onClick={() => move(-1)}>‹</button>
          <button type="button" aria-label="Next photo" onClick={() => move(1)}>›</button>
        </div>
        <p className={styles.counter} aria-live="polite">{index + 1} / {collection.photos.length}</p>
        <div className={styles.thumbnails} aria-label="Gallery thumbnails">
          {collection.photos.map((photo, position) => (
            <button type="button" key={photo.file} aria-label={`Photo ${position + 1}: ${photo.alt}`}
              aria-pressed={position === index} onClick={() => setIndex(position)}>
              <img src={photoUrl(photo.file)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </dialog>
    </main>
  );
};

export default Photography;
