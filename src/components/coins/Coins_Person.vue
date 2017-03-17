<template>
  <!---------------------------- 库存信息 ---------------------------->
  <div class="coin-kc mt-20 bg-fff">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">寄售交易</span></div>
      <div class="fr f28 color-888 lh110">卖家寄售在5173出售的游戏币</div>
    </div>
    <ul class="clearfix">
      <li class="border-bottom p-30" v-for="personList in personLists">
        <router-link :to="{name:'CoinsSales', query:abc}">
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

    </ul>
  </div>
  <!--<div class="coin-kc mt-20 bg-fff">-->
    <!--<ul class="clearfix">-->
      <!--&lt;!&ndash;列表循环&ndash;&gt;-->
      <!--<li class="border-bottom p-30" v-for="personList in personLists">-->
        <!--<div class="clearfix">-->
          <!--<span class="fl f32 color-010101">{{personList.prices}}万金</span>-->
          <!--<span class="fr f32 color-f75e46">{{personList.money}}元</span>-->
        <!--</div>-->
        <!--<div class="clearfix mt-25">-->
          <!--<div class="fl f28 color-010101">-->
            <!--<span class="color-888">单价</span>1元={{personList.perPrices}}万金-->
          <!--</div>-->
          <!--<div class="fr">-->
            <!--<i class="mr-20"><img :src="personList.url"/></i><span class="f28 color-888">库存 {{personList.kusun}}</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
</template>

<script>
  export default{
      name:"CoinsPerson",
      data () {
        return {
          personLists:[],
          abc: null,
          query:this.$query
        }
      },
      methods: {
        a(){

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
        this.a();
//        this.$... shibu shi kogn de
        this.abc = {'query':this.$query}
      }

  }
</script>

<style>

</style>
