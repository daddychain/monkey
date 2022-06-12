import Vue from 'vue'
import Vuex from 'vuex'
import to from 'await-to-js'
import {connectMetaMask, getNetwork} from '@/utils/getWeb3'
import config from '@/service/index'
import utils from '@/utils/index'
import message from '@/plugins/message/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // web3: null,
    web3Register: {},
    balance: 0,
    gain: utils.randomNumber(),
    baseNum: 80
    // true-The network ID is correct and the account address has been obtained
  },
  getters: {
  },
  mutations: {
    register (state, payload) {
      state.web3Register = payload
    },
    balance(state, payload) {
      state.balance = payload
    }
  },
  actions: {
    getBalance({commit}, data) {
      commit('balance', data)
    },
    async registerWeb3 ({commit}) {
      const [err, accounts] = await to(connectMetaMask())
      const [_err, chainId] = await to(getNetwork())
      let isEffectNetwork = false
      if (chainId == config.chiaIdConfig.chainId) {
        isEffectNetwork = true
      } else {
        commit('balance', 0)
      }
      const data = {
        accounts: (accounts === undefined || !isEffectNetwork)? '':accounts[0],
        chainId: isEffectNetwork? chainId:'',
        isLogin: accounts && isEffectNetwork
      }
      if (data.isLogin) {
        message({message: 'Wallet connected successfully', type: 'success', customClass: 'msg'})
      }
      commit('register', data)
    }
  },
  modules: {
  }
})
