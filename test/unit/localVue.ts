import { createLocalVue } from '@vue/test-utils'
import VueJsonLD from '../../src/index'

const Vue = createLocalVue()

Vue.use(VueJsonLD, {
  batchTime: 0,
  space: 4,
})

export default Vue

export const flushTimeout = (timeout? :number = 0) => new Promise((resolve) => {
  setTimeout(resolve, timeout)
})
