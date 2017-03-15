import Vue from 'vue'
import Router from 'vue-router'
import ListCoins from '../components/coins/ListCoins'
import Menu from '../components/Menu'
import DropDown from '../components/DropDown'
import CoinsSome from '../components/coins/Coins_Some'
import CoinsFast from '../components/coins/Coins_Fast'
import CoinsOrder from '../components/coins/Coins_Order'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list-coins',
      // name: 'ListCoins',
      component: ListCoins,
      children: [{
        path: "",
        name: "CoinsFast",
        component: CoinsFast
      }, {
        path: "coins-some",
        name: "CoinsSome",
        component: CoinsSome
      },
      ]
    },
    {
      path: "/menu",
      name: 'Menu',
      component: Menu
    },
    {
      path: "/coins-order",
      name: 'CoinsOrder',
      component: CoinsOrder
    },

    {
      path: "*",
      redirect: "/menu"
    }
  ]
})
