/**
 * NPM packages.
 */
import React from 'react';

/**
 * Project packages.
 */
import ArticlePreview from './article-preview';

const ArticleList = props => {
  const articles = props.articles;
  if (!articles) {
    const template = (
      <div className="article-preview">Loading...</div>
    );
    return template;
  }


  if (articles.length === 0) {
    const template = (
      <div className="article-preview">No articles are here... yet.</div>
    );
    return template;
  }

  const template = (
    <div>
      {
        articles.map(article => {
          const template = (
            <ArticlePreview article={article}/>
          );
          return template;
        })
      }
    </div>
  );
  return template;
}

export default ArticleList;
