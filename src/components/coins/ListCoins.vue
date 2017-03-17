<template>
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <coins-fast></coins-fast>
    <coins-person></coins-person>
  </div>
</template>

<script>
  import Head from "../Head.vue"
  import CoinsFast from "./Coins_Fast.vue"
  import CoinsForm from "./Coins_Form.vue"
  import CoinsPerson from "./Coins_Person.vue"
  import CoinsSome from "./Coins_Some.vue"

  export default {
    name: "ListCoins",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        test: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list).list: []
      }
    },
    components: {
      "coins-head": Head,
      "coins-fast": CoinsFast,
      "coins-from": CoinsForm,
      "coins-from": CoinsForm,
      "coins-person": CoinsPerson,
      "coins-some": CoinsSome
    }
  }
</script>
