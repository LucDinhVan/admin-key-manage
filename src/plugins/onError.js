import { message } from 'antd'

const onError = {
  onError(e, a) {
    e.preventDefault()
    if (e.message) {
      message.error(e.message)
    } else {
      /* eslint-disable */
      console.error(e)
    }
  },
}

export default onError
