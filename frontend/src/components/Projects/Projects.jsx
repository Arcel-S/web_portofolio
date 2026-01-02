import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Financial Data ETL Pipeline',
      description:
        'Automated data ingestion pipeline processing 500k+ daily transactions. Includes data cleaning, normalization, and automated reporting dashboards.',
      category: 'Data Engineering',
      icon: 'finance',
      tech: ['Python', 'SQL'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Full-stack online store featuring real-time inventory management, secure Stripe payment integration, and an admin dashboard.',
      category: 'Web Development',
      icon: 'shopping_bag',
      tech: ['React', 'Node'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      id: 3,
      title: 'Customer Churn Prediction',
      description:
        'Machine learning model that analyzes customer behavior patterns to predict churn probability with 92% accuracy on test data.',
      category: 'AI / ML',
      icon: 'psychology',
      tech: ['TensorFlow', 'Pandas'],
      codeLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleBar}></span>
            Selected Projects
          </h2>
          <div className={styles.divider}></div>
          <a 
          href="https://github.com/Arcel-S/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.viewGithubLink}>
            View Github{' '}
            <span className={`material-symbols-outlined ${styles.arrowIcon}`}>
              arrow_forward
            </span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
