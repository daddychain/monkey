import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/common.scss'
import Utils from '@/utils/index'
import Web3 from 'web3'
import message from './plugins/message/index'
import config from './service/index'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$axios = axios
Vue.use(VueClipboard)

Vue.prototype.$msg = message
Vue.prototype.$utils = Utils
Vue.prototype.$moment = moment
Vue.prototype.$Web3 = Web3
Vue.prototype.$config = config.chiaIdConfig;
Vue.prototype.$metaMaSKWeb3 = new Web3(window.ethereum)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
