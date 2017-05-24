import React from 'react';

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
            <h2>{article.title}</h2>
          );
          return template;
        })
      }
    </div>
  );
  return template;
}

export default ArticleList;
