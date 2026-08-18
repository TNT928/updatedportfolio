import React from 'react';
import styles from '../CSS/privacy.module.css';

const Privacy = () => (
  <main className={styles.wrapper}>
    <article className={styles.container}>
      <p className={styles.eyebrow}>Your Privacy</p>
      <h1>Privacy Policy</h1>
      <p className={styles.updated}>Effective August 18, 2026</p>

      <p>
        VanderLoon Media respects your privacy. This policy explains what information this website collects,
        why it is collected, and the choices available to you.
      </p>

      <section>
        <h2>Information you provide</h2>
        <p>
          When you submit a project inquiry, we may collect your name, email address, optional phone number,
          project type, target date, estimated budget, referral source, and the details you choose to include
          in your message. We use this information to respond to your inquiry, prepare project recommendations
          or estimates, and communicate about potential services.
        </p>
      </section>

      <section>
        <h2>Website analytics</h2>
        <p>
          This website uses Google Analytics to understand how visitors find and use the site. Google Analytics
          may collect information such as pages viewed, interactions, device and browser type, approximate
          location, and referral source through cookies or similar identifiers. VanderLoon Media does not send
          names, email addresses, phone numbers, or inquiry-message contents to Google Analytics.
        </p>
        <p>
          Learn more about how Google processes information on sites using its services at{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
            Google&apos;s partner-sites information page
          </a>.
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>
          We use service providers to operate this website, process inquiry forms, host media, and measure site
          performance. These providers may process limited information on our behalf to deliver their services.
          We do not sell the personal information submitted through this website.
        </p>
      </section>

      <section>
        <h2>Data retention and your choices</h2>
        <p>
          Inquiry information is retained only as long as reasonably necessary to respond, maintain business
          records, and meet applicable obligations. You may control or delete cookies through your browser and
          may use the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
            Google Analytics opt-out browser add-on
          </a>.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          To ask a privacy question or request access, correction, or deletion of information you submitted,
          email <a href="mailto:vanderloonmedia@gmail.com">vanderloonmedia@gmail.com</a>.
        </p>
      </section>
    </article>
  </main>
);

export default Privacy;
