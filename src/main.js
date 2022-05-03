import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import PayPal from 'vue-paypal-checkout'
import VueMeta from 'vue-meta'

import MuktaRegular from './assets/fonts/Mukta-Regular.ttf';
//import './assets/fonts/fonts.scss'
console.log(MuktaRegular)

Vue.config.productionTip = false

Vue.use(PayPal)

Vue.filter('dinheiro', valor => {
	return `${parseFloat(valor).toFixed(2)} €`.replace('.', '.')
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueMeta, {
  keyName: 'head'
})