import styles from './Skills.module.css';

export default function Skills() {
  const coreSkills = ['Python', 'C++', 'JavaScript', 'HTML5', 'CSS3'];
  const webStack = ['Node.js', 'REST API', 'React'];
  const devOpsTools = [
    { name: 'Git', icon: 'terminal' },
    { name: 'Docker', icon: 'deployed_code' },
    { name: 'AWS', icon: 'cloud' },
    { name: 'Linux', icon: 'android' },
  ];

  return (
    <section className={styles.skillsSection}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <span className={styles.label}>Portfolio</span>
            <h1 className={styles.mainTitle}>
              Technical{' '}
              <span className={styles.gradientText}>Expertise</span>
            </h1>
            <p className={styles.description}>
              A curated arsenal of programming languages, data tools, and modern web technologies.
            </p>
          </div>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollLine}></div>
            <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </header>

      {/* Bento Grid Section */}
      <main className={styles.gridContainer}>
        <div className={styles.bentoGrid}>
          {/* Large Card: Core Programming */}
          <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
            <div className={styles.cardGradient}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <h2 className={styles.cardTitle}>Core Programming</h2>
              <p className={styles.cardDescription}>
                Building robust, scalable logic is the foundation. Proficient in strictly typed
                languages and dynamic scripting for diverse problem-solving.
              </p>
              <div className={styles.skillTags}>
                {coreSkills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.codeVisual}>
              <pre>{`def init_system():
  core.load()
  return True`}</pre>
            </div>
          </div>

          {/* Tall Card: Data & AI */}
          <div className={`${styles.bentoCard} ${styles.cardTall}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="material-symbols-outlined" style={{ color: '#64748b' }}>
                arrow_outward
              </span>
            </div>
            <h3 className={styles.cardTitle}>Data &amp; AI</h3>
            <p className={styles.cardDescription}>
              Transforming raw data into actionable insights through statistical analysis and
              machine learning models.
            </p>
            <div className={styles.dataList}>
              <div className={styles.dataItem}>
                <span className="material-symbols-outlined">database</span>
                <div className={styles.dataInfo}>
                  <span className={styles.dataName}>SQL</span>
                  <span className={styles.dataSubtext}>Querying</span>
                </div>
              </div>
              <div className={styles.dataItem}>
                <span className="material-symbols-outlined">insights</span>
                <div className={styles.dataInfo}>
                  <span className={styles.dataName}>Pandas</span>
                  <span className={styles.dataSubtext}>Analysis</span>
                </div>
              </div>
              <div className={styles.dataItem}>
                <span className="material-symbols-outlined">smart_toy</span>
                <div className={styles.dataInfo}>
                  <span className={styles.dataName}>TensorFlow</span>
                  <span className={styles.dataSubtext}>ML/AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card: Web Development */}
          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardGradientOverlay}></div>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <span className="material-symbols-outlined">globe</span>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Web Dev</h3>
            <p className={styles.cardSmallDesc}>Full-stack solutions.</p>
            <div className={styles.techBadges}>
              {webStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Small Highlight Card: Visual Focus */}
          <div
            className={`${styles.bentoCard} ${styles.cardHighlight}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZCWVtaKXjtzXbY_MWNzM8IG8gd0F4vX8IXxLOQX4a2fFCxXx79WQTTL1OY6fHYMproh1dccDGGx70JmHJkdGhkb0ikvstMLiFnXc0X51BYlzMck9N3Ai1Oa0WsGcti92DRZAziLc4z8Xfrurkj8zwU6H1c412l0k7-tBmpd-8B68ZdpxtW34dF86zp0e-mpMiuJ1RS4X07QPHeFY0GPsaib8VY0VaNSolCxMJ1u85Ca8ZkrXM25-E3wIkXp44OuMWJ1zBrkqKBaU')`,
            }}
          >
            <div className={styles.highlightOverlay}></div>
            <div className={styles.highlightContent}>
              <div className={styles.highlightBadge}>
                <span className="material-symbols-outlined">circle</span>
                <span>Active Focus</span>
              </div>
              <h3 className={styles.highlightTitle}>Advanced Analytics</h3>
            </div>
          </div>

          {/* Wide Bottom Card: Tools & Deployment */}
          <div className={`${styles.bentoCard} ${styles.cardWide}`}>
            <div className={styles.toolsHeader}>
              <div className={styles.toolsInfo}>
                <div className={styles.cardIcon}>
                  <span className="material-symbols-outlined">settings_applications</span>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>DevOps &amp; Tools</h3>
                  <p className={styles.cardDescription}>
                    Streamlining development and deployment workflows.
                  </p>
                </div>
              </div>
              <div className={styles.toolsBadges}>
                {devOpsTools.map((tool) => (
                  <div key={tool.name} className={styles.toolBadge}>
                    <span className="material-symbols-outlined">{tool.icon}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className={`${styles.bentoCard} ${styles.cardCTA}`}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <span className="material-symbols-outlined">download</span>
              </div>
              <div className={styles.ctaText}>
                <h3 className={styles.ctaTitle}>Interested in my stack?</h3>
                <p className={styles.ctaDescription}>
                  Download my full resume to see project details.
                </p>
              </div>
            </div>
            <button className={styles.ctaButton}>
              <span className="material-symbols-outlined">description</span>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
