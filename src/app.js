import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import App from '~/components/App'

import '~/plugins'
import '~/components'

import VuePikaday from '@enrian/vue-pikaday'
import '@enrian/vue-pikaday/dist/vue-pikaday.min.css'
Vue.use(VuePikaday)

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^ion-/]

/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
})
