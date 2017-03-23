<template>

  <!---------------------------- 金币信息 ---------------------------->
  <div class="coin-msg mt-100 bg-fff pb-30">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">店铺发货</span>1元={{unitPrice}}万金</div>
      <div class="fr f28 color-888 lh110">15分钟内发货</div>
    </div>
    <ul class="clearfix px-20 mt-30">
      <li class="fl text-center px-10" v-for="(fastList, key) in fastLists">
      <router-link class="d-block f28 my-10 pt-10" :to="{name:'CoinsSome', query:{'fastListMoney':fastList,'unitPrice':unitPrice,'areaid':'YXQ16053120274791000015','gname': '地下城与勇士','areaname':'广东区','servername':'广东1区','goodsType':3,'list': $route.query.list}}">
      <b class="d-block f32 pb-5 color-f75e46 ">{{key}}元</b> {{fastList}}万金
      </router-link>
      </li>
      <li class="fl text-center px-10 ">
        <router-link class="d-block f32 my-10 color-f75e46" :to="{name:'CoinsElse', query:$route.query}">
          <b class="lh110">其他数额</b>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
//    name:"CoinsFast",
    data () {
      return {
        fastLists: [],
        unitPrice:'',
        list: {
          list: [{
            "name": localStorage.getItem('openid'),
            "phone": "18738161475",
            "QQ": "601819456"
          }
          ]
        }
      }
    },
    created: function () {
      const selfs = this
//      this.$http.get('/json/data.json').then((response)=>{
//        setTimeout(() => {
//          selfs.fastLists = response.body.fasts
//        }, 500)
//        },(response)=>{
//            console.log("error")
//        });

      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/getPriceConfig',
        {
          params: {
            gameId: "YX16053120241378200001",
            gameName: "地下城与勇士",
            regionName: "广东区",
            serverName: "广东1区",
          }

        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
        console.log(this.$route.query.gname)

        res = res.body;
        if (res.responseStatus.code == '00') {
          console.log(res.publicLimitPriceMap)
          selfs.fastLists = res.publicLimitPriceMap
          this.unitPrice = (1/res.unitPrice).toFixed(2)
        }
      }, () => {
        console.log("请求错误l！");

      });


//      this.$http.post(
//        '/api/mobile-searchCenter-service/rs/hotSearchService/queryAllHotSearch',
//        {
//            pageIndex:4,
//            poageSize:1
//        },
//        {
//            headers:{
//                contentType:"aplication/json; charset = UTF-8",
//                dataType:'json'
//            }
//        }
//
//      ).then((res) => {
//          res = res.body;
//          if(res.responseStatus.code == '00'){
//              console.log("sssssssss",res.result)
//
//          }
//      })


    }


  }
</script>

<style>

</style>
