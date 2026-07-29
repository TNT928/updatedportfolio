import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/services.module.css';

const Services = () => {
  const serviceList = [
    {
      title: "Business Video Production",
      description: "Promotional videos, brand stories, interviews, and commercial content shaped around your message and audience.",
      icon: "🎥"
    },
    {
      title: "Photography",
      description: "Professional branding, business, product, location, and event photography ready for web, print, and social media.",
      icon: "📸"
    },
    {
      title: "Social Media Content",
      description: "Vertical videos and coordinated photo-and-video sessions designed to give your business fresh, usable content.",
      icon: "📱"
    },
    {
      title: "Event Coverage",
      description: "Candid and staged photography or video coverage that captures the people, atmosphere, and important moments.",
      icon: "🎟️"
    },
    {
      title: "Editing & Post-Production",
      description: "Video editing, color correction, sound cleanup, titles, and motion graphics that turn raw material into polished work.",
      icon: "🎬"
    },
    {
      title: "Custom Commercial Projects",
      description: "Tailored production plans for businesses and organizations that need a specialized scope or set of deliverables.",
      icon: "✨"
    }
  ];

  const startingPrices = [
    {
      service: "Photography Sessions",
      price: "$225",
      detail: "Professional edited images for people, products, and brands."
    },
    {
      service: "Event Photography",
      price: "$175/hr",
      detail: "Candid and staged coverage with a two-hour minimum."
    },
    {
      service: "Single Social Video",
      price: "$350",
      detail: "One vertical video up to 30 seconds."
    },
    {
      service: "Business Spotlight",
      price: "$650",
      detail: "A polished promotional video plus a short social cut."
    },
    {
      service: "Photo + Video Content Session",
      price: "$650",
      detail: "A coordinated collection of edited photos and social videos."
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

        <section className={styles.pricingSection} aria-labelledby="starting-prices">
          <div className={styles.pricingIntro}>
            <p className={styles.eyebrow}>Simple Starting Points</p>
            <h2 id="starting-prices" className={styles.pricingTitle}>Professional content, scoped to your goals.</h2>
            <p className={styles.pricingDescription}>
              These starting prices help you plan. Every project receives a written scope and
              custom quote based on production time, location, deliverables, editing,
              licensing, and turnaround.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {startingPrices.map((item) => (
              <article key={item.service} className={styles.pricingCard}>
                <div>
                  <h3>{item.service}</h3>
                  <p>{item.detail}</p>
                </div>
                <div className={styles.priceBlock}>
                  <span>Starting at</span>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.pricingNote}>
            Need something different? Packages can be adjusted to match your priorities and budget.
          </p>
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
