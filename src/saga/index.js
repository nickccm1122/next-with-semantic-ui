// import { all, takeLatest, takeEvery } from 'redux-saga/effects'

/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */

import appSagas from './appSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    appSagas
  ]
}
