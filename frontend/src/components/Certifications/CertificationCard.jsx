import styles from './CertificationCard.module.css';

export default function CertificationCard({ certification }) {
  return (
    <div className={styles.card}>
      {/* Image Area */}
      <div className={styles.imageArea}>
        <div
          className={styles.imageBackground}
          style={{ backgroundImage: `url('${certification.image}')` }}
        ></div>
        <div className={styles.imageOverlay}></div>

        {/* Category Badge */}
        <div className={styles.categoryBadge}>
          <span>{certification.category}</span>
        </div>

        {/* Icon Badge */}
        <div className={styles.iconBadge}>
          <span className="material-symbols-outlined">{certification.icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h3 className={styles.title}>{certification.title}</h3>
          <p className={styles.issuer}>{certification.issuer}</p>
          <p className={styles.issuedDate}>{certification.issuedDate}</p>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.credentialId}>{certification.credentialId}</span>
          <a href={certification.credentialUrl} className={styles.viewButton}>
            View Credential
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
