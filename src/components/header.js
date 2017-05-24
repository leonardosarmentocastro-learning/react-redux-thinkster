/**
 * NPM Packages.
 */
import React from 'react';

class Header extends React.Component {
  render() {
    const template = (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </a>
        </div>
      </nav>
    );

    return template;
  }
}

export default Header;
