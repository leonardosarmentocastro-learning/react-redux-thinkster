/**
 * NPM packages.
 */
import ReactDOM from 'react-dom';
import React    from 'react';
import {createStore} from 'redux';

/**
 *
 */
const defaultState  = {checked: false};
const reducer       = function(state = defaultState, action) {
  switch(action.type) {
    case 'TOGGLE':
      const checked = state.checked;
      return {...state, checked: !checked};
  }

  return state;
};
const store         = createStore(reducer);


class App extends React.Component {
  constructor() {
    super();

    /**
     * Initializing the state as a default object.
     */
    this.state = {};
  }

  componentWillMount() {
    /**
     * The 'subscribe' will listen to changes on the 'state', which means,
     * everytime you 'dispatch' an action that changes the 'state', this 'subscribe' function
     * will be called, and that is the time where you attach the new state to your component.
     */
    store.subscribe(() => {
      console.log('Woah, the state has changed! Let\'s attach it to our component.');

      const state = {new: store.getState()};
      this.setState(state.new);
    });
  }

  render() {
    const onClick = () => store.dispatch({type: 'TOGGLE'});

    return (
      <div>
        <h1>To-dos</h1>
        <div>
          Learn Redux&nbsp;
          <input
            type='checkbox'
            checked={!!this.state.checked}
            onClick={onClick} />
        </div>
        {
          this.state.checked? (<h2>Done!</h2>) : null
        }
      </div>
    );
  }
}

ReactDOM.render((<App />), document.getElementById('root'));
