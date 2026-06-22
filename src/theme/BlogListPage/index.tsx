import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import type {Props} from '@theme/BlogListPage';
import Heading from '@theme/Heading';
import SearchMetadata from '@theme/SearchMetadata';

import styles from './styles.module.css';

function BlogListPageMetadata({metadata}: Props): ReactNode {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;

  return (
    <>
      <PageMetadata
        title={permalink === '/' ? siteTitle : blogTitle}
        description={blogDescription}
      />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent({metadata, items, sidebar}: Props): ReactNode {
  return (
    <BlogLayout sidebar={sidebar}>
      {items.length > 0 ? (
        <>
          <BlogPostItems items={items} />
          <BlogListPaginator metadata={metadata} />
        </>
      ) : (
        <section className={styles.emptyState}>
          <Heading as="h1">Blogs</Heading>
          <p>There are no posts yet. New writing will appear here.</p>
        </section>
      )}
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
