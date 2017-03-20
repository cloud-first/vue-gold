<template>
  <!---------------------------- 库存信息 ---------------------------->
  <div class="coin-kc mt-20 bg-fff">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">寄售交易</span></div>
      <div class="fr f28 color-888 lh110">卖家寄售在5173出售的游戏币</div>
    </div>
    <mt-loadmore
      :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore"
      v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0"
    	>
    <ul class="clearfix">
      <li class="border-bottom p-30" v-for="personList in personLists">
        <!--<router-link :to="{name:'CoinsSales', query:abc}">-->
        <router-link :to="{name:'CoinsSales',query: {'serverid':'YXF16053120325978800016','areaid':'YXQ16053120274791000015','gname': '地下城与勇士','areaname':'广东区','servername':'广东1区','goodsType':3,'list':JSON.stringify(list)}}">
          <div class="clearfix">
            <span class="fl f32 color-010101">{{personList.prices}}万金</span>
            <b class="fr f32 color-f75e46">{{personList.money}}元</b>
          </div>
          <div class="clearfix mt-25">
            <div class="fl f28 color-010101">
              <span class="color-888">单价</span>1元={{personList.perPrices}}万金
            </div>
            <div class="fr">
              <i class="mr-20"><img :src="personList.url"/></i><span class="f28 va15 color-888">库存 {{personList.kusun}}件</span>
            </div>
          </div>
        </router-link>
      </li>
      <p id="coins_id" style="display: none;">
        <img src="static/images/coins/loading-sm.gif">
        <span>请等待。。。</span>
      </p>
    </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  var count = 0;
  export default{
      name:"CoinsPerson",
      data () {
        return {
          allLoaded:false,
          busy:false,
          personLists:[],
          abc: null,
          query:this.$route.query,
          list: {
            list: [{
              "name": localStorage.getItem('openid'),
              "phone": "18738161475",
              "QQ": "601819456"
            },{
              "name": "吃盖浇饭",
              "phone": "18738161475",
              "QQ": "601819456"
            },{
              "name": "吃盖浇饭",
              "phone": "18738161475",
              "QQ": "601819456"
            },{
              "name": "吃盖浇饭",
              "phone": "18738161475",
              "QQ": "601819456"
            },{
              "name": "吃盖浇饭",
              "phone": "18738161475",
              "QQ": "601819456"
            },
            ]
          }
        }
      },
      methods: {
        loadTop(id) {
          this.$refs.loadmore.onTopLoaded(id);
          this.personLists.unshift({
				      "prices": "250",
				      "money": "500",
				      "url": "/static/images/common/mobile.png",
				      "kusun": "1",
				      "perPrices":"40.08"
				    }
          )
        },
        loadBottom(id) {

        },

        loadMore: function () {
          var self = this;
          self.busy = true;
          console.log('loading... ' + new Date());
          document.getElementById('coins_id').style.display="block";
          setTimeout(function () {
            self.personLists.push(
            	{
				      "prices": "250",
				      "money": "500",
				      "url": "/static/images/common/mobile.png",
				      "kusun": "1",
				      "perPrices":"40.08"
					    },
					    {
					      "prices": "250",
					      "money": "500",
					      "url": "/static/images/common/mobile.png",
					      "kusun": "1",
					      "perPrices":"40.08"
					    }
            	
            );
            console.log('end... ' + new Date());
            self.busy = false;
            document.getElementById('coins_id').style.display="none";
          }, 1000)
         },
        	
        coins_url () {
          const self = this
          this.$http.get('/static/json/data.json').then((response) => {
            setTimeout(() => {
//            console.log(response.body.lists)
              response.body.lists.forEach(function (i, n) {

              })
              this.personLists = response.body.lists
            }, 500)
          }, (response) => {
            console.log("error")
          })
        }
      },
      created () {
        this.coins_url();
//        this.$... shibu shi kogn de
        this.abc = {'query':this.$query}
        console.log(this.query)
      }

  }
</script>

<style>

</style>
