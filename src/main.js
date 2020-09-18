// ie polyfill
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import bootstrap from './core/bootstrap'
import '@/style/font-awesome/css/font-awesome.css'
import './core/use'
import './utils/filter' // global filter
import './style/indexModity.css'
import 'xe-utils'
import echarts from 'echarts'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.prototype.$echarts = echarts
Vue.prototype.globalTimes = 3000
Vue.config.productionTip = false
Vue.use(VueAxios)

Vue.use(VueAwesomeSwiper /* { default global options } */)
window.onresize = () => {
  console.log((new Date()).getTime())
  Vue.prototype.globalSize = (new Date()).getTime()
}
new Vue({
  router,
  store,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
