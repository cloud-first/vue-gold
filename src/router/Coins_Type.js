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
const CoinsSome = resolve => {
  require.ensure(['./../components/coins/Coins_Some.vue'],()=>{
    resolve(require('./../components/coins/Coins_Some.vue'));
  },'Coins_Type');
};
const CoinsElse = resolve => {
  require.ensure(['./../components/coins/Coins_Else.vue'],()=>{
    resolve(require('./../components/coins/Coins_Else.vue'));
  },'Coins_Type');
};
const CoinsSales = resolve => {
  require.ensure(['./../components/coins/Coins_Sales.vue'],()=>{
    resolve(require('./../components/coins/Coins_Sales.vue'));
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
      path: "/vue/coins-type/coins-order",
      components:{
        default:CoinsOrder
      },
       name: 'CoinsOrder',
    },{
        path: "/menu/coins-type/coins-some",
        components:{
          default:CoinsSome
        },
        name: 'CoinsSome',
      },{
        path: "/menu/coins-type/coins-else",
        components:{
          default:CoinsElse
        },
        name: 'CoinsElse',
      },{
        path: "/menu/coins-type/coins-sales",
        components:{
          default:CoinsSales
        },
        name: 'CoinsSales',
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
