import Vue from 'vue'
import VueRouter from 'vue-router'
import VueJsonLD from '../src/index.ts'
import App from './app'
import Page from './page2'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/page', component: Page },
]

Vue.use(VueJsonLD)

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h('router-view')
})

app.$mount('#app')
