import styles from './About.module.css';

export default function About() {
  const techStack = [
    { name: 'Node.js', color: '#68A063' },
    { name: 'Python', color: '#FFD43B' },
    { name: 'SQL', color: '#00758F' },
    { name: 'Backend Arch', color: 'white' },
    { name: 'Data Analysis', color: '#a855f7' },
  ];

  return (
    <section className={styles.aboutSection}>
      {/* Background Grid Effect */}
      <div className={styles.gridBackground}></div>

      <div className={styles.layoutContainer}>
        <div className={styles.contentWrapper}>
          {/* Section Label */}
          <div className={styles.sectionLabel}>
            <div className={styles.labelContent}>
              <span className={styles.labelLine}></span>
              <h4 className={styles.labelText}>// Who Am I</h4>
            </div>
          </div>

          <div className={styles.mainGrid}>
            {/* Left Column: Image & Stats */}
            <div className={styles.leftColumn}>
              {/* Tech Frame Avatar */}
              <div className={styles.avatarFrame}>
                {/* Decorative HUD Corners */}
                <div className={styles.cornerTopLeft}></div>
                <div className={styles.cornerBottomRight}></div>

                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <div
                    className={styles.avatarImage}
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWNQ0at-aBSl0i9jb9KaOD3kqKTKE6VBIU0GS3DR-2FhbR3xCrw2Ovomz3q8aol0EoSY8Tu57WJtWTyOB8Vf9iH0FCNN4nLxXWQZ9XWDdntEVWntiOnMpMEvPyitYOre5wXR5Y_HO8RWmSQXFk-chwM5l0Fm3hc6q8r0GAG5rTkh2XO4iCpLd1FKd_5YW9yNdnI23wDDaExWAIOIMD9emlHIYmKfpCLA72cQF3LjBGGHufGBO2WV2xW1EWOeYLL-kQlPboyMPM_T0')`,
                    }}
                  >
                    <div className={styles.imageOverlay}></div>
                  </div>

                  {/* Floating Status Badge */}
                  <div className={styles.statusBadge}>
                    <div className={styles.statusContent}>
                      <div className={styles.statusIndicator}>
                        <span className={styles.ping}></span>
                        <span className={styles.dot}></span>
                      </div>
                      <div className={styles.statusText}>
                        <p className={styles.statusLabel}>Status</p>
                        <p className={styles.statusValue}>Open for Work</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#08b2d4' }}>
                      terminal
                    </span>
                  </div>
                </div>
              </div>

              {/* Education Badge Card */}
              <div className={styles.educationCard}>
                <div className={styles.educationIcon}>
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div className={styles.educationInfo}>
                  <span className={styles.educationLabel}>Education</span>
                  <span className={styles.educationUniversity}>
                    Institut Teknologi Sumatera (ITERA)
                  </span>
                  <span className={styles.educationBatch}>Batch 2023 • Informatics Engineering</span>
                </div>
              </div>
            </div>

            {/* Right Column: Biography & Skills */}
            <div className={styles.rightColumn}>
              {/* Headline */}
              <div className={styles.headline}>
                <h2 className={styles.mainTitle}>
                  Engineering Data,<br />
                  <span className={styles.gradientSpan}>Building Backends.</span>
                </h2>
                <p className={styles.subtitle}>Hello! I'm Marcel Kevin Togap Siregar.</p>
              </div>

              {/* Bio Text */}
              <div className={styles.bioSection}>
                <p>
                  Currently pursuing <span className={styles.highlight}>Informatics Engineering</span> at
                  ITERA. My passion lies at the intersection of logic and data.
                </p>
                <p>
                  I don't just write code; I specialize in architecting robust{' '}
                  <span className={styles.highlightPrimary}>Backend systems</span> with Node.js and
                  uncovering meaningful insights through{' '}
                  <span className={styles.highlightPrimary}>Data Analysis</span> using Python and SQL. I
                  thrive in the dark mode environment, turning complex problems into elegant, scalable
                  solutions.
                </p>
              </div>

              {/* Tech Stack Grid */}
              <div className={styles.techStackSection}>
                <h3 className={styles.techStackTitle}>
                  <span className="material-symbols-outlined">memory</span>
                  Technical Arsenal
                </h3>
                <div className={styles.techStackGrid}>
                  {techStack.map((tech) => (
                    <div key={tech.name} className={styles.techChip}>
                      <span
                        className={styles.techDot}
                        style={{ backgroundColor: tech.color }}
                      ></span>
                      <span className={styles.techName}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
