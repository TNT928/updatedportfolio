import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/services.module.css';

const Services = () => {
  const serviceList = [
    {
      title: "Aerial Footage",
      description: "Drone footage that brings a fresh perspective to your location or production, captured by an FAA Part 107 certified pilot.",
      image: "/Images/services/Screenshot 2026-09-15 at 7.50.02 AM.png",
      position: "50% 50%",
      vertical: false
    },
    {
      title: "Photography",
      description: "Professional branding, business, product, location, and event photography ready for web, print, and social media.",
      image: "/Images/services/IMG_1773.png",
      position: "32% 40%",
      vertical: false
    },
    {
      title: "Social Media Content",
      description: "Vertical videos and coordinated photo-and-video sessions designed to give your business fresh, usable content.",
      image: "/Images/services/Screenshot 2026-09-15 at 8.12.49 AM.png",
      position: "50% 50%",
      vertical: true
    },
    {
      title: "Event Coverage",
      description: "Candid and staged photography or video coverage that captures the people, atmosphere, and important moments.",
      image: "/Images/services/4I3A2350.JPG",
      position: "55% 30%",
      vertical: false
    },
    {
      title: "Editing & Post-Production",
      description: "Video editing, color correction, sound cleanup, titles, and motion graphics that turn raw material into polished work.",
      image: "/Images/services/Screenshot 2026-09-15 at 8.11.46 AM.png",
      position: "50% 50%",
      vertical: false
    },
    {
      title: "Custom Commercial Projects",
      description: "Tailored production plans for businesses and organizations that need a specialized scope or set of deliverables.",
      image: "/Images/services/IMG_0845 touched up.png",
      position: "50% 25%",
      vertical: false
    },
    {
      title: "Real Estate Media",
      description: "Professional property photography, cinematic walkthroughs, aerial footage, and agent-led videos designed to help listings stand out.",
      image: "https://vanderloonmedia.b-cdn.net/Thumbnails/Screenshot%202026-09-03%20at%207.28.43%E2%80%AFAM.png",
      position: "50% 50%",
      vertical: false,
      featured: true
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
            <article key={service.title} className={`${styles.card} ${service.featured ? styles.featuredCard : ''}`}>
              <div className={styles.cardMedia} aria-hidden="true">
                <img
                  src={service.image}
                  alt=""
                  className={service.vertical ? styles.verticalImage : styles.cardImage}
                  style={{ objectPosition: service.position }}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardAccent} aria-hidden="true" />
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDescription}>{service.description}</p>
                <Link to="/contact" className={styles.cardLink} aria-label={`Discuss ${service.title}`}>
                  Let’s talk <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className={`${styles.pricingSection} ${styles.realEstateSection}`} aria-labelledby="custom-production">
          <div className={styles.pricingIntro}>
            <p className={styles.eyebrow}>Custom Production</p>
            <h2 id="custom-production" className={styles.pricingTitle}>Your project deserves more than a preset package.</h2>
            <p className={styles.pricingDescription}>
              Every production is shaped around your audience, goals, filming needs, and final deliverables.
              After a brief conversation, you’ll receive a clear written proposal with a defined scope and fixed project quote.
            </p>
          </div>

          <div className={styles.projectProcess} aria-label="How project pricing works">
            <div className={styles.processStep}>
              <span>01</span>
              <div><h3>Share your vision</h3><p>Tell us what you are creating, who it needs to reach, and where it will be used.</p></div>
            </div>
            <div className={styles.processStep}>
              <span>02</span>
              <div><h3>Receive a clear proposal</h3><p>We define the production scope, deliverables, timeline, and fixed project quote.</p></div>
            </div>
            <div className={styles.processStep}>
              <span>03</span>
              <div><h3>Bring it to life</h3><p>From planning through final delivery, every detail is handled with intention.</p></div>
            </div>
          </div>

          <p className={styles.startingInvestment}>
            Projects begin at <strong>$299</strong>, with most business productions ranging from <strong>$500 to $1,200</strong>.
          </p>
          <p className={styles.pricingNote}>
            Clear scope. No surprise charges. Every proposal outlines the production plan, deliverables, timeline, and investment before work begins.
          </p>
          <Link to="/contact" className={styles.cardLink}>Plan Your Project <span aria-hidden="true">↗</span></Link>
        </section>

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
