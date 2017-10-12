import mergeDeepRight from 'ramda/src/mergeDeepRight'
import propOr from 'ramda/src/propOr'

const appEnv =
  process.env.NODE_ENV || 'development'
const getConfigByNodeEnv = propOr({}, appEnv)

const config = {
  default: {
    debug: true
  },
  staging: {
    debug: true
  },
  production: {
    debug: false
  }
}

export default mergeDeepRight(config.default, getConfigByNodeEnv(config))
