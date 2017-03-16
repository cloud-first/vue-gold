/**
 * Created by zy on 2017/3/16.
 */


const CoinsType = resolve => {
  require.ensure(['./../components/coins/Coins_Type.vue'],()=>{
    resolve(require('./../components/coins/Coins_Type.vue'));
  },'Coins_Type');
};
const ListCoins = resolve => {
  require.ensure(['./../components/coins/ListCoins.vue'],()=>{
    resolve(require('./../components/coins/ListCoins.vue'));
  },'Coins_Type');
};
const CoinsOrder = resolve => {
  require.ensure(['./../components/coins/Coins_Order.vue'],()=>{
    resolve(require('./../components/coins/Coins_Order.vue'));
  },'Coins_Type');
};


export const coinsType =
  {
    path:'/vue/coins-type',
    components:{
      default : CoinsType,
    },
    children:[
    {
      path: '/vue/coins-type/list-coins',
      components :{
        default:ListCoins
      },
      name: 'ListCoins',
    },{
      path: "/menu/coins-type/coins-order",
      components:{
        default:CoinsOrder
      },
       name: 'CoinsOrder',
    }
    ]
  }



// export default new Router({
//   routes: [
//     {
//       path: '/list-coins',
//       // name: 'ListCoins',
//       component: ListCoins,
//       children: [{
//         path: "",
//         name: "CoinsFast",
//         component: CoinsFast
//       }, {
//         path: "coins-some",
//         name: "CoinsSome",
//         component: CoinsSome
//       },
//       ]
//     },
//     {
//       path: "/menu",
//       name: 'Menu',
//       component: Menu
//     },
//     {
//       path: "/coins-order",
//       name: 'CoinsOrder',
//       component: CoinsOrder
//     },
//     {
//       path: "*",
//       redirect: "/menu"
//     }
//   ]
// })
