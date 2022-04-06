import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import PayPal from 'vue-paypal-checkout'

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
