/**
 * NPM packages.
 */
import React      from 'react';
import {connect}  from 'react-redux';

/**
 * Project packages.
 */
import ArticleList from '../article-list';

/**
 * This is a syntax sugar for "dumb" react components.
 */
const MainView = props => {
  const template = (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a
              href=""
              className="nav-link active">
              Global feed
            </a>
          </li>
        </ul>
      </div>

      <ArticleList articles={props.articles}/>
    </div>
  );

  return template;
}

const mapStateToProps = (state, ownProps = {}) => {
  const props = {
    articles: state.articles
  };

  return props;
};

/**
 * I still don't know which function is that so I will call it "fn".
 */
const fn = () => ({});
export default connect(mapStateToProps, fn)(MainView);
