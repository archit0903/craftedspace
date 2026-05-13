"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "About",    href: "#about" },
  { label: "Reviews",  href: "#reviews" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="2" fill="#D4A853"/>
            <path d="M7 21V11l7-4 7 4v10" stroke="#2C1A0E" strokeWidth="1.8" strokeLinejoin="round"/>
            <rect x="11" y="15" width="6" height="6" rx="1" fill="#2C1A0E"/>
            <circle cx="14" cy="18" r="1" fill="#D4A853"/>
          </svg>
          <span>CraftedSpace <em>Co.</em></span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className={`${styles.cta} hide-mobile`}>
          Get a Free Quote
        </a>

        {/* Hamburger */}
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? styles.open : ""}></span>
          <span className={menuOpen ? styles.open : ""}></span>
          <span className={menuOpen ? styles.open : ""}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={(e) => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className={styles.mobileCta}>
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
