"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const SERVICES = [
  "Custom Cabinets",
  "Furniture Repair & Restoration",
  "General Handywork",
  "Woodwork",
  "Pantries & Storage",
  "Flat-Pack Assembly",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await fetch("https://formspree.io/f/mwvydnyk", { //endpoint
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (res.ok) setSubmitted(true);
};

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.grid}>

          {/* Left: info */}
          <div className={styles.info}>
            <div className="section-tag" style={{ color: "#C4A882" }}>Get In Touch</div>
            <h2 className={styles.title}>Let's Talk About<br />Your Project</h2>
            <p className={styles.hook}>"It's all about your vision and our craft."</p>
            <p className={styles.desc}>
              Fill out the form and I'll get back to you within 24 hours with a
              free quote. On-site visits for larger jobs at no charge.
            </p>

            <div className={styles.contactMethods}>
              <a href="tel:+19055551234" className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h2l2 4-2 2a11 11 0 004 4l2-2 4 2v2a2 2 0 01-2 2A16 16 0 013 5z" stroke="#D4A853" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.methodLabel}>Call or Text</div>
                  <div className={styles.methodValue}>(905) 516 7432</div>
                </div>
              </a>

              <a href="mailto:gabhi5655@gmail.com" className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="2" y="5" width="16" height="12" rx="1.5" stroke="#D4A853" strokeWidth="1.3"/>
                    <path d="M2 7l8 5 8-5" stroke="#D4A853" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.methodLabel}>Email</div>
                  <div className={styles.methodValue}>craftedspaceinfo@gmail.com</div>
                </div>
              </a>

              <div className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#D4A853" strokeWidth="1.3"/>
                    <circle cx="10" cy="8" r="2" stroke="#D4A853" strokeWidth="1.3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.methodLabel}>Service Area</div>
                  <div className={styles.methodValue}>Burlington · Oakville · Hamilton · GTA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="22" stroke="#D4A853" strokeWidth="2"/>
                  <path d="M14 24l8 8 12-14" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours with a quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Jane Smith"
                      value={form.name} onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="jane@example.com"
                      value={form.email} onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="(905) 555-0100"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      required
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Tell Me About Your Project *</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe what you're looking for — dimensions, style, timeline, anything helps…"
                    rows={5}
                    value={form.message} onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={`btn-primary ${styles.submit}`}>
                  Send My Request
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className={styles.disclaimer}>
                  No spam. Just a quick reply with your free quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
