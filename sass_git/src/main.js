// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import { Loading } from 'element-ui'
Vue.prototype.Loading=Loading;
// import vue from 'vue';
// export default new Vue();

// import VueBus from './vue-bus'
// Vue.use(VueBus);
Vue.config.productionTip = false

import axios from '@/assets/js/server.js'
Vue.prototype.$http = axios;
Vue.prototype.host='http://123.57.56.167:8010/api/'
// Vue.prototype.host='http://saas.rchang.cn/api/'



// const host='http://saas.rchang.cn/api/'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
