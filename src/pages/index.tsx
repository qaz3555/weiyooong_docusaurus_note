import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Notes and Blogs"
      description="Weiyooong's notes and blogs.">
      <main className={styles.home}>
        <div className={styles.content}>
          <Heading as="h1" className={styles.title}>
            Weiyooong
          </Heading>
          <nav className={styles.entries} aria-label="Content">
            <Link className={styles.entry} to="/docs/intro">
              <span>
                <strong>Notes</strong>
                <small>Systematic information</small>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.entry} to="/blog">
              <span>
                <strong>Blogs</strong>
                <small>Fragmented thoughts</small>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </main>
    </Layout>
  );
}
