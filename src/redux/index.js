import { combineReducers } from 'redux'
import withRedux from 'next-redux-wrapper'
// import nextReduxSaga from 'next-redux-saga'
import configureStore from './createStore'
// import rootSaga from '../sagas/'

export function withReduxSaga (BaseComponent) {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    app: require('./appRedux').reducer
  })

  const makeStore = () => configureStore(rootReducer, null)

  return withRedux(makeStore)(BaseComponent)
}
