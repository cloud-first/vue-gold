import Vue from 'vue'
import Router from 'vue-router'
import ListCoins from '../components/ListCoins'
import Menu from '../components/Menu'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list-coins',
      name: 'ListCoins',
      component: ListCoins
    },
    {
      path: "/menu",
      name: 'Menu',
      component: Menu
    },
    {
      path: "*",
      redirect: "/menu"
    }
  ]
})
