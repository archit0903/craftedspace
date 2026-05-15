import styles from "./Footer.module.css";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "About",    href: "#about" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="2" fill="#D4A853"/>
                <path d="M7 21V11l7-4 7 4v10" stroke="#2C1A0E" strokeWidth="1.8" strokeLinejoin="round"/>
                <rect x="11" y="15" width="6" height="6" rx="1" fill="#2C1A0E"/>
                <circle cx="14" cy="18" r="1" fill="#D4A853"/>
              </svg>
              <span>CraftedSpace</span>
            </div>
            <p className={styles.tagline}>"It's all about your vision and our craft."</p>
            <p className={styles.address}>Burlington, Ontario · Serving the GTA</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navLabel}>Quick Links</div>
            <ul>
              {NAV.map((n) => <li key={n.label}><a href={n.href}>{n.label}</a></li>)}
            </ul>
          </nav>

          <div className={styles.contact}>
            <div className={styles.navLabel}>Contact</div>
            <a href="tel:+19055551234">(905) 516 7432</a>
            <a href="mailto:gabhi5655@gmail.com">craftedspaceinfo@gmail.com</a>
            <div className={styles.hours}>
              <span>Mon – Fri: 8am – 6pm</span>
              <span>Sat: 9am – 4pm</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} CraftedSpace All rights reserved.</p>
          <p className={styles.small}>
            Fully insured · Licensed contractor · Hamilton, ON
          </p>
        </div>
      </div>
    </footer>
  );
}
