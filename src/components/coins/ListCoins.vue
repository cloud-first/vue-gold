<template>
  <div id="listCoins">
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <coins-fast v-if="coinsFast"></coins-fast>
    <coins-person></coins-person>
  </div>
</template>

<script>
  import Head from "../publicCoins/Head.vue"
  import CoinsFast from "./CoinsFast.vue"
  import CoinsPerson from "./CoinsPerson.vue"
  export default {
    name: "ListCoins",
    data () {
      return {


        msg: 'Welcome to Your Vue.js App',
        isTest: (typeof this.$route.query.list == 'string') ? JSON.parse(this.$route.query.list).list : [],
        coinsFast: true,
        coinsFast: this.$route.query.isGoldMallEnable == '2' ? false : true
      }
    },
    components: {
      "coins-head": Head,
      "coins-fast": CoinsFast,
      "coins-person": CoinsPerson,

    },
    created () {
    },
    mounted(){
      if (this.$route.query.isGoldMallEnable == '2') {
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.97+"rem";

      }else{
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.2+"rem";
      }
    },

  }
</script>

<style scoped>

</style>
