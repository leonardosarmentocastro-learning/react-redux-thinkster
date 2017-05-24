/**
 * NPM Packages.
 */
import React from 'react';

/**
 * This is a syntax sugar for "dumb" React components, which just returns a template.
 */
const Banner = ({appName}) => {
  const template = (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );

  return template;
}

export default Banner;
