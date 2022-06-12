import webMetaMaskConfig from '@/service/index'
import Web3 from 'web3'
const walletWb3 = new Web3(webMetaMaskConfig.webConfig.rpcUrls[0])
import config from '@/service/index'

// authorized usdt
export function approve(contract) {
  return new Promise((resolve, reject) => {
    const sum = walletWb3.utils.toWei(String(10000000000), 'ether')
    // Message({
    //   message:i18n.t('tip9'),
    //   type: 'success',
    //   duration: 0,
    //   iconClass: 'el-icon-loading colo1'
    // })
    walletRequst.send(
      fil_usdt_abi,
      symbol_contract,
      'approve',
      [contract, sum],
      true
    ).then(result => {
      // Message.closeAll()
      // Message({
      //   message:i18n.t('tip7'),
      //   type: 'success',
      //   duration: 2000
      // })
      resolve(result)
    }).catch((error) => {
      // Message.closeAll()
      // Message({
      //   message:i18n.t('tip8'),
      //   type: 'warning',
      //   duration: 2000
      // })
      resolve(false)
    })
  })
}

// get balance
export function getBalance(address) {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      const {contract, symbol_abi} = config.chiaIdConfig
      const _web3 = new Web3(window.ethereum)
      let _contract = new _web3.eth.Contract(symbol_abi, contract.symbol_contract)
      _contract.methods.balanceOf(address).call((err, result) => {
        let balance = _web3.utils.fromWei(result)
        resolve(balance)
      })
    }
  })
}
