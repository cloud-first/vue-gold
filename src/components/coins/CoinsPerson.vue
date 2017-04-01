<template>
  <!---------------------------- 库存信息 ---------------------------->
  <div class="coin-kc bg-fff">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">寄售交易</span></div>
      <div class="fr f28 color-888 lh110">卖家寄售在5173出售的游戏币</div>
    </div>
    <mt-loadmore
      :bottom-all-loaded="allLoaded" ref="loadmore"
      v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"
    >
      <ul class="clearfix">
        <li class="border-bottom p-30" v-for="personList in personLists">
          <!--<router-link :to="{name:'CoinsSales', query:abc}">-->
          <router-link
            :to="{name:'CoinsSales',query:{'deliveryNum':personList.deliveryNum,'unPrice':personList.unPrice,'unitNum':personList.unitNum,'unitName':personList.unitName,'gname': $route.query.gname,'areaname':$route.query.areaname,'servername':$route.query.servername,'goodsType':3,'gameId' : $route.query.gameId,'regionId' : $route.query.regionId,'serverId' : $route.query.serverId,'list': $route.query.list}}">
            <div class="clearfix">
              <span class="fl f32 color-010101">{{personList.unitNum}}{{personList.unitName}}</span>
              <b class="fr f32 color-f75e46">{{personList.money}}元</b>
            </div>
            <div class="clearfix mt-25">
              <div class="fl f28 color-010101">
                <span class="color-888">单价</span>1元={{personList.perPrices}}万金
              </div>
              <div class="fr">
                <i class="mr-20"><img src="~images/coins/mobile.png"></i><span class="f28 va15 color-888">库存 {{personList.deliveryNum}}件</span>
              </div>
            </div>
          </router-link>
        </li>
        <p id="coins_id" ref="coinsId" style="display: none;">
          <img src="~images/coins/loading-sm.gif">
          <span>请等待。。。</span>
        </p>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  var count = 0;
  export default{
    name: "CoinsPerson",
    data () {
      return {
        allLoaded: false,
        busy: false,
        personLists: [],
        abc: null,
        fastList:"",
        unPrice:'',
        moneyName:'',
        unitPrice:'',
        query: this.$route.query,
        list: {
          list: [{
            "name": localStorage.getItem('openid'),
          }]
        },
        pageSize:5,
        start:0,
      }
    },
    created(){

    },
    methods: {
//      loadTop(id) {
//        this.$refs.loadmore.onTopLoaded(id);
//        this.personLists.unshift({
//            "prices": "250",
//            "money": "500",
//            "url": "/images/common/mobile.png",
//            "kusun": "1",
//            "perPrices": "40.08"
//          }
//        )
//      },
      loadBottom(id) {
      },
      loadMore: function () {
        var self = this;
        self.busy = true;
        console.log('loading... ' + new Date());
        this.$refs.coinsId.style.display = "block"
//          document.getElementById('coins_id').style.display="block";
        this.start=this.start+5
        this.$http.get(
          '/api/mobile-goods-service/rs/goods/gold/selectByMUserGold',
          {
            params: {
              gameId:this.$route.query.gameId,  //游戏ID
              regionId:this.$route.query.regionId,  //游戏区ID
              serverId:this.$route.query.serverId,  //游戏服ID
              pageSize :this.pageSize,
              start :this.start,
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
          console.log(res.data.goodsEOList)
          res.data.goodsEOList.forEach(function(item){
            console.log(item)
            self.personLists.push(item)
          })


        }, () => {
          console.log("请求错误！");

        });

        console.log('end... ' + new Date());
        self.busy = false;
        self.$refs.coinsId.style.display = "none"

      },

      coins_url () {
        // 金币寄售
        this.$http.get(
          '/api/mobile-goods-service/rs/goods/gold/selectByMUserGold',
          {
            params: {
              gameId:this.$route.query.gameId,  //游戏ID
              regionId:this.$route.query.regionId,  //游戏区ID
              serverId:this.$route.query.serverId,  //游戏服ID
              pageSize :this.pageSize,
              start :this.start,
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
          console.log(res.data.goodsEOList)
          this.personLists = res.data.goodsEOList
        }, () => {
          console.log("请求错误！");

        });
      }
    },
    created () {
      this.coins_url();
//        this.$... shibu shi kogn de
      this.abc = {'query': this.$query}
      console.log(this.query)



    }

  }
</script>

<style>

</style>
