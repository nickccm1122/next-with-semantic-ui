import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import Immutable from 'immutable'
import { createLogger } from 'redux-logger'
import config from '../config/'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  // const sagaMiddleware = createSagaMiddleware({})
  // middleware.push(sagaMiddleware)

  /* ------------- Redux logger Middleware ------------- */
  if (config.debug) {
    const logger = createLogger({
      stateTransformer: state => {
        let newState = {}

        for (var i of Object.keys(state)) {
          if (Immutable.Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS()
          } else {
            newState[i] = state[i]
          }
        }

        return newState
      }
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(
    rootReducer,
    compose(
      ...enhancers,
      // Redux Dev Tools
      typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  // kick off root saga
  // sagaMiddleware.run(rootSaga)

  return store
}
