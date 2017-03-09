<template>
  <div>
    <!--{{$route.query}}-->
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>

    <coins-from></coins-from>

    <router-view></router-view>

    <coins-person></coins-person>
  </div>
</template>

<script>
  import Head from "../Head.vue"
  import CoinsFast from "./Coins_Fast.vue"
  import CoinsFrom from "./Coins_From.vue"
  import CoinsPerson from "./Coins_Person.vue"
  import CoinsSome from "./Coins_Some.vue"

  export default {
    name: "ListCoins",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    components: {
      "coins-head": Head,
      "coins-fast": CoinsFast,
      "coins-from": CoinsFrom,
      "coins-person": CoinsPerson,
      "coins-some": CoinsSome
    }
  }
</script>
