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
    }
  ];

  const startingPrices = [
    {
      service: "Brand & Portrait Photography",
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
      price: "$299",
      detail: "Includes one hour of filming and one vertical video up to 1 minute."
    },
    {
      service: "Business Spotlight",
      price: "$499",
      detail: "A polished promotional video plus a short social cut."
    },
    {
      service: "Photo + Video Content Session",
      price: "$589",
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
            <article key={service.title} className={styles.card}>
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

        <section className={`${styles.pricingSection} ${styles.realEstateSection}`} aria-labelledby="starting-prices">
          <div className={styles.pricingIntro}>
            <p className={styles.eyebrow}>Simple Starting Points</p>
            <h2 id="starting-prices" className={styles.pricingTitle}>Professional content, scoped to your goals.</h2>
            <p className={styles.pricingDescription}>
              These starting prices help you plan. Every project receives a written scope and
              custom quote based on production time, location, deliverables, editing,
              licensing, and turnaround.
            </p>
          </div>

          <div className={styles.realEstateGrid}>
            {startingPrices.map((item) => (
              <article key={item.service} className={styles.realEstateCard}>
                <h3>{item.service}</h3>
                <div className={styles.realEstatePrice}>
                  <span>Starting at</span>
                  <strong>{item.price}</strong>
                </div>
                <ul><li>{item.detail}</li></ul>
              </article>
            ))}
            <article className={styles.realEstateCard} aria-labelledby="drone-add-on">
              <h3 id="drone-add-on">Add Aerial Footage</h3>
              <div className={styles.realEstatePrice}>
                <span>Introductory add-on</span>
                <strong>$50</strong>
              </div>
              <ul>
                <li>A few aerial shots added to your video package at the same location during your scheduled shoot.</li>
                <li>Captured by an FAA Part 107 certified drone pilot.</li>
                <li>Subject to weather and airspace restrictions. Separate drone sessions quoted individually.</li>
              </ul>
            </article>
          </div>

          <p className={styles.pricingNote}>
            Need something different? Packages can be adjusted to match your priorities and budget.
          </p>
          <div className={styles.pricingDivider} />
          <div className={styles.pricingIntro}>
            <p className={styles.eyebrow}>Real Estate Photography &amp; Video</p>
            <h2 id="real-estate-prices" className={styles.pricingTitle}>Show the property. Tell its story.</h2>
            <p className={styles.pricingDescription}>
              Listing media packages for South Florida properties, with options for aerial footage,
              an on-camera agent presentation, and professional photography.
            </p>
          </div>
          <div className={styles.realEstateGrid}>
            {[
              { title: 'Property Photography', price: '$199', items: ['Up to 25 professionally edited interior and exterior photos', 'Properties up to 2,000 square feet; larger properties quoted separately', 'Drone photography available as a $50 same-visit add-on'] },
              { title: 'Property Showcase', price: '$249', items: ['Interior and exterior property footage', 'Professionally edited listing video'] },
              { title: 'Property Showcase + Aerial', price: '$299', items: ['Everything in Property Showcase', 'Drone footage captured during the same shoot'] },
              { title: 'Agent Showcase', price: '$399', items: ['Interior, exterior, and drone footage', 'Agent on camera with audio', 'Professionally edited listing video'] },
              { title: 'Premium Showcase', price: '$499', items: ['Interior, exterior, and drone footage', 'Agent on camera with audio', 'Professionally edited listing video', 'Up to 25 professionally edited property photos (up to 2,000 square feet; larger properties quoted separately)'] }
            ].map((item) => (
              <article key={item.title} className={styles.realEstateCard}>
                <h3>{item.title}</h3>
                <div className={styles.realEstatePrice}><span>Starting at</span><strong>{item.price}</strong></div>
                <ul>{item.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
            <article className={styles.realEstateCard}>
              <h3>Drone Photography</h3>
              <div className={styles.realEstatePrice}>
                <span>Same-visit add-on</span><strong>$50</strong>
                <span>Standalone visit starting at</span><strong>$149</strong>
              </div>
              <ul>
                <li>5–8 professionally edited aerial photos of one property.</li>
                <li>Add-on applies to the same property during your scheduled shoot.</li>
                <li>Standalone visits within our normal service area; additional travel quoted separately.</li>
                <li>Subject to weather and airspace restrictions.</li>
              </ul>
            </article>
          </div>
          <p className={styles.pricingNote}>
            Professional photos are included in Premium Showcase. Final pricing depends on property size, location,
            and production scope. Video length, format, revisions, and delivery timing are
            confirmed in your written quote. Aerial footage is subject to weather and airspace restrictions.
          </p>
          <div className={styles.travelPolicy}>
            <h3>Travel &amp; Service Area</h3>
            <p>All services include travel within 25 driving miles of our Fort Lauderdale base.
              Additional round-trip mileage beyond that distance is billed at $1 per mile
              and confirmed in your quote before booking.</p>
          </div>
          <Link to="/contact" className={styles.cardLink}>Request a Quote <span aria-hidden="true">↗</span></Link>
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
