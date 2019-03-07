/**
 * 使用 babel-polyfill 有三种:
 * 1: 在 main.js里 import 'babel-polyfill'
 * 2: 在 node中: require('babel-polyfill');
 * 3: 在 webpack中的entry入口中 ['babel-polyfill','./src/main.js']
 */
// import 'babel-polyfill'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './app.vue'
Vue.use(ElementUI)

const GLOBAL_VUE_INSTANCE = new Vue({
  // 实际上<App/>写法表示要选择的组件,因为components参数里其实可以放多个组件对象,
  // 比如：components:{App,App2,App3},如果想用App2,则需要设置template: '<App2/>',这是template参数最常见的用法.
  components: { App }, // 使用哪个组件
  template: '<App/>',
  // el 这样的参数意义比较明显,就是要被替换的index.html中的元素
  // el: '#errorId' // 必须是 index.html 中定义的 id 🚀🚀🚀
  // el: '#app' // 可以替换掉 【 GLOBAL_VUE_INSTANCE.$mount('#app') 】 🚀🚀🚀
})

// 这种方式是常规方式
// new Vue({
//   template: '<App/>',
//   components: { App },
//   el: '#app',
//   // router,
//   // store
// })

// 将Vue实例放到window对象上,便于全局调用 🚀🚀🚀 
window.GLOBAL_VUE_INSTANCE = GLOBAL_VUE_INSTANCE
// #app是index.html中<div id="app"></div>
GLOBAL_VUE_INSTANCE.$mount('#app')