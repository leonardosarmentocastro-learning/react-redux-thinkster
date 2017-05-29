/**
 * NPM packages.
 */
import React      from 'react';
import {connect}  from 'react-redux';

/**
 * Project packages.
 */
import agent    from './../../agent';
import Banner   from './banner';
import MainView from './main-view';

class Home extends React.Component {
  componentWillMount() {
    /**
     * This will be resolved by the "middleware.js", which will wait for this Promise
     * to be resolved and then transform the "payload" into the actual JSON of "Articles".
     */
    const payload = agent.Articles.all();
    this.props.onLoad(payload);
  }

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

const mapDispatchToProps = (dispatch) => {
  const props = {
    /**
     * This will enable the component "Home" to call the function "onLoad" on the
     * "componentWillMount" method, passing the "agent.Articles.all()" as a payload.
     * NOTE: This seems a bit weird for me, because the "payload" will be the Promise and
     * and the "payload" converted as a JSON itself, but.. lets get going.
     */
    onLoad: function(payload) {
      const action = {type: 'HOME_PAGE_LOADED', payload};
      return dispatch(action);
    }
  };

  return props;
};

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
