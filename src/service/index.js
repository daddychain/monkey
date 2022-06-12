import env from './env'
import test from './test'
import eth from './eth'
import main from './main'

const MetaMaskConfig = {
  ...test,
  ...eth,
  ...main,
}

export default MetaMaskConfig[env]
