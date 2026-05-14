import Image from "next/image";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    title: "Commercial Base Cabinet Suite",
    category: "Custom Cabinets",
    year: "2025",
    detail: "Full wall of base cabinets with integrated drawers — commercial office fit-out",
    size: "large",
    img: "/projects/IMG_3914.jpeg",
  },
  {
    title: "L-Shaped Corner Desk",
    category: "Flat-Pack Assembly",
    year: "2025",
    detail: "Corner workstation assembled and levelled in a new office space",
    size: "medium",
    img: "/projects/IMG_3627.jpeg",
  },
  {
    title: "Gaming Desk with LED Riser",
    category: "Flat-Pack Assembly",
    year: "2025",
    detail: "Full gaming desk build with monitor riser and integrated LED lighting",
    size: "medium",
    img: "/projects/IMG_4005.jpeg",
  },
  {
    title: "Tall Walnut Storage Cabinet",
    category: "Flat-Pack Assembly",
    year: "2025",
    detail: "Floor-to-ceiling storage tower with open shelving and lower door",
    size: "small",
    img: "/projects/IMG_3898.jpeg",
  },
  {
    title: "Bedroom Nightstand Set",
    category: "Flat-Pack Assembly",
    year: "2025",
    detail: "Matching pair of bedside tables assembled and positioned",
    size: "small",
    img: "/projects/IMG_3893.jpeg",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Custom Cabinets":    "#D4A853",
  "Pantry Systems":     "#8B6540",
  "Flat-Pack Assembly": "#6B8B6B",
  "Furniture Repair":   "#8B6B4A",
  "Woodwork":           "#A07550",
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
          {PROJECTS.map((p) => (
            <div key={p.title} className={`${styles.item} ${styles[p.size]}`}>
              <div className={styles.itemInner}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.photo}
                  style={{ objectFit: "cover" }}
                />

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
