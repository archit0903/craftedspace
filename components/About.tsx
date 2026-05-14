import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>

          {/* Left: decorative column */}
          <div className={styles.left}>
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder} aria-label="Owner portrait placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="30" r="18" stroke="rgba(212,168,83,0.4)" strokeWidth="1.5"/>
                  <path d="M12 70c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="rgba(212,168,83,0.4)" strokeWidth="1.5"/>
                </svg>
                <p></p>
              </div>
              <div className={styles.photoCorner} aria-hidden="true" />
            </div>

            <div className={styles.qualityBox}>
              <div className={styles.qbNum}>3+</div>
              <div className={styles.qbLabel}>Years of Craft</div>
              <div className={styles.qbDesc}>
                Serving Hamilton families and homeowners across the GTA
                with honest work and lasting results.
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className={styles.right}>
            <div className="section-tag">About</div>
            <h2 className={styles.title}>
              Built on trust,<br />finished with care.
            </h2>

            <p className={styles.hook}>
              "It's all about your vision and our craft."
            </p>

            <div className={styles.body}>
              <p>
                I started CraftedSpace with one belief: that every home
                deserves quality workmanship, no matter the size of the job.
                What began as a passion for furniture and woodworking has grown
                into a full-service cabinetry and handyman business serving Hamilton,
                Burlington, Oakville, Hamilton and the surrounding GTA.
              </p>
              <p>
                Every project is personal. I visit your home, understand what
                you need, and build or assemble it the right way — with proper
                materials, proper tools, and no shortcuts. Whether it's a
                complete kitchen cabinet installation or a flat-pack wardrobe
                from a box, the same care goes into every single screw.
              </p>
              <p>
                Fully insured. References available. I'll always give you a
                straight quote with no hidden fees.
              </p>
            </div>

            <div className={styles.values}>
              {[
                { icon: "🔨", label: "Built to last" },
                { icon: "📐", label: "Precision measured" },
                { icon: "🤝", label: "Honest pricing" },
                { icon: "📍", label: "Hamilton based" },
              ].map((v) => (
                <div key={v.label} className={styles.valueChip}>
                  <span>{v.icon}</span>
                  <span>{v.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ marginTop: "32px" }}>
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
