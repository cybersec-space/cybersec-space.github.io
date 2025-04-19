import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Import the list of quotes
import quotes from '@site/src/data/quotes.json';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const initialIndex = Math.floor(Date.now() / 86400000) % quotes.length;
  const [quoteIndex, setQuoteIndex] = useState(initialIndex);

  const handleNextQuote = () => {
    setQuoteIndex((quoteIndex + 1) % quotes.length);
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>"{currentQuote.quote}"</p>
          <footer className={styles.quoteAuthor}>— {currentQuote.author}</footer>
        </blockquote>
        <button className={styles.nextButton} onClick={handleNextQuote}>
          Next Quote
        </button>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <HomepageFeatures />
      </main>
      <HomepageHeader />
    </Layout>
  );
}
