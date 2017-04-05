<template>

  <!---------------------------- 金币信息 ---------------------------->
  <div class="coin-msg mt-100 bg-fff pb-30">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">店铺发货</span>1元={{unPrice}}{{moneyName}}</div>
      <div class="fr f28 color-888 lh110">{{deliveryMessage}}</div>
    </div>
    <ul class="clearfix px-20 mt-30">
      <li class="fl text-center px-10" v-for="(fastList, key) in fastLists">
      <router-link class="d-block f28 my-10 pt-10" :to="{name:'CoinsSome', query:{'fastListMoney':fastList,'unPrice':unPrice,'moneyName':moneyName,'unitPrice':unitPrice,'gname': $route.query.gname,'areaname':$route.query.areaname,'servername':$route.query.servername,'goodsType':3,'gid' : $route.query.gid,'areaid' : $route.query.areaid,'serverid' : $route.query.serverid,'list': $route.query.list}}">
      <b class="d-block f32 pb-5 color-f75e46 ">{{key}}元</b> {{fastList}}{{moneyName}}
      </router-link>
      </li>
      <li class="fl text-center px-10 ">
        <router-link class="d-block f32 my-10 color-f75e46" :to="{name:'CoinsElse', query:{'unPrice':unPrice,'totalCount':totalCount,'limitPrice':limitPrice,'moneyName':moneyName,'unitPrice':unitPrice,'gname': $route.query.gname,'areaname':$route.query.areaname,'servername':$route.query.servername,'goodsType':3,'gid' : $route.query.gid,'areaid' : $route.query.areaid,'serverid' : $route.query.serverid,'list': $route.query.list}}">
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
        unPrice:'',
        fastList:'',
        totalCount:'',
        deliveryMessage:'',
        moneyName:'',
        limitPrice:'',
        list: {
          list: [{
            "name": localStorage.getItem('openid'),
          }
          ]
        }
      }
    },
    created: function () {
      const selfs = this
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/getPriceConfig',
        {
          params: {
            gameId: this.$route.query.gid,
            gameName: this.$route.query.gname,
            regionName: this.$route.query.areaname,
            serverName: this.$route.query.servername,
            raceName:this.$route.query.raceName,
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
          console.log(res.publicLimitPriceMap);
          selfs.fastLists = res.publicLimitPriceMap;
          this.unitPrice = res.unitPrice;
          this.totalCount = res.totalCount;
          this.deliveryMessage = res.deliveryMessage;
          this.moneyName = res.moneyName;
          this.unPrice = (1/res.unitPrice).toFixed(2);
          this.limitPrice = res.limitPrice;
        }
      }, () => {
        console.log("请求错误l！");

      });


    }


  }
</script>

<style>

</style>
