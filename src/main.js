// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//mint ui 插件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Loadmore from 'vue-loadmore'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.component('Loadmore', Loadmore)
Vue.use(Mint);

// //等待框
// import Indicator from 'vue-indicator';
// Vue.use(Indicator);
// Vue.component('Indicator', Indicator)
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
