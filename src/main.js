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
// import VueHighlightJS from 'vue-highlightjs'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

//使用饿了么UI
Vue.use(ElementUI);
// 使用代码高亮
// Vue.use(VueHighlightJS);

Vue.config.productionTip = false
Vue.prototype.axios = axios
// axios.defaults.baseURL = '/bilibili'
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)    
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

