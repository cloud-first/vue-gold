<template>
  <div id="listCoins">
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <coins-fast v-if="coinsFast"></coins-fast>
    <coins-person></coins-person>
  </div>
</template>

<script>
  import Head from "../Head.vue"
  import CoinsFast from "./CoinsFast.vue"
  import CoinsPerson from "./CoinsPerson.vue"
  export default {
    name: "ListCoins",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isTest: (typeof this.$route.query.list == 'string') ? JSON.parse(this.$route.query.list).list : [],
        coinsFast: true,
        coinsFast: this.$route.query.status == '2' ? false : true
      }
    },
    components: {
      "coins-head": Head,
      "coins-fast": CoinsFast,
      "coins-person": CoinsPerson,

    },
    created () {

//      this.$http.get(
//        '/api/mobile-searchCenter-service/rs/purchaseData/getGoldMallOpenedStatus',
//        {
//          gameName: "地下城与勇士",
//        },
//        {
//          headers: {
//            contentType: "aplication/json; charset = UTF-8",
//            dataType: 'json'
//          }
//        }
//      ).then((res) => {
//        res = res.body;
//        if (res.responseStatus.code == '00') {
//          console.log("55566555")
//
//        }
//      }, () => {
//        console.log("请求错误！");
//        resolve({list: []})
//      });


    },
    mounted(){
      if (this.$route.query.status == '2') {
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.97+"rem";

      }else{
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.2+"rem";
      }
    },

  }
</script>

<style scoped>
  .mt-97{
    marginTop:0.97rem !important;
  }
</style>
