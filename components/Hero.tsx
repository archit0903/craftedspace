import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background wood texture overlay */}
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* Decorative vertical lines */}
      <div className={styles.vertLines} aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Text */}
        <div className={styles.content}>
          <div className={`animate-fade-up delay-1 ${styles.badge}`}>
            <span className={styles.badgeDot} />
            Hamilton &amp; GTA · Est. 2026
          </div>

          <h1 className={`animate-fade-up delay-2 ${styles.headline}`}>
            Custom <br />
            <span className={styles.headlineAccent}>Cabinetry</span>
            <br />&amp; Woodwork
          </h1>

          <p className={`animate-fade-up delay-3 ${styles.hook}`}>
            "It's all about your vision and our craft."
          </p>

          <p className={`animate-fade-up delay-4 ${styles.sub}`}>
            From custom kitchen cabinets and pantries to furniture repair,
            woodwork, and flat-pack assembly — every project built with care,
            precision, and old-world attention to detail.
          </p>

          <div className={`animate-fade-up delay-5 ${styles.actions}`}>
            <a href="#work" className="btn-primary">
              View Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Get a Free Quote</a>
          </div>

          <div className={`animate-fade-up delay-6 ${styles.stats}`}>
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "3",   label: "Years Experience" },
              { value: "4.9★", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cabinet illustration */}
        <div className={`animate-fade-up delay-3 ${styles.visual}`}>
          <div className={styles.visualFrame}>
            <svg
              viewBox="0 0 340 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cabinetSvg}
              aria-label="Custom cabinet illustration"
              role="img"
            >
              {/* Upper cabinets */}
              <rect x="20" y="20" width="135" height="165" rx="3" fill="#5A3D22" stroke="#7A5535" strokeWidth="1.5"/>
              <rect x="185" y="20" width="135" height="165" rx="3" fill="#5A3D22" stroke="#7A5535" strokeWidth="1.5"/>
              {/* Upper doors */}
              <rect x="28" y="28" width="119" height="73" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="193" y="28" width="119" height="73" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="28" y="107" width="119" height="70" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="193" y="107" width="119" height="70" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              {/* Door inset panels */}
              <rect x="36" y="36" width="103" height="57" rx="1" fill="#3D2810"/>
              <rect x="201" y="36" width="103" height="57" rx="1" fill="#3D2810"/>
              <rect x="36" y="115" width="103" height="54" rx="1" fill="#3D2810"/>
              <rect x="201" y="115" width="103" height="54" rx="1" fill="#3D2810"/>
              {/* Door knobs */}
              <circle cx="87" cy="65" r="6" fill="#D4A853"/>
              <circle cx="252" cy="65" r="6" fill="#D4A853"/>
              <circle cx="87" cy="142" r="6" fill="#D4A853"/>
              <circle cx="252" cy="142" r="6" fill="#D4A853"/>
              {/* Knob shine */}
              <circle cx="85" cy="63" r="2" fill="rgba(255,255,255,0.3)"/>
              <circle cx="250" cy="63" r="2" fill="rgba(255,255,255,0.3)"/>

              {/* Countertop */}
              <rect x="8" y="188" width="324" height="16" rx="2" fill="#8B6540"/>
              <rect x="8" y="188" width="324" height="4" rx="2" fill="#A07550"/>

              {/* Lower cabinets */}
              <rect x="8" y="206" width="155" height="190" rx="3" fill="#5A3D22" stroke="#7A5535" strokeWidth="1.5"/>
              <rect x="177" y="206" width="155" height="190" rx="3" fill="#5A3D22" stroke="#7A5535" strokeWidth="1.5"/>
              {/* Lower doors */}
              <rect x="16" y="214" width="139" height="82" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="185" y="214" width="139" height="82" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="16" y="302" width="139" height="86" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              <rect x="185" y="302" width="139" height="86" rx="2" fill="#4A3018" stroke="#6A4828" strokeWidth="1"/>
              {/* Lower panels */}
              <rect x="24" y="222" width="123" height="66" rx="1" fill="#3D2810"/>
              <rect x="193" y="222" width="123" height="66" rx="1" fill="#3D2810"/>
              <rect x="24" y="310" width="123" height="70" rx="1" fill="#3D2810"/>
              <rect x="193" y="310" width="123" height="70" rx="1" fill="#3D2810"/>
              {/* Lower knobs */}
              <circle cx="85" cy="255" r="6" fill="#D4A853"/>
              <circle cx="254" cy="255" r="6" fill="#D4A853"/>
              <circle cx="85" cy="345" r="6" fill="#D4A853"/>
              <circle cx="254" cy="345" r="6" fill="#D4A853"/>
              {/* Lower knob shine */}
              <circle cx="83" cy="253" r="2" fill="rgba(255,255,255,0.3)"/>
              <circle cx="252" cy="253" r="2" fill="rgba(255,255,255,0.3)"/>

              {/* Floor */}
              <rect x="0" y="395" width="340" height="10" rx="2" fill="#3D2810"/>

              {/* Wood grain lines — subtle */}
              <line x1="40" y1="28" x2="40" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              <line x1="80" y1="28" x2="80" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              <line x1="120" y1="28" x2="120" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            </svg>

            {/* Floating badge */}
            <div className={styles.floatBadge}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 1l2 6h6l-5 3.5 2 6L9 13l-5 3.5 2-6L1 7h6z" fill="#D4A853"/>
              </svg>
              <div>
                <strong>4.9</strong>
                <span>34 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
