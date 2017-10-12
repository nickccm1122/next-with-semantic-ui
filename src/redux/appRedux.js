import { createActions, createReducer } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  appInitRequest: null,
  appInitRequestSuccess: null
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Map({
  appName: null,
  isInitializing: false
})

/* ------------- Reducers ------------- */

export const appInitRequest = (state) => state.merge({
  isInitializing: true
})
export const appInitRequestSuccess = (state) => {
  console.log('App init done!')
  return state.merge({
    appName: 'Next React App',
    isInitializing: false
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APP_INIT_REQUEST]: appInitRequest,
  [Types.APP_INIT_REQUEST_SUCCESS]: appInitRequestSuccess
})
