// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import "./css/reset.css"
import "mint-ui/lib/style.css"
import "./iconfont/iconfont.css"
import store from "./stores/publicStores.js"
Vue.config.productionTip = false
import PageTransition from "@/components/PageTransition"
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
