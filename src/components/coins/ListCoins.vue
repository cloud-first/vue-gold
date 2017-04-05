<template>
  <div id="listCoins">
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <coins-fast v-if="coinsFast" :url="isTest"></coins-fast>
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
        list: [],
        msg: 'Welcome to Your Vue.js App',
        isTest: [],
        isGoldMallEnable:'',
//        coinsFast: this.isGoldMallEnable != 1 ? true : false,
        coinsFast:true,
      }
    },
    components: {
      "coins-head": Head,
      "coins-fast": CoinsFast,
      "coins-person": CoinsPerson,

    },
    created () {
        //对接商城状态
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/getGoldMallOpenedStatus',
        {
          params: {
            gameName:this.$route.query.gname
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
        console.log("请求成功！",res.body.isGoldMallEnable);
        this.isGoldMallEnable = res.body.isGoldMallEnable;
        if (this.isGoldMallEnable == 2) {
          document.getElementsByClassName("coin-kc")[0].style.marginTop=0.97+"rem";
          this.coinsFast=false
        }else{
          document.getElementsByClassName("coin-kc")[0].style.marginTop=0.2+"rem";
          this.coinsFast=true
        }
      }, () => {
        console.log("请求错误l！");

      });


      //获取角色信息
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
        {
          params: {
            gameName: this.$route.query.gname,
            regionName: this.$route.query.areaname,
            serverName: this.$route.query.servername,
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
        if(res.body.data[0]!=undefined){
          console.log(res.body.data[0].roleName);
          localStorage.openid = res.body.data[0].roleName;
          localStorage.qqNumber = res.body.data[0].qqNumber;
          localStorage.mobileNumber = res.body.data[0].mobileNumber;
          this.list=[{"name": localStorage.getItem('openid')}]
          this.isTest = [{"name": localStorage.getItem('openid')}]
        }else{
          localStorage.openid = "";
          localStorage.qqNumber = "";
          localStorage.mobileNumber = "";
          this.list=[];
          this.isTest=[];
        }

      }, () => {
        console.log("请求错误！");

      });



    },
    mounted(){
      if (this.isGoldMallEnable == 1) {
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.97+"rem";
        alert(1)
      }else{
        document.getElementsByClassName("coin-kc")[0].style.marginTop=0.2+"rem";
      }
    },

  }
</script>

<style scoped>

</style>
