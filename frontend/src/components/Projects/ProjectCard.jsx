import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      {/* Image Header */}
      <div className={styles.imageHeader}>
        <div className={styles.gradientBg}></div>
        <div className={styles.iconContainer}>
          <span className="material-symbols-outlined">{project.icon}</span>
        </div>
        <div className={styles.techBadges}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.category}>{project.category}</span>
          <div className={styles.actions}>
            <a href={project.codeLink} className={styles.actionLink} title="View Code">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href={project.demoLink} className={styles.actionLink} title="View Demo">
              <span className="material-symbols-outlined">
                {project.category === 'AI / ML' ? 'description' : 'open_in_new'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
