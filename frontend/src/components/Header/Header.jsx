import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo Section */}
          <div className={styles.logoGroup} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            <div className={styles.logoIcon}>
              <span className="material-symbols-outlined">terminal</span>
              <div className={styles.logoGlow}></div>
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>MARCEL SIREGAR</h1>
              <span className={styles.logoSubtitle}>Developer & Analyst</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <div className={styles.navItems}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`${styles.navLink} ${item.id === 'home' ? styles.navLinkActive : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                  <span className={styles.underline}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuBtn}>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuItems}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={styles.mobileMenuItem}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
