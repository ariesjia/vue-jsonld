import Vue from 'vue'
import VueJsonLD from '../src/index.ts'
import App from './app'

Vue.use(VueJsonLD)

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')
