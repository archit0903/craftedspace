import styles from "./Reviews.module.css";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Oakville, ON",
    rating: 5,
    service: "Custom Cabinets",
    text: "The kitchen cabinets are absolutely stunning. He came in, took measurements, and delivered exactly what we pictured — on time and on budget. The quality is incredible.",
  },
  {
    name: "David K.",
    location: "Burlington, ON",
    rating: 5,
    service: "Flat-Pack Assembly",
    text: "Hired to assemble 12 boxes of IKEA furniture across our new home. Done in a single day, everything perfectly level and solid. Will absolutely call again for our next place.",
  },
  {
    name: "Priya R.",
    location: "Hamilton, ON",
    rating: 5,
    service: "Furniture Repair",
    text: "He restored my grandmother's dining table — stripped, repaired a cracked leg, and refinished it by hand. It looks brand new. I'm so grateful I didn't throw it away.",
  },
  {
    name: "James T.",
    location: "Ancaster, ON",
    rating: 5,
    service: "Pantry Systems",
    text: "Our walk-in pantry is a dream now. Custom pull-outs, proper shelving, everything fits perfectly. He suggested storage ideas I never would've thought of.",
  },
  {
    name: "Michelle W.",
    location: "Mississauga, ON",
    rating: 5,
    service: "Woodwork",
    text: "Built-in bookshelves for our home office. They look like they've always been there — perfectly matched to our trim, solid as a rock. Couldn't be happier.",
  },
  {
    name: "Tom B.",
    location: "Burlington, ON",
    rating: 5,
    service: "General Handywork",
    text: "Finally got everything on my list done. Doors rehung, shelves installed, drywall patched. Straightforward, professional, and reasonable pricing.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-tag">Testimonials</div>
            <h2 className={styles.title}>What Clients Say</h2>
          </div>
          <div className={styles.aggregate}>
            <div className={styles.aggScore}>4.9</div>
            <div>
              <Stars count={5} />
              <div className={styles.aggCount}>Based on 35 reviews</div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r) => (
            <div key={r.name} className={styles.card}>
              <Stars count={r.rating} />
              <blockquote className={styles.quote}>"{r.text}"</blockquote>
              <div className={styles.footer}>
                <div className={styles.avatar} aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.reviewerName}>{r.name}</div>
                  <div className={styles.reviewerMeta}>{r.location} · {r.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
