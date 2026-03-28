import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import SearchMetadata from '@theme/SearchMetadata';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';

function getTagSlug(permalink) {
  return permalink.split('/').filter(Boolean).pop() || 'tag';
}

function getPageTitle(tag) {
  return `标签「${tag.label}」`;
}

function DocItem({doc}) {
  return (
    <article className="doc-tag-result">
      <Link className="doc-tag-result__link" to={doc.permalink}>
        <Heading as="h2" className="doc-tag-result__title">
          {doc.title}
        </Heading>
      </Link>
      {doc.description && (
        <p className="doc-tag-result__description">{doc.description}</p>
      )}
    </article>
  );
}

function DocTagDocListPageMetadata({title, tag}) {
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

function DocTagDocListPageContent({tag, title}) {
  const tagSlug = getTagSlug(tag.permalink);

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
      <div
        className="container margin-vert--lg doc-tag-page"
        data-doc-tag-slug={tagSlug}>
        <div className="row">
          <main className="col col--8 col--offset-2">
            {tag.unlisted && <Unlisted />}
            <header className="doc-tag-page__header">
              <p className="doc-tag-page__eyebrow">标签归档</p>
              <div className="doc-tag-page__headline">
                <span className="doc-tag-page__badge">{tag.label}</span>
                <span className="doc-tag-page__count">{tag.count} 篇文档</span>
              </div>
              <Heading as="h1" className="doc-tag-page__title">
                {title}
              </Heading>
              {tag.description && (
                <p className="doc-tag-page__description">{tag.description}</p>
              )}
            </header>
            <section className="doc-tag-page__list">
              {tag.items.map((doc) => (
                <DocItem key={doc.id} doc={doc} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagDocListPage(props) {
  const title = getPageTitle(props.tag);
  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} />
      <DocTagDocListPageContent {...props} title={title} />
    </>
  );
}
