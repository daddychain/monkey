import { Message } from 'element-ui'

const $msg = (options) => {
  Message.closeAll()
  Message(options)
}
export default $msg
