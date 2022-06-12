import config from '@/service/index'
import store from '@/store/index'
import Web3 from 'web3'
import moment from 'moment'

let utils = {
  isMobile: function (url) {
    let flag = navigator.userAgent.match(/(phone|pad|mkccapp|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag ? true : false;
  },
  centerEllipsis (str, num = 8) {
    if (str) {
      if (str.length > num * 2) {
        const firstStr = str.substr(0, num)
        const lastStr = str.substr(-num, num)
        return firstStr + '...' + lastStr
      } else {
        return str
      }
    }
  },
  getBalance (addresse) {
    return new Promise((resolve, reject) => {
      const web3 = new Web3(window.ethereum)
      const {chiaIdConfig} = config
      const contract = new web3.eth.Contract(chiaIdConfig.gi_abi, chiaIdConfig.contract.gi_contract)
      contract.methods.balanceOf(addresse).call((err, result) => {
        if (!result) return
        const balance = parseFloat(Web3.utils.fromWei(result, 'ether'))
        store.dispatch('getBalance', balance)
        resolve(balance)
      })
    })
  },
  /**
   * 获取两个UTC日期之间间隔的天数
   * @param end   结束日期时间戳
   * @param start 开始日期时间戳，毫秒
   * @returns {number}
   */
  dateDiff(end, start) {
    const _start = start || new Date().getTime()
    const startDateUtc = moment(_start).utc().format('YYYY-MM-DD HH:mm:ss')
    const endDateUtc = moment(end).utc().format('YYYY-MM-DD HH:mm:ss')
    const seconds = moment(endDateUtc).diff(startDateUtc, 'seconds')
    return seconds
    // if (seconds < 86400) {
    //   // 间隔时间小于24小时, 须返回Number
    //   return seconds
    // } else {
    //   // 间隔时间大于等于24小时返回天数, 须返回String
    //   return `${moment(endDateUtc).diff(startDateUtc, 'day')}`
    // }
  },
  randomNumber(min = 33, max = 35) {
    const num = Math.random() * (max - min) + min
    return Number(String(num).substr(0, 5))
  },
  forMatPrice(num, len = 2, isCut = true) {
    let str
    if (isCut) {
      num = num.toString()
      let index = num.indexOf('.')
      if (index !== -1) {
        num = num.substring(0, len + index + 1)
      } else {
        num = num.substring(0)
      }
      str = parseFloat(num).toFixed(len)
    } else {
      str = Number(num).toFixed(len)
    }
    if (!Boolean(str)) return '0'
    if (!(/^[0-9.]+$/g.test(str))) return '0';
    while (str.includes(".") && (str.endsWith('.') || str.endsWith('0'))) {
      str = str.slice(0, -1)
    }
    return Number(str)
  },
}

export default utils
