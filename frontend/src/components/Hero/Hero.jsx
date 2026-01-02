import styles from './Hero.module.css';

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientBlob}></div>
        <div className={styles.gradientBlobSecond}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentLeft}>
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.pulsingDot}>
              <span className={styles.ping}></span>
              <span className={styles.dot}></span>
            </span>
            <span>Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            Data Driven. <br />
            <span className={styles.gradientText}>Tech Focused.</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Explore my portfolio of <span className={styles.nameHighlight}>innovative solutions</span> and technical expertise. From data-driven applications to high-performance backends, discover how I transform ideas into scalable, elegant code.
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton} onClick={handleViewProjects}>
              <span>View Projects</span>
              <span className="material-symbols-outlined">layers</span>
            </button>
            <button className={styles.secondaryButton}>
              <span>Download CV</span>
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statsIcons}>
              <span className="material-symbols-outlined" title="Python">code</span>
              <span className="material-symbols-outlined" title="Database">database</span>
              <span className="material-symbols-outlined" title="Analytics">bar_chart</span>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className={styles.contentRight}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}></div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIconContainer}>
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <p className={styles.cardTitle}>Data Analysis Expert</p>
                <p className={styles.cardText}>Transforming raw data into meaningful business intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
