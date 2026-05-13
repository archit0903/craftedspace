import styles from "./Work.module.css";

const PROJECTS = [
  {
    title: "Oakville Kitchen Renovation",
    category: "Custom Cabinets",
    year: "2024",
    detail: "Full shaker-style cabinet suite in white oak",
    size: "large",
  },
  {
    title: "Burlington Walk-In Pantry",
    category: "Pantry Systems",
    year: "2024",
    detail: "Floor-to-ceiling pantry with pull-outs",
    size: "medium",
  },
  {
    title: "Hamilton Whole-Home Assembly",
    category: "Flat-Pack Assembly",
    year: "2024",
    detail: "3-bedroom home, 24 flat-pack items",
    size: "medium",
  },
  {
    title: "Antique Dining Table Restoration",
    category: "Furniture Repair",
    year: "2023",
    detail: "Full strip, repair, and hand-rubbed finish",
    size: "small",
  },
  {
    title: "Ancaster Laundry Cabinets",
    category: "Custom Cabinets",
    year: "2023",
    detail: "Utility cabinetry with folding counter",
    size: "small",
  },
  {
    title: "Home Office Built-Ins",
    category: "Woodwork",
    year: "2023",
    detail: "Wall-to-wall bookshelves & desk unit",
    size: "small",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Custom Cabinets":      "#D4A853",
  "Pantry Systems":       "#8B6540",
  "Flat-Pack Assembly":   "#6B8B6B",
  "Furniture Repair":     "#8B6B4A",
  "Woodwork":             "#A07550",
};

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-tag" style={{ color: "#C4A882" }}>Portfolio</div>
            <h2 className={styles.title}>Selected Work</h2>
          </div>
          <p className={styles.subtitle}>
            A selection of recent projects across Burlington, Oakville,
            Hamilton and the GTA.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`${styles.item} ${styles[p.size]}`}>
              <div className={styles.itemInner}>
                {/* Placeholder for real photo */}
                <div className={styles.imgPlaceholder} aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="14" height="22" rx="2" fill="rgba(212,168,83,0.3)" stroke="rgba(212,168,83,0.5)" strokeWidth="1"/>
                    <rect x="26" y="8" width="14" height="22" rx="2" fill="rgba(212,168,83,0.3)" stroke="rgba(212,168,83,0.5)" strokeWidth="1"/>
                    <rect x="8" y="32" width="32" height="9" rx="2" fill="rgba(212,168,83,0.3)" stroke="rgba(212,168,83,0.5)" strokeWidth="1"/>
                    <circle cx="15" cy="19" r="2" fill="rgba(212,168,83,0.6)"/>
                    <circle cx="33" cy="19" r="2" fill="rgba(212,168,83,0.6)"/>
                  </svg>
                  <span>Photo coming soon</span>
                </div>

                <div className={styles.overlay}>
                  <div
                    className={styles.catBadge}
                    style={{ background: CATEGORY_COLORS[p.category] ?? "#D4A853" }}
                  >
                    {p.category}
                  </div>
                  <h3 className={styles.itemTitle}>{p.title}</h3>
                  <p className={styles.itemDetail}>{p.detail}</p>
                  <span className={styles.itemYear}>{p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Want to see more? Every project is unique — let's talk about yours.</p>
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}
