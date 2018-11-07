import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import App from '~/components/App'

import '~/plugins'
import '~/components'
import VueMaterialIcon from 'vue-material-icon'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

Vue.component(VueMaterialIcon.name, VueMaterialIcon)

Vue.config.productionTip = false

Vue.config.ignoredElements = [/^ion-/]

/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
})
