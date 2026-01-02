import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>
      
      <div className={styles.footerContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.nameSection}>
            <span className={styles.name}>Marcel Kevin Togap Siregar</span>
            <span className={styles.dot}>.</span>
          </div>
          <p className={styles.description}>
            Building digital experiences with code and data. Always open to discussing new projects
            and opportunities.
          </p>
          <div className={styles.copyright}>© 2024. All rights reserved.</div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h4 className={styles.contactTitle}>Get in Touch</h4>
          <div className={styles.contactLinks}>
            <a
              href="mailto:marcellsiregar1204@gmail.com?subject=Let's%20Connect&body=Hi%20Marcel"
              className={styles.contactLink}
              style={{ pointerEvents: 'auto' }}
            >
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className={styles.contactText}>Email</span>
            </a>

            <a
              href="https://id.linkedin.com/in/marcelsiregar"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">link</span>
              </div>
              <span className={styles.contactText}>LinkedIn</span>
              <span className={`material-symbols-outlined ${styles.externalIcon}`}>
                arrow_outward
              </span>
            </a>

            <a
              href="https://github.com/Arcel-S/Arcel-S"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.contactIcon}>
                <span className="material-symbols-outlined">code</span>
              </div>
              <span className={styles.contactText}>GitHub</span>
              <span className={`material-symbols-outlined ${styles.externalIcon}`}>
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
