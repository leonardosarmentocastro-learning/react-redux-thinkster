const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    /**
     * Wait for the promise to be resolved, and then dispatch the action to the reducer,
     * which will be handled on the "./index.js" to attach the payload of "Articles" into
     * the "state", reflecting in other components.
     */
    return action.payload
      .then(res => {
        action.payload = res;
        return store.dispatch(action);
      }, error => {
        action.error    = true;
        action.payload  = error.response.body;
        return store.dispatch(action);
      });
  }

  /**
   * If this is not a Promise, it will call the next action in the chain.
   */
  return next(action);
};

function isPromise(v) {
  return (v && typeof v.then === 'function');
}

export {promiseMiddleware};
