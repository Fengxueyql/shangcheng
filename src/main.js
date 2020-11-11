import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import{ Api } from"./http/api"

Vue.config.productionTip = false


Vue.use(Vant);










Vue.prototype.$api=Api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
