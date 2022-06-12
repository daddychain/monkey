import Web3 from 'web3'
import store from '@/store/index'
import config from '@/service/index'
import message from '@/plugins/message/index'
import utils from '@/utils/index'

let ethereum = window.ethereum
let web3Client  = window.web3
let isFirst

const connectNetwork = async () => {
  if (window.ethereum) {
    try {
      // switch network
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: config.webConfig.chainId }],
      })
      if (!utils.isMobile()) {
        window.location.reload()
      } else {
        store.dispatch('registerWeb3')
      }
      // store.dispatch('registerWeb3')
    } catch (err) {
      // add network
      if (err.code === 4902) {
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [config.webConfig]
        }).then(res => {
          // store.dispatch('registerWeb3')
          // window.location.reload()
        }).catch(e => {
        })
      }
    }
  } else {
    message({message: 'No BSC wallet found', type: 'warning'})
  }
}

/**
 * connect wallet
 */
const connectMetaMask = () => {
  return new Promise(async(resolve, reject) => {
    if (!ethereum) {
      message({message: 'Please install wallet', type: 'warning'})
      reject('User not have wallet installed')
      return
    }
    web3Client  = new Web3(ethereum)
    ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(accounts => {
      resolve(accounts)
    })
    .catch(err => {
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
        reject('reject')
      } else {
        console.error(err);
        reject(err)
      }
    })
  })
}

// get network id
const getNetwork = () => {
  return new Promise((resolve, reject) => {
    new Web3(ethereum).eth.getChainId().then(chainId => {
      // if (chainId === config.chiaIdConfig.chainId) {
      //   resolve(chainId)
      // } else {
      //   if (!isFirst) {
      //     connectNetwork()
      //   }
      // }
      if (chainId !== config.chiaIdConfig.chainId) {
        if (!isFirst) {
          connectNetwork()
        }
      }
      resolve(chainId)
    }).catch(err => {
      reject('Network Error')
    })
  })
}

if (ethereum) {
  new Web3(ethereum).eth.getCoinbase().then(res => {
    isFirst = res
  })
  ethereum.on('accountsChanged', accounts => {
    const chainId = store.state.web3Register.chainId
    if (chainId && (chainId === config.chiaIdConfig.chainId)) {
      window.location.reload()
    }
  })
  // Monitor network changes
  ethereum.on('chainChanged', (chainId) => {
    if (!utils.isMobile()) {
      window.location.reload()
    } else {
      store.dispatch('registerWeb3')
    }
  })
}

// async function getWeb3() {
//   let accounts = await connectMetaMask()
//   let networkId = await getNetwork()
//   console.log(networkId)
//   let address = ethereum.selectedAddress
//   let balance = await getBalance(address)
//   console.log('重新初始化')
//   return Object.assign({}, web3, {networkId, address, balance, isConnected})
// }

export {
  connectMetaMask,
  getNetwork,
  connectNetwork,
}
