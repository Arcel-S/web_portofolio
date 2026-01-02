import { useState } from 'react';
import styles from './Certifications.module.css';
import CertificationCard from './CertificationCard';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  const certifications = [
    {
      id: 1,
      title: 'Alibaba Cloud Certified Developer',
      category: 'Cloud',
      issuer: 'Alibaba Cloud',
      issuedDate: 'Aug 2023',
      credentialId: 'ABC-12345',
      credentialUrl: '#',
      icon: 'cloud',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEoL7VNvafy79LZ0in3EC1168g3f1kOuUqCbLw3MbE0EJnGobr3jUL69SLUGByJG_q84YZzA5w3Camhy1ah8Zm_OZZhWMzddCbgwj2qScHDgtUnQySIPiaQUI9baooH-jT6TUVi03EVH2ycINF9I0vMiLKyaF0LCTnKdNo7WEphihfAsPbTQ5ZQSvPfEqs0Cn0FamDn3PFDYB2_yxOgaFKE5KxyiuSCVaO7_2FDo-1osuR6AxBqM5odMSuONTuB_O-Qq_Up9Mvqmo',
    },
    {
      id: 2,
      title: 'Data Analyst Professional',
      category: 'Data',
      issuer: 'Dicoding Indonesia',
      issuedDate: 'Sep 2023',
      credentialId: 'DCD-DATA-99',
      credentialUrl: '#',
      icon: 'bar_chart',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqTyRhZBaMhM-eCVHTa6FV0z1XW9IXvaZ5vT4QXdETdeuy8t_VCEfcQVrDQFAN8GfTJvJBPNqP1mfTSHpKNiwVD59iUQZr2OmNV7wHP2dAM7Ym_T3pVqHTyRkzocxLpCuMbuQUnVhdN2ebzaBCS8y3-mSqKYe9EaNeMoTqDgNVl5F6QI9qdIr6lrcWCLopgUvzAYqs4mlpXNepmNPEV0TlBMFON9NtvkMnl0Z_vTUDw8toJik0TTW8fouTttZwNsfVq_iValRuZk',
    },
    {
      id: 3,
      title: 'Basic Artificial Intelligence',
      category: 'AI',
      issuer: 'Dicoding Indonesia',
      issuedDate: 'Oct 2023',
      credentialId: 'DCD-AI-01',
      credentialUrl: '#',
      icon: 'smart_toy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3fzp3Ed7iFCf-tJiP_ylyL3Q2xgndaQOdZZL6_GYLyxnps80BRULhcXkSj_m6O0S5hPn3ebThOWoXqL37Lv2CQMsAB5w3tIx-gUzn0YgWNR3PkyCBj4fJT4YqJazTHimA4EXBxe5JgWi909-4jz9KCUZ4Cp9hPfuzgwagKA3bqzezVO1TeZRInNhimAF1DrV5yW60p8LE58zru6FIq61ap0dcJ9fAPqS6aCNIgrqwQXJIdOp-gP4N_7RS3kkeqirk4Aly9iVpVL0',
    },
    {
      id: 4,
      title: 'Backend Development Expert',
      category: 'Backend',
      issuer: 'CodePolitan',
      issuedDate: 'Nov 2023',
      credentialId: 'CP-BE-X88',
      credentialUrl: '#',
      icon: 'dns',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfsCoqc9gFzdiJBQx1y0c660TsfJjRVdtgmzT4DRd09HqDrwqdMbydr6bPtueJ6BEeHXWQQQ47clWQCotCq76QCGvS0hpgYI3Rkuto1peHUztj_2ocVSyTLlk8eiF_eABMkGTntYH8Vx-0q9FvhOEeAfZZo1nLwYGOm-B2URPxZHVNyWZUHmoPKEWGS07IrPfbD4FR416oTeBkkx2obRc7OvCeauC4AqQQpV3qyUB9U2IKCUwVYM2p61YSz8A-oubnHfZz6-MnTk8',
    },
    {
      id: 5,
      title: 'Data Stories & Viz',
      category: 'Data',
      issuer: 'Smartpath',
      issuedDate: 'Dec 2023',
      credentialId: 'SP-DS-004',
      credentialUrl: '#',
      icon: 'pie_chart',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATFCc1vgLvb23YCEb2Oi0mnCPLSmuHHGGQLqGN4mKy5A0TBtQoAaKYkGwkUAnFtGux_ksyLJpjOyhCiPW_CPTMEggB7kDkko0pGP6l_LyYX_JGLrfaCnW1QhoIiYYtaNXXP9gEL0FC1TTTuqEm3cwrclWxS--e2uFgqu5xy3uk7UOMZmSOPg06o5hDbvelaKkJZzEGanQl5-GGEiClT88kxMQtT4XjeBHRiGGAF5sCtWsWoCkU6gjcLSVD0CKDPfRH-oGLABwjDzg',
    },
  ];

  const filters = ['All', 'Cloud', 'Data', 'AI', 'Backend'];

  const filteredCertifications =
    activeFilter === 'All'
      ? certifications
      : certifications.filter((cert) => cert.category === activeFilter);

  return (
    <section className={styles.certificationsSection}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.iconBadge}>
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <h1 className={styles.sectionTitle}>
              Certification <span className={styles.highlightText}>Gallery</span>
            </h1>
            <p className={styles.sectionDescription}>
              Showcasing professional expertise in Cloud Computing, Data Analysis, and AI through
              validated credentials.
            </p>
          </div>

          {/* Filter Chips */}
          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterChip} ${
                  activeFilter === filter ? styles.filterChipActive : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                <span>{filter}</span>
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className={styles.certsGrid}>
            {filteredCertifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}

            {/* Placeholder Card */}
            <div className={styles.placeholderCard}>
              <div className={styles.placeholderContent}>
                <div className={styles.placeholderIcon}>
                  <span className="material-symbols-outlined">add</span>
                </div>
                <h3 className={styles.placeholderTitle}>Upcoming Certification</h3>
                <p className={styles.placeholderDesc}>
                  Currently pursuing Google Cloud Professional Architect
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
