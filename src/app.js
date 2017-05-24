/**
 * NPM packages.
 */
import React      from 'react';
import {connect}  from 'react-redux';

/**
 * Project packages.
 */
import Header from './components/header';
import Home   from './components/home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName}/>
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  const props = {
    appName: 'Conduit'
  };

  return props;
}

/**
 * I still don't know which function is that so I will call it "fn".
 */
const fn = () => ({});
export default connect(mapStateToProps, fn)(App);
