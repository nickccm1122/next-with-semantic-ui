import { put, takeLatest } from 'redux-saga/effects'

import { AppTypes } from '../redux/appRedux'

function * appInitRequest () {
  console.log('Initializing app!!!')
  put(AppTypes.APP_INIT_REQUEST_SUCCESS)
}

export default [
  takeLatest(AppTypes.INIT, appInitRequest)
]
