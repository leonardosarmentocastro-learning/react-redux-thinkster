/**
 * NPM packages.
 */
import React      from 'react';
import {connect}  from 'react-redux';

/**
 * Project packages.
 */
import Banner   from './banner';
import MainView from './main-view';

class Home extends React.Component {
  render() {
    const template = (
      <div className="home-page">
        <Banner appName={this.props.appName}/>

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return template;
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  const props = {
    appName: state.appName
  };

  return props;
};

/**
 * I still don't know which function is that so I will call it "fn".
 */
const fn = () => ({});
export default connect(mapStateToProps, fn)(Home);
