import Vue from 'vue'
import Router from 'vue-router'
import ListCoins from '../components/coins/ListCoins'
import Menu from '../components/publicCoins/Menu'
// import DropDown from '../components/DropDown'
// import CoinsSome from '../components/coins/Coins_Some'
// import CoinsFast from '../components/coins/Coins_Fast'
// import CoinsOrder from '../components/coins/Coins_Order'

import {coinsType} from './coinsType.js'
import {quickLogin} from './quickLogin.js'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/menu",
      name:'Menu',
      component:Menu
    },
    coinsType,
    quickLogin,
    // {
    //   path: '*',
    //   redirect: "/menu",
    // },

  ]
})

