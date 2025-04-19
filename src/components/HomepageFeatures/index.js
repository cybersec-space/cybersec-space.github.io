import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Programming',
    link: '/docs/Programming/basics-of-programming',
    description: (
      <>
        A program is a series of instructions written in a specific language like C, C++, Python, Go, Rust etc.
        Programming is a very natural and intuitive concept.
      </>
    ),
  },
  {
    title: 'Cybersecurity',
    link: '/docs/Cybersecurity/intro-to-cybersecurity',
    description: (
      <>
        The practice of protecting computer systems, networks, and data from digital threats, 
        to ensure confidentiality, integrity, and availability.
        Learn on domains like networking, countermeasures, cryptology, shellcode etc.
      </>
    ),
  },
  {
    title: 'DevOps',
    link: 'docs/category/devops',
    description: (
      <>
        Practices that combines software development (Dev) and IT operations (Ops) 
        to streamline and automate the end-to-end software delivery pipeline for faster and more reliable releases.
      </>
    ),
  },
  
];

function Feature({title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link 
        to={link} 
        className={clsx(styles.card, 'card', styles.textCard)}
        style={{ textDecoration: 'none' }} // Removes underline from entire card
      >
        <div className="card__body">
          <div className={styles.cardHeader}>
            <h3 className={styles.featureLink}>{title}</h3> {/* Only title has link styling */}
          </div>
          <div className={styles.cardContent}>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}