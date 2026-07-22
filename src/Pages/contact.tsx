import React, { FormEvent, useState } from 'react';
import styles from '../CSS/contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Start Your Project</p>
          <h1>Let&apos;s create something worth watching.</h1>
          <p>
            Tell us a little about your project, business, or event. We&apos;ll be in touch to discuss your goals,
            timeline, and the right approach for your visuals.
          </p>
          <p className={styles.location}>Serving Fort Lauderdale, Miami, Boca Raton, and South Florida.</p>
        </div>

        <form
          className={styles.form}
          name="project-inquiry"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="project-inquiry" />
          <p className={styles.hiddenField}>
            <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
          </p>

          <div className={styles.twoColumns}>
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>

          <div className={styles.twoColumns}>
            <label>
              Phone <span>(optional)</span>
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label>
              Project type
              <select name="project-type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Commercial / Brand Video</option>
                <option>Photography</option>
                <option>Wedding or Event</option>
                <option>Real Estate</option>
                <option>Automotive</option>
                <option>Editing or Motion Graphics</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label>
            Tell us about your project
            <textarea name="message" rows={6} required placeholder="What are you looking to create?" />
          </label>

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
          </button>

          <div className={styles.status} aria-live="polite">
            {status === 'success' && 'Thanks—your inquiry has been sent. We’ll be in touch soon.'}
            {status === 'error' && 'Something went wrong. Please try again in a moment.'}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
