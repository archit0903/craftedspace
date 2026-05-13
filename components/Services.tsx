import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="11" height="18" rx="1.5" stroke="#D4A853" strokeWidth="1.5"/>
        <rect x="17" y="4" width="11" height="18" rx="1.5" stroke="#D4A853" strokeWidth="1.5"/>
        <rect x="4" y="24" width="24" height="6" rx="1.5" stroke="#D4A853" strokeWidth="1.5"/>
        <circle cx="9.5" cy="13" r="1.5" fill="#D4A853"/>
        <circle cx="22.5" cy="13" r="1.5" fill="#D4A853"/>
      </svg>
    ),
    title: "Custom Cabinets",
    desc: "Fully bespoke kitchen cabinetry designed from scratch. Every cabinet measured, cut, and finished to your exact specifications — shaker, flat-front, glass-inset, or anything in between.",
    highlights: ["Floor-to-ceiling", "Any wood species", "Custom hardware"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26l4-4 12-12 4 4-12 12-4 4-4-4z" stroke="#D4A853" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M22 10l-4-4 2-2a3 3 0 014 4l-2 2z" stroke="#D4A853" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 26l-2 2" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Furniture Repair & Restoration",
    desc: "Breathing new life into tired or damaged furniture. Structural repairs, refinishing, staining, reupholstery prep — restoring heirloom pieces and everyday items alike.",
    highlights: ["Structural repair", "Refinishing & staining", "Heirloom restoration"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#D4A853" strokeWidth="1.5"/>
        <path d="M16 10v6l4 2" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 6l2 2M22 6l-2 2M10 26l2-2M22 26l-2-2" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "General Handywork",
    desc: "Reliable, skilled handyman services for your home. From installing shelves and doors to patching drywall and fixing what's been on your to-do list for months.",
    highlights: ["Shelf & door install", "Drywall repairs", "Fixture mounting"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="8" height="8" rx="1" stroke="#D4A853" strokeWidth="1.5"/>
        <rect x="19" y="5" width="8" height="8" rx="1" stroke="#D4A853" strokeWidth="1.5"/>
        <rect x="5" y="19" width="8" height="8" rx="1" stroke="#D4A853" strokeWidth="1.5"/>
        <rect x="19" y="19" width="8" height="8" rx="1" stroke="#D4A853" strokeWidth="1.5"/>
        <path d="M13 9h6M13 23h6M9 13v6M23 13v6" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Pantries & Storage",
    desc: "Walk-in pantries, reach-in storage systems, and butler pantries designed to maximize every inch. Pull-outs, lazy susans, and custom organizers built to fit your space.",
    highlights: ["Walk-in & reach-in", "Pull-outs & organizers", "Custom sizing"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10h20v16H6z" stroke="#D4A853" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 10V7a6 6 0 0112 0v3" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 18h8M16 15v6" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Woodwork",
    desc: "Custom woodwork beyond cabinets — built-in bookshelves, window seats, trim work, accent walls, and feature pieces that add character to any room.",
    highlights: ["Built-in shelving", "Decorative trim", "Feature pieces"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="16" height="20" rx="2" stroke="#D4A853" strokeWidth="1.5"/>
        <path d="M12 10h8M12 14h8M12 18h5" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 28l4-4h8l4 4" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Flat-Pack Assembly",
    desc: "IKEA, Wayfair, Structube, Amazon — I'll assemble it correctly, quickly, and without leftover parts. Single items or entire home setups done in a day.",
    highlights: ["IKEA specialists", "Same-day available", "Full-home setups"],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={`container`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className="section-tag">What We Do</div>
            <h2 className={styles.title}>Our Services</h2>
          </div>
          <p className={styles.headerDesc}>
            Whether you're dreaming of a new kitchen or just need that flat-pack
            sorted — we've got you covered with quality craftsmanship throughout.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.iconWrap}>{svc.icon}</div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <ul className={styles.highlights}>
                {svc.highlights.map((h) => (
                  <li key={h}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
