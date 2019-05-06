// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import 'jquery'
import App from './App'
import router from './router'

//使用饿了么UI
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.axios = axios
// axios.defaults.baseURL = '/bilibili'
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
